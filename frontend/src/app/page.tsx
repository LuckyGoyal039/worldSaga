'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)
  function toggleSidebar() {
    setShowSidebar(prev => !prev);
  }
  return (
    <div>

      <main>
        <Header toggleSidebar={toggleSidebar} />
        <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
      </main>
    </div>
  );
}
