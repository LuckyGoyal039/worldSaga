
import Image from "next/image"
// import mainLogo from '/image/ws.png'
import './header.css'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
export default function Header({ toggleSidebar }: any) {
    return (
        <div className="headerMain border-red-500">
            <div className="header-left">
                {/* <div>
                    <RxHamburgerMenu onClick={toggleSidebar} />
                </div> */}
                <div className="mainLogoContainer">
                    <Link href={'/'}>
                        <Image
                            src={'/image/ws.png'}
                            alt="Main Logo"
                            objectFit="cover"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
                <Link href={'/'}>
                    <h1 className="worldSaga">WorldSaga</h1>
                </Link>
            </div>
            <div className="header-right">
                <Link href={'/our-story'}>Our Story</Link>
                <Link href={'/sign-in'}>Membership</Link>
                <Link href={'/sign-in'}>Write</Link>
                <Link href={'/sign-in'}>Sign in</Link>
                <Link href={'/sign-in'}>Get Started</Link>
            </div>

        </div>
    )
}