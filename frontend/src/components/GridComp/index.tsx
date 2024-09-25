
import Image from "next/image"
import styles from './gridstyle.module.css'
import Header from "../Header";
import GreenImage from '../../assets/images/green.png'
import RedImage from '../../assets/images/red.png'
import Fakeheader from "../FakeHeader";
export default function GridComp() {
    return (
        <div className={styles.gridOuter}>
            <Fakeheader />
            <div className={styles.mainGrid}>
                <div>
                    <Image src={GreenImage} alt="Green" width={100} height={100} />
                </div>
                <div>
                    <div><small>07.24.2020</small></div>
                    <div>
                        <h1>Morning Tea</h1>
                    </div>
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipiscing elic,sed do eirsmod tempor incididunt ut labore et dolore
                        </span>
                    </div>
                    <div>
                        <small>Read More</small>
                    </div>
                </div>

                <div><Image src={RedImage} alt="Red" width={100} height={100}/></div>

                <div>
                    <div><small>07.24.2020</small></div>
                    <div>
                        <h1>Work Coffee</h1>
                    </div>
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipiscing elic,sed do eirsmod tempor incididunt ut labore et dolore
                        </span>
                    </div>
                    <div>
                        <small>Read More</small>
                    </div>
                </div>
            </div>
        </div >

    )
}