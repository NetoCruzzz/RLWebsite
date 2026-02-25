import { useState } from 'react';
import { Subteam } from '../../types';

interface SubteamCardProps {
  subteam: Subteam;
  onNavigate: (page: string) => void;
}

export default function SubteamCard({ subteam, onNavigate }: SubteamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onNavigate(subteam.pageId)}
    >
      <div className="aspect-square bg-parchment-100 flex items-center justify-center overflow-hidden">
        <img 
          src={subteam.image}
          alt={`${subteam.name} team photo`}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br from-dark-garnet-500 to-dark-garnet-800 bg-opacity-95 flex items-center justify-center p-6 transition-opacity duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-0'
        }`}
      >
        <div className="text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{subteam.name}</h3>
          <p className="text-lg">{subteam.description}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-xl font-semibold">{subteam.name}</h3>
      </div>
    </button>
  );
}
