'use client'
import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


interface LeaderCardProps {
  name: string;
  image: string;
  quote: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  name,
  image,
  quote,
  facebook,
  instagram,
  linkedin,
}) => {


  useEffect(()=> {

    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".lead-card-container",
        start:"top 90%",
        end:"top -60%",
        scrub: 0.5,
      }
    });

    t1.fromTo(".lead-card",
      {opacity:0,y:100,x:-30},
      {opacity:1,y:0,x:0,duration:1,stagger:0.4}
    )
    

  },[])

  return (
    <div className="relative flex flex-col items-center p-6 bg-slate-400 lead-card rounded-xl shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-30 blur-lg"></div>
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <Image
          className="rounded-full border-4 border-white shadow-md"
          src={image}
          alt={name}
          width={96}
          height={96}
          objectFit="cover"
        />
        <h3 className="text-2xl font-bold text-black">{name}</h3>
        <p className="text-center text-black-500 italic">{quote}</p>
        <div className="flex space-x-3 mt-3">
          <a
            href={facebook}
            className="text-white hover:text-gray-200 transition duration-150 ease-in-out"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href={instagram}
            className="text-white hover:text-gray-200 transition duration-150 ease-in-out"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href={linkedin}
            className="text-white hover:text-gray-200 transition duration-150 ease-in-out"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
