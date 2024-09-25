import styles from './fakeheader.module.css';
import Image from 'next/image';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Fakeheader() {
    return (
        <div className={`${styles.headerMain} border-red-500`}>
            <div className={styles.headerLeft}>
                <div className={styles.mainLogoContainer}>
                    <Image
                        src={'/image/ws.png'}
                        alt="Main Logo"
                        objectFit="cover"
                        width={30}
                        height={30}
                    />
                </div>
                <h3 className={styles.worldSaga}>WorldSaga</h3>
            </div>
            <div className={styles.headerRight}>
                <span className={`hidden md:block ${styles.underline}`}>Blogs</span>
                <span className={`hidden md:block`}>Membership</span>
                <span className={`hidden md:block`}>Write</span>
                <span className={`hidden md:block`}>Contact</span>
                <span className={`hidden md:block`}><AcUnitIcon/></span>
                <span className={`hidden md:block`}><InstagramIcon/></span>
                <div className={`md:hidden`}>
                    <DragHandleOutlinedIcon />
                </div>
            </div>

        </div>
    )
}