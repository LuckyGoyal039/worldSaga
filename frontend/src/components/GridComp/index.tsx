
import Image from "next/image"
import styles from './gridstyle.module.css'
import Header from "../Header";
import GreenImage from '../../assets/images/green.png'
import RedImage from '../../assets/images/red.png'
import Fakeheader from "../FakeHeader";
export default function GridComp() {
    return (
        <div className={styles.gridOuter}>

            <div className={styles.headerWrap}>
                <Fakeheader />
            </div>

            <hr className={styles.hrLine}></hr>

            <div className={`${styles.mainGrid} ${styles.basicGrid}`}>
                <div>
                    <Image src={GreenImage} alt="Green" width={300} height={300} className={styles.imageGreen} />
                </div>
                <div className={styles.content}>
                    <div className={`${styles.textCenter}`}>
                        <small className={`${styles.textColor} ${styles.mydate} `}>07.24.2020</small>
                    </div>
                    <div>
                        <h1 className={`${styles.textColor} ${styles.morningTea} ${styles.textCenter} `}>Morning Tea</h1>
                    </div>
                    <div className={`${styles.textCenter} ${styles.width50}`}>
                        <span >
                            <small>
                                Lorem ipsum dolor sit amet consectetur adipiscing elic,sed do eirsmod tempor incididunt ut labore et dolore
                            </small>
                        </span>
                    </div>
                    <div>
                        <small className={`${styles.readMore} ${styles.textColor}`}>Read More</small>
                    </div>
                </div>

                <div>
                    <Image src={RedImage} alt="Red" width={360} height={360} className={styles.imageRed} />
                </div>
                <div className={styles.content}>
                    <div><small className={`${styles.textColor} ${styles.mydate}`}>07.24.2020</small></div>
                    <div>
                        <h1 className={`${styles.textColor} ${styles.morningTea}`}>something else</h1>
                    </div>
                    <div>
                        <span>
                            <small>
                                Lorem ipsum dolor sit amet consectetur adipiscing elic,sed do eirsmod tempor incididunt ut labore et dolore
                            </small>
                        </span>
                    </div>
                    <div>
                        <small className={`${styles.readMore} ${styles.textColor}`}>Read More</small>
                    </div>
                </div>
            </div>
        </div>
    )
}