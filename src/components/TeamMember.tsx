import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  intro: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, intro, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <h3 className="text-xl text-purple-400 mb-3">{role}</h3>
        <p className="text-gray-300">{intro}</p>
      </div>
    </div>
  );
}

export default TeamMember;
