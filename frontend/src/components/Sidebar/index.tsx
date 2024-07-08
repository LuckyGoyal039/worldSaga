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
            <div className="options">
                <FaHome />
                <a href="/home">Home</a>
            </div>
            <div className="options">
                <FaCircleInfo />
                <a href="/about">About</a>
            </div>
            <div className="options">
                <LuLogIn />
                <a href="/login">Login</a>
            </div>
        </div >
    )
}