
import Image from "next/image"
import styles from './playwithgrid.module.css'
// import { FaRegCopyright } from "react-icons/fa";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from "next/link";
import ForgroundImage from '../../assets/images/getstaredForgroundImage.jpg'
import ForgroundDesktop from '../../assets/images/foregroundDesktop.jpg'
import GridComp from "../GridComp";
export default function GetStarted() {
    return (

        <div className={styles.outerMost}>
            <div className={styles.headingBox}>
                <h1 className={styles.heading}>Explore endless design options</h1>
            </div>
            <div className={""}>
                <div className={styles.gridWrap}>
                    <GridComp />
                </div>
            </div>
        </div>

    )
}