'use client'

import { FaHome } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { FaCircleInfo } from "react-icons/fa6";
import './sidebar.css'

export default function Sidebar({ toggleSidebar }: any) {
    
    return (
        <div className="main">
            <div className="menuOption">
                <h6>My menu</h6>
                <RxCross1 onClick={toggleSidebar} />
            </div>
            <a href='/home' className="options">
                <FaHome />
                <span>Home</span>
            </a>
            <a href="/about" className="options">
                <FaCircleInfo />
                <span>About</span>
            </a>
            <a className="options" href="/sign-in">
                <LuLogIn />
                <span>Sign Up</span>
            </a>
        </div >
    )
}