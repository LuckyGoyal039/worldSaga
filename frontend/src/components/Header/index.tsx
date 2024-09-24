
import Image from "next/image"
// import mainLogo from '/image/ws.png'
import './header.css'
import { RxHamburgerMenu } from "react-icons/rx";
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import Link from "next/link";
export default function Header({ toggleSidebar }: any) {
    return (
        <div className="headerOuter">
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
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                    <Link href={'/'}>
                        <h3 className="worldSaga">WorldSaga</h3>
                    </Link>
                </div>
                <div className="header-right">
                    <div className="hidden md:block">
                        <Link href={'/our-story'}>Our Story</Link>
                    </div>
                    <div className="hidden md:block">

                        <Link href={'/sign-in'}>Membership</Link>
                    </div>
                    <div className="hidden md:block">

                        <Link href={'/sign-in'}>Write</Link>
                    </div>
                    <div className="hidden md:block">

                        <Link href={'/sign-in'}>Get Started</Link>
                    </div>
                    <div className="loginDiv">
                        <Link href={'/sign-in'}>Log in</Link>
                        <span>L</span>
                    </div>
                    <div className="singupDiv">
                        <Link href={'/sign-in'}>Sign up</Link>
                    </div>
                    <div className="md:hidden">
                        <DragHandleOutlinedIcon />
                    </div>
                </div>

            </div>
        </div>
    )
}