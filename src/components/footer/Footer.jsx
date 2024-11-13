import React from "react";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full h-fit flex flex-col items-center text-center text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-xy overflow-hidden">
      <div className="container mx-auto p-6">
        <div className="mb-6 flex justify-center space-x-4 backdrop-blur-md bg-white/30 rounded-full p-4">
          <a
            href="https://www.facebook.com/your_facebook_handle"
            className="rounded-full p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-white/40 hover:text-black focus:outline-none focus:ring-0 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <FaFacebook className="h-5 w-5" />
          </a>

          <a
            href="https://www.instagram.com/your_instagram_handle"
            className="rounded-full p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-white/40 hover:text-black focus:outline-none focus:ring-0 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          <a
            href="tel:your_phone_number"
            className="rounded-full p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-white/40 hover:text-black focus:outline-none focus:ring-0 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <FaPhone className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="w-full bg-black/5 p-4 text-center backdrop-blur-md rounded-full">
        © 2024 Copyright Diamond Group
      </div>

      {/* Additional styling to ensure the gradient changes over time */}
      <style jsx>{`
        @keyframes gradient-background {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-background 10s ease infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
