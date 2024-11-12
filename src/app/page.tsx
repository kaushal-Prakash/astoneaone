'use client'
import Navbar from "@/components/navbar/Navbar";
import TypewriterText from "@/components/typewriter text/TypewriterText";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading,setLoading] = useState(true);
  useEffect(()=> {
    const t1 = gsap.timeline();
    t1.fromTo(".home-logo",
      {scale:0 , opacity:0},
      {scale:1, opacity:1, duration:1,delay:1}
    ).fromTo('.home-diamond',
      {y:20,opacity:0},
      {opacity:1,y:0,duration:1,ease:"elastic.out"}
    ).fromTo(".home-tagline",
      {y:30,opacity:0},
      {y:0,opacity:1,scale:1,duration:1,ease:"elsatic.out"}
    )
  },[loading])

  return (
    <div className="absolute inset-0 -z-10 min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Logo */}
        <div className="flex items-center justify-center translate-y-80 md:translate-y-52">
          <Image 
            src="/logo.png" 
            alt="Astoneaone Logo"
            width={200}  // Set the appropriate width for the logo
            height={200} // Set the appropriate height for the logo
            className="max-w-full h-auto home-logo" // Ensure it remains responsive
          />
        </div>

        {/* Diamond Group text */}
        <div className="text-center mb-4 translate-y-72 md:translate-y-48">
          <p className="text-xl font-semibold text-purple-600 home-diamond">Diamond Group</p>
        </div>

        {/* Typewriter Text */}
        <div className="text-center mb-8 home-tagline">
          <TypewriterText s="Trusted Care, Every Day" />
        </div>


      </div>
    </div>
  );
}
