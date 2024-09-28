
import Image from "next/image"
import styles from './playwithgrid.module.css'
// import { FaRegCopyright } from "react-icons/fa";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from "next/link";
import ForgroundImage from '../../assets/images/getstaredForgroundImage.jpg'
import ForgroundDesktop from '../../assets/images/foregroundDesktop.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import GridComp from "../GridComp";
import { useState } from "react";
export default function GetStarted() {
    const [selectedOption, setSelectedOption] = useState(3);

    const flexList: { value: number; label: string }[] = [
        { value: 1, label: 'Basic Grid' },
        { value: 2, label: 'Side by Side Blog' },
        { value: 3, label: 'Single Column Blog' },
        { value: 4, label: 'Alternative Side by Side Blog' }
    ]
    const selectOption = (event: any) => {
        setSelectedOption(event.target.value);
    }
    return (

        <div className={styles.outerMost}>
            <div className={styles.item1}>
                <h1 className={styles.heading}>Explore endless design options</h1>
            </div>
            <div className={styles.item2}>
                <div className={styles.gridWrap}>
                    <GridComp currOption={selectedOption}/>
                </div>
            </div>
            <div className={styles.item3}>
                <p>Bring your vision to life with Squarespace’s flexible blog layouts, custom color palettes, cohesive fonts, access to high-quality stock images, and built-in photo editing capabilities.</p>
                <Link href="/" className={styles.getStartedLink}>Get Started <ArrowForwardIcon /></Link>
            </div>

            <div className={styles.item4}>
                <div className={styles.flexTypeBox}>
                    <ul className={styles.optionsList}>
                        <li className={`${styles.layout} pl-3 pt-5`}>LAYOUT</li>
                        {
                            flexList.map((entry: { value: number; label: string }) => {
                                return <div className="flex pr-5 items-center hover:bg-gray-200">
                                    <li className={`pl-4 py-4 text-sm w-56`} onClick={selectOption} value={entry.value}>{entry.label}</li>
                                    {
                                        selectedOption == entry.value ? <CheckIcon className="text-gray-600"/> : null
                                    }
                                </div>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}