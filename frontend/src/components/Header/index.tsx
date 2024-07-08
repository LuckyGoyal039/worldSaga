
import Image from "next/image"
import mainLogo from '../../assets/images/mainLogo.webp'
import './header.css'
import { RxHamburgerMenu } from "react-icons/rx";
export default function Header({ toggleSidebar }: any) {
    return (
        <div className="headerMain border-red-500">
            <div>
                <RxHamburgerMenu onClick={toggleSidebar} />
            </div>
            <div>
                <a href='/home'>Home</a>
                <a href='/trending'>Trending</a>
            </div>
            <div className="mainLogoContainer">
                <Image
                    src={mainLogo}
                    alt="Main Logo"
                    className="mianLogoImage"
                />
            </div>
        </div>
    )
}