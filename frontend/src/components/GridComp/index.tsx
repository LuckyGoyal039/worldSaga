
import Image from "next/image"
import styles from './gridstyle.module.css'
import Header from "../Header";
import GreenImage from '../../assets/images/green.png'
import RedImage from '../../assets/images/red.png'
import Fakeheader from "../FakeHeader";
export default function GridComp({ currOption }: { currOption: number }) {
    console.log(currOption);
    return (
        <div className={styles.gridOuter}>

            <div className={styles.headerWrap}>
                <Fakeheader />
            </div>

            <hr className={styles.hrLine}></hr>

            <div className={`${styles.mainFlex} flex ${currOption == 1 ? 'flex-row' : 'flex-col'}`}>
                <div className={`flex ${currOption == 1 || currOption == 3 ? 'flex-col sm:px-0 px-6' : 'flex-row gap-5 px-5 '} `}>
                    <div className="flex justify-center">
                        <Image src={GreenImage} alt="Green" width={300} height={300} className={styles.imageGreen} />
                    </div>
                    <div className={`${styles.content} ${currOption == 1 || currOption == 3 ? 'justify-center items-center' : 'w-80'}`}>
                        <div>
                            <small className={`${styles.textColor} ${styles.mydate} `}>07.24.2020</small>
                        </div>
                        <div>
                            <h1 className={`${styles.textColor} ${styles.morningTea}`}>Morning Tea</h1>
                        </div>
                        <div className={`${currOption == 1 ? 'text-center' : ''} ${currOption == 3 ? 'w-80 text-center sm:w-80 w-72' : ''}`}>
                            <span>
                                <small>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elic,sed do eirsmod tempor incididunt ut labore et dolore
                                </small>
                            </span>
                        </div>
                        <div className={` ${currOption == 1 ? 'text-center' : ''}`}>
                            <small className={`underline ${styles.textColor}`} >Read More</small>
                        </div>
                    </div>
                </div>
                <div className={`flex ${currOption == 1 || currOption == 3 ? 'flex-col' : 'flex-row gap-5 px-5 '} ${currOption == 4 ? 'flex-row-reverse' : ''} `}>
                    <div className="flex justify-center">
                        <Image src={RedImage} alt="Red" width={360} height={360} className={styles.imageRed} />
                    </div>
                    <div className={`${styles.content} ${currOption == 1 ? 'justify-center items-center' : 'w-80'}`}>
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
        </div>
    )
}