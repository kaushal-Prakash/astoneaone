"use client";

import AboutComponent from "../about component/AboutComponent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const ProductCategories = [
  {
    title: "HERBONUTRIGENX",
    img: "https://astoneaone.com/Managepanel/images/NewProducts/18552024105552Prod_11_0.png",
    content:
      "Focuses on herbal and nutritional supplements aimed at boosting overall health. Think vitamins, minerals, and herbal blends designed to enhance your well-being.",
  },
  {
    title: "DRMAART",
    img: "https://astoneaone.com/Managepanel/images/NewProducts/18572024105723Prod_8_0.png",
    content:
      "Possibly a category dedicated to medical or healthcare-related products. This could range from medical devices to essential health monitoring tools.",
  },
  {
    title: "AMBER ONE",
    img: "https://astoneaone.com/Managepanel/images/NewProducts/18522024105205Prod_18_0.png",
    content:
      "Sounds unique! This might represent a specialized product line—perhaps something like skincare, wellness items, or even exclusive blends of natural products.",
  },
  {
    title: "KNOWLEDGE BOOKS",
    img: "https://astoneaone.com/Managepanel/images/NewProducts/28382024043826Prod_54_0.png",
    content:
      "Exactly what it sounds like—books that feed your brain. This could include everything from self-help and educational books to more niche subjects.",
  },
  {
    title: "QUADCEE",
    img: "https://astoneaone.com/Managepanel/images/NewProducts/18492024104947Prod_26_0.png",
    content:
      "This one’s a bit enigmatic but could imply products related to Vitamin C or immunity-boosting supplements, considering the 'C' in the name.",
  },
  {
    title: "NATURAYU",
    img: "https://astoneaone.com/Managepanel/images/NewProducts/07012024010105Prod_58_0.png",
    content:
      "Products rooted in natural and Ayurvedic traditions. Think herbal remedies, natural skincare, and wellness products grounded in traditional medicine practices.",
  },
  {
    title: "GENERAL HEALTHCARE",
    img: "https://astoneaone.com/Managepanel/images/NewProducts/28352024043519Prod_30_0.png",
    content:
      "A broad category encompassing various health-related products, possibly including over-the-counter medications, first aid supplies, and general health maintenance items.",
  },
  {
    title: "HILLS AND BEACHES",
    img: "https://astoneaone.com/Managepanel/images/NewProducts/17162024051637Prod_45_0.png",
    content:
      "This evokes thoughts of outdoor or travel-related products—gear for adventures, travel essentials, and perhaps wellness products geared towards an active, travel-loving lifestyle.",
  },
];

function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".who-we",
        start: "top 130%",
        end: "top 70%",
        scrub: 0.4,
      },
    });

    t1.fromTo(
      ".who-we",
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo(
      ".who-we-p",
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    ).fromTo(
      ".about-cat",
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 1, delay: 0.1 }
    );

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-commit",
        start: "top 50%",
        end: "top 90%",
        scrub: 1,
      },
    });

    t2.fromTo(
      ".about-commit",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1,stagger:0.4 }
    );
  }, []);

  return (
    <div className="w-full min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto mt-24">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-600 who-we">
            Who We Are
          </h1>
          <div className="text-center mb-10">
            {/* Uncomment and update the Image src when available */}
            {/* <Image src="/path/to/image.jpg" width={600} height={400} alt="Team Image" /> */}
            <p className="mt-4 text-lg text-gray-700 who-we-p">
              Diamond Group consists of a diverse team of dedicated
              professionals committed to innovation and excellence. We believe
              in the power of collaboration and strive to bring the best to our
              customers. Our team's expertise spans multiple fields, allowing us
              to develop products that cater to the diverse needs of our
              clientele.
            </p>
          </div>
        </section>

        <section className="mb-16 mt-10">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-600 about-cat">
            Our Product Categories
          </h1>
          <div className="grid grid-cols-1 gap-14 mt-14">
            {ProductCategories.map((product) => (
              <AboutComponent
                key={product.title}
                title={product.title}
                content={product.content}
                img={product.img}
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-600 about-commit">
            Our Commitment
          </h1>
          <p className="text-lg text-gray-700 text-justify about-commit">
            At Diamond Group, we are committed to providing products that
            combine quality and affordability. Our customers' satisfaction is
            our top priority, and we continuously strive to improve and innovate
            our product offerings. We understand that quality products should be
            accessible to everyone, and we work tirelessly to ensure our prices
            remain competitive.
          </p>
        </section>

        <section>
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-600 about-commit">
            Join Us on Our Journey
          </h1>
          <p className="text-lg text-gray-700 text-justify about-commit">
            We invite you to explore our products and experience the difference
            that Diamond Group brings to your everyday life. Thank you for
            choosing us as your trusted partner in health and personal care.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
