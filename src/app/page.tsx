'use client'
import Navbar from "@/components/navbar/Navbar";
import TypewriterText from "@/components/typewriter text/TypewriterText";
import Image from "next/image";
import About from "@/components/about section/About";
import Footer from "@/components/footer/Footer";
import LeadSection from "@/components/leads section/LeadSection";
import Contact from "@/components/contact section/Contact";
import './index.css'


export default function Home() {

  return (
    <div id="home" className="absolute inset-0 -z-10 min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Logo */}
        <div className="flex items-center justify-center translate-y-72">
          <Image 
            src="/logo.png" 
            alt="Astoneaone Logo"
            width={400}
            height={400}
            className="max-w-full h-auto home-logo custom-logo" // Apply custom CSS class
            layout="responsive" // This makes the image responsive
          />
        </div>

        {/* Diamond Group text */}
        <div className="text-center mb-4 translate-y-60">
          <p className="text-xl font-semibold text-purple-600 home-diamond">Diamond Group</p>
        </div>

        {/* Typewriter Text */}
        <div className="text-center mb-8 home-tagline">
          <TypewriterText s="Trusted Care, Every Day" />
        </div>

      </div>

      <About />
      <LeadSection />
      <Contact />
      <Footer />
    </div>
  );
}
