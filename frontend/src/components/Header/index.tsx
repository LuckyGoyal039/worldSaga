
import Image from "next/image"
import mainLogo from '../../assets/images/mainLogo.webp'
import './header.css'
import { RxHamburgerMenu } from "react-icons/rx";
export default function Header({ toggleSidebar }: any) {
    return (
        <div className="headerMain border-red-500">
            <div className="mainLogoContainer">
                <Image
                    src={mainLogo}
                    alt="Main Logo"
                    className="mianLogoImage"
                />
            </div>
            <div>
                <RxHamburgerMenu onClick={toggleSidebar} />
            </div>
        </div>
    )
}