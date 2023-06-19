import ProfileCard from "../../components/ProfileCard/ProfileCard"
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import useFetch from '../../hooks/useFetch'


const Profiles = () => {

    const { data, loading, error } = useFetch('/trending/profiles')

    return <>
        <div className="flex flex-wrap gap-8 justify-center">
            {
                loading ? <>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </> :
                    <>
                        {
                            data?.profiles?.map((profile) => <ProfileCard key={profile.pubkey} profile={profile?.profile?.content} />)
                        }
                    </>

            }
            {
                error && <h2>Error while getting profiles</h2>
            }
        </div>
    </>
}


export default Profiles