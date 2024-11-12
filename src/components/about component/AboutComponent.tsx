"use client";

import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

interface AboutComponentProps {
    title: string;
    content: string;
    img: string,
}

const AboutComponent: React.FC<AboutComponentProps> = ({ title, content, img }) => {

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-category",
          start:"top 90%",
          end:"top -200%",
          scrub: 1,
        }
      });

      t1.fromTo(".about-category",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, stagger: 0.8, duration: 2,delay:1 }
      );

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-category",
          start:"top 90%",
          end:"top -200%",
          scrub: 1,
        }
      });
      t2.fromTo(".about-img",
        {opacity:0,y:300},
        {opacity:1,y:0,duration:1.5,stagger:0.4,delay:0.3}
      );

      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-category",
          start:"top 90%",
          end:"top -200%",
          scrub: 1,
        }
      });
      t3.fromTo(".about-h",
        {opacity:0,x:400},
        {opacity:1,x:0,duration:1.5,stagger:0.4}
      );
    }, []);


  return (
    <div className="flex flex-col min-h-56 md:flex-row items-center about-category
     md:items-start gap-4 bg-white p-10 rounded-md shadow-md">
      <div className="flex-shrink-0 w-20 h-20 md:w-1/3 grid place-content-center">
        <Image 
          src={img} 
          alt={title} 
          width={80} 
          height={80} 
          className="object-cover md:translate-y-1/3 -translate-y-1 about-img"
        />
      </div>
      <div className="flex-grow w-full md:w-2/3 md:ml-4 justify-center items-center">
        <h2 className="text-xl font-bold mb-2 about-h">{title}</h2>
        <p className="text-base text-justify about-p">{content}</p>
      </div>
    </div>
  );
}

export default AboutComponent;
