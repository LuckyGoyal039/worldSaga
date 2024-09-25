
import Image from "next/image"
import styles from './getStarted.module.css'
// import { FaRegCopyright } from "react-icons/fa";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from "next/link";
import ForgroundImage from '../../assets/images/getstaredForgroundImage.jpg'
import ForgroundDesktop from '../../assets/images/foregroundDesktop.jpg'
export default function GetStarted() {
    return (

        <div className={`${styles.OuterMost}`}>
            <div className={`${styles.flexDiv}`}>
                <div className={`${styles.sideLeft}`}>
                    <div className={`${styles.subBlogHead}`}>
                        <h4>WEBSITE</h4>
                        <span><ArrowBackIosIcon /></span>
                        <h4>BLOGS</h4>
                    </div>
                    <div className={`${styles.createBlog}`}>
                        <h2>Create a blog</h2>
                    </div>
                    <div>
                        <p>Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.</p>
                    </div>
                    <div className={`${styles.buttonWrap}`}>
                        <button type="button" className={`bg-blue-500 hover:bg-blue-700 px-8 py-4 ${styles.getStartedBtn}`} >Get Started</button>
                    </div>

                </div>
                <div className={`${styles.sideRight}`}>
                    <div className={`${styles.imageWrap}`}>
                        <Image src={ForgroundDesktop} width={1000} height={1000} className={`${styles.foreground}`} alt="Forground" />
                    </div>
                </div>
            </div>
        </div>

    )
}