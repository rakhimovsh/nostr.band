import LinkButton from "../LinkButton/LinkButton"
import {parseJson} from '../../utils/parseJson'
import {nip19} from "nostr-tools";
import {shortenString} from "src/utils/shortenString.js";
import useFetch from "src/hooks/useFetch.js";
import {formatNumber} from "src/utils/formatNumber.js";


const ProfileCard = ({profile = '', pubkey, newFollowers}) => {
    const {picture, banner, display_name, about} = parseJson(profile)
    let npub = nip19.npubEncode(pubkey)
    const {data} = useFetch(`/stats/profile/${npub}`)


    const stats = data?.stats[pubkey]
    const copy = async () => {
        await navigator.clipboard.writeText(npub);
        alert('Text copied');
    }

    console.log(stats)

    return (
        <div className="flex flex-col max-w-sm rounded-lg shadow bg-gray-800 border-gray-700 w-full overflow-hidden">
            <div className="flex align-middle justify-center py-8 rounded-t-lg bg-center bg-auto"
                 style={{backgroundImage: `url(${banner})`}}>
                <img loading="lazy" className="object-cover rounded-full w-28 h-28 border-solid border-2 border-white"
                     src={picture} alt=""/>
            </div>
            <hr className="border-gray-500"/>
            <div className="p-5 flex flex-col h-full">
                <h4 className="text-white text-base font-medium">{display_name}</h4>
                <span className='text-gray-200 mb-2'>{shortenString(npub)}
                    <button onClick={copy}><i className="fa-solid fa-copy"></i></button></span>
                <p className="mb-3 font-normal text-gray-300">{about}</p>
                <div className='text-gray-200 flex items-center justify-center gap-2 mb-3'>
                    <p><span className='font-bold text-gray-100'>{stats?.pub_following_pubkey_count}</span> <br/> Following
                    </p> |
                    <span className="relative inline-block">
                        <p><span className='font-bold text-gray-100'>{stats?.followers_pubkey_count}</span> <br/> Followers</p>
                        <span
                            className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            +{newFollowers}
                        </span>
                    </span> |
                    <p><span/>{formatNumber(stats?.zaps_received?.msats) || 10} <br/> sats received</p>
                </div>
                <div className="flex gap-2 align-middle mt-auto flex-wrap">
                    <LinkButton>
                        <i className="fa-solid fa-magnifying-glass mr-2"></i> View
                    </LinkButton>
                    <LinkButton>
                        <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i> Open
                    </LinkButton>
                    <LinkButton>
                        <i className="fa-solid fa-user-plus mr-2"></i> Follow
                    </LinkButton>
                    <LinkButton><i className="fa-solid fa-ellipsis-vertical"></i></LinkButton>
                </div>
            </div>
        </div>
    )
}


export default ProfileCard