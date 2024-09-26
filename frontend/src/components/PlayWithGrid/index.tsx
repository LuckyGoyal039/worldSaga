
import Image from "next/image"
import styles from './playwithgrid.module.css'
// import { FaRegCopyright } from "react-icons/fa";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from "next/link";
import ForgroundImage from '../../assets/images/getstaredForgroundImage.jpg'
import ForgroundDesktop from '../../assets/images/foregroundDesktop.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GridComp from "../GridComp";
export default function GetStarted() {
    return (

        <div className={styles.outerMost}>
            <div className={styles.item1}>
                <h1 className={styles.heading}>Explore endless design options</h1>
            </div>
            <div className={styles.item2}>
                <div className={styles.gridWrap}>
                    <GridComp />
                </div>
            </div>
            <div className={styles.item3}>
                <p>Bring your vision to life with Squarespace’s flexible blog layouts, custom color palettes, cohesive fonts, access to high-quality stock images, and built-in photo editing capabilities.</p>
                <Link href="/" className={styles.getStartedLink}>Get Started <ArrowForwardIcon /></Link>
            </div>
        </div>

    )
}