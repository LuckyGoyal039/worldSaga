
import Image from "next/image"
import mainLogo from '../../assets/images/mainLogo.webp'
import './footer.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
    return (
        <div className="main">
            <div className="flexbox">
                <div className="s-left">
                    <div className="imageContainer">
                        <Image src={'/image/ws.png'} alt="main logo" objectFit="cover" width={100} height={100} />
                    </div>
                </div>
                <div className="s-right">
                    <div className="resources">
                        <p className="resourceText">Resources</p>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/blogs'}>Blogs</Link>
                        <Link href={'/plans'}>Plan & Prices</Link>
                    </div>
                    <div className="subscribe">
                        <h6 className="subscribeHead">Subscribe to our newsletter</h6>
                        <p className="subscribeMesg">Stay updated on new releases and features, guides, and case studies.</p>
                        <div>
                            <form>
                                <div className="inputBox">
                                    <input type="email" placeholder="you@domain.com" className="subscribeEmail" />
                                    <button className="subBtn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copywrite">
                <FaRegCopyright />
                <span>2024 Worldsaga Inc. All rights reserved.</span>
            </div>
        </div>
    )
}