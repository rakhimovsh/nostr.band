import LinkButton from "../LinkButton/LinkButton"
import { parseJson } from '../../utils/parseJson'


const ProfileCard = ({ profile = '' }) => {
    const { picture, banner, display_name, about } = parseJson(profile)
    return (
        <div className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full overflow-hidden">
            <div className="flex align-middle justify-center py-8 rounded-t-lg" style={{ backgroundImage: `url(${banner})` }}>
                <img className="object-cover rounded-full w-28 h-28 border-solid border-2 border-white" src={picture} alt="" />
            </div>
            <hr className="border-gray-500"/>
            <div className="p-5 flex flex-col h-full">
                <h4 className="text-gray-100 text-base font-medium">{display_name}</h4>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>
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