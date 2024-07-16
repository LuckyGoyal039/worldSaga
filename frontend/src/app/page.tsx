'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import type { Metadata } from 'next'

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)
  function toggleSidebar() {
    setShowSidebar(prev => !prev);
  }
  return (
    <div>
      <main>
        <Head>
          {/* not working */}
          <title>WorldSaga</title>
        </Head>
        <Header toggleSidebar={toggleSidebar} />
        <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
