"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        message,
      });
      if (response.status === 200) {
        setResponseMessage("Your request has been submitted successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-element",
        start: "top 50%",
        end: "top 20%",
        scrub: 0.3,
        markers:true
      },
    });

    t1.fromTo(
      ".contact-element",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, stagger: 0.4, duration: 1}
    );
  }, []);

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 contact-element">Contact me</h1>
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex justify-center flex-col gap-2">
          <button
            type="submit"
            className="px-4 py-2 shadow-md bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {responseMessage && (
            <p className="mt-4 mb-4 text-center text-lg font-medium">
              {responseMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Contact;
