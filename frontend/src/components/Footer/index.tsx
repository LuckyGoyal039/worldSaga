
import Image from "next/image"
import styles from './footer.module.css'
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.flexbox}`}>
                <div className={`${styles.sLeft}`}>
                    <div className={`${styles.imageContainer}`}>
                        <Image src={'/image/ws.png'} alt="main logo" objectFit="cover" width={100} height={100} />
                    </div>
                </div>
                <div className={`${styles.sRight}`}>
                    <div className={`${styles.resources}`}>
                        <p className={`${styles.resourceText}`}>Resources</p>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/blogs'}>Blogs</Link>
                        <Link href={'/plans'}>Plan & Prices</Link>
                    </div>
                    <div className={`${styles.subscribe}`}>
                        <h6 className={`${styles.subscribeHead}`}>Subscribe to our newsletter</h6>
                        <p className={`${styles.subscribeMesg}`}>Stay updated on new releases and features, guides, and case studies.</p>
                        <div>
                            <form>
                                <div className={`${styles.inputBox}`}>
                                    <input type="email" placeholder="you@domain.com" className={`${styles.subscribeEmail}`} />
                                    <button className={`${styles.subBtn}`}>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.copywrite}`}>
                <FaRegCopyright />
                <span>2024 Worldsaga Inc. All rights reserved.</span>
            </div>
        </div>
    )
}