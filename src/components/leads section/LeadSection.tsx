import React from "react";
import LeaderCard from "@/components/lead card/LeadCard";

const leaders = [
  {
    name: "John Doe",
    image: "/leaders/1.jpg",
    quote: "Leadership is not about being in charge. It's about taking care of those in your charge.",
    facebook: "https://www.facebook.com/johndoe",
    instagram: "https://www.instagram.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    image: "/leaders/2.png",
    quote: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
    facebook: "https://www.facebook.com/janesmith",
    instagram: "https://www.instagram.com/janesmith",
    linkedin: "https://www.linkedin.com/in/janesmith",
  },
  {
    name: "Jane Smith",
    image: "/leaders/2.png",
    quote: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
    facebook: "https://www.facebook.com/janesmith",
    instagram: "https://www.instagram.com/janesmith",
    linkedin: "https://www.linkedin.com/in/janesmith",
  },
  {
    name: "Jane Smith",
    image: "/leaders/2.png",
    quote: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
    facebook: "https://www.facebook.com/janesmith",
    instagram: "https://www.instagram.com/janesmith",
    linkedin: "https://www.linkedin.com/in/janesmith",
  },
  // Add more leader objects as needed
];

const LeadSection: React.FC = () => {
  return (
    <div id="leaders" className="w-full min-h-screen p-6 mb-20 lead-card-container">
      <div className="w-full mt-20 mb-20">
        <h1 className="w-full text-center text-3xl md:text-4xl font-semibold">OUR LEADERS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((leader, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <LeaderCard
              name={leader.name}
              image={leader.image}
              quote={leader.quote}
              facebook={leader.facebook}
              instagram={leader.instagram}
              linkedin={leader.linkedin}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadSection;
