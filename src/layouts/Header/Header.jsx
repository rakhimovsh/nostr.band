import { Link } from "react-router-dom"
import LinkButton from 'src/components/LinkButton/LinkButton'

import Logo from "src/assets/images/logo.png"
import Button from "../../components/Button/Button"


const Header = () => {
    return (
        <header className="pb-10">
            <div className="mb-5 flex justify-between items-center">
                <Link to='/' className="flex items-center gap-2">
                    <img className="w-10" src={Logo} alt='logo'/>
                    <h1 className="text-2xl font-bold text-gray-300">Nostr.Band</h1>
                </Link>
                <LinkButton>Login <i className="ms-3 fa-solid fa-right-to-bracket"></i></LinkButton>
            </div>
            <hr className="border-gray-500 mb-8" />
            <h2 className="text-3xl font-semibold text-gray-300 mb-5">
                Discover Nostr
            </h2>
            <div>
                <Button>People</Button>
                <Button outline>Posts</Button>
                <Button outline>Zapped</Button>
                <Button outline>Links</Button>
                <Button outline>Hashtags</Button>
                <Button outline>Images</Button>
                <Button outline>Video</Button>
                <Button outline>Audio</Button>
            </div>
        </header>
    )
}


export default Header