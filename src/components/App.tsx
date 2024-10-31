import React from 'react';
import TeamMember from './components/TeamMember';
import './App.css';

function App() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      intro: "Passionate about creating intuitive and beautiful user experiences with over 8 years in UI/UX design.",
      image: "/images/member1.jpg"
    },
    {
      name: "James Rodriguez",
      role: "Full Stack Developer",
      intro: "Crafting robust and scalable solutions using modern technologies. Specialized in React and Node.js.",
      image: "/images/member2.jpg"
    },
    {
      name: "Emma Thompson",
      role: "Product Manager",
      intro: "Strategic thinker with a keen eye for market trends and user needs. Leading product vision and execution.",
      image: "/images/member3.jpg"
    },
    {
      name: "Michael Chang",
      role: "Frontend Developer",
      intro: "Creating pixel-perfect interfaces and smooth user experiences with modern web technologies.",
      image: "/images/member4.jpg"
    },
    {
      name: "Lisa Patel",
      role: "UX Researcher",
      intro: "Dedicated to understanding user behavior and translating insights into meaningful design decisions.",
      image: "/images/member5.jpg"
    },
    {
      name: "David Kim",
      role: "Backend Developer",
      intro: "Architecture specialist focusing on building secure and efficient server-side solutions.",
      image: "/images/member6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Team</h1>
        <p className="text-xl text-gray-300">Meet the creative minds behind our success</p>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
