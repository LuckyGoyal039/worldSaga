
import Image from "next/image"
import styles from './header.module.css'
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import Link from "next/link";
export default function Header({ toggleSidebar }: any) {
    return (
        <div className={`${styles.headerMain} border-red-500`}>
            <div className={`${styles.headerLeft}`}>
                <div className={`${styles.mainLogoContainer}`}>
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
                    <h3 className={`${styles.worldSaga}`}>WorldSaga</h3>
                </Link>
            </div>
            <div className={`${styles.headerRight}`}>
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
                <div className={`${styles.loginDiv}`}>
                    <Link href={'/sign-in'}>Log in</Link>
                    <span className="L">L</span>
                </div>
                <div className={`{styles.singupDiv}`}>
                    <Link href={'/sign-in'}>Sign up</Link>
                </div>
                <div className="md:hidden">
                    <DragHandleOutlinedIcon />
                </div>
            </div>

        </div>
    )
}