import { useState } from 'react';
import { Subteam } from '../../types';

interface SubteamCardProps {
  subteam: Subteam;
}

export default function SubteamCard({ subteam }: SubteamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      // REMOVED: border-2 border-transparent hover:border-dark-garnet-500
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-square bg-parchment-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden transition-colors duration-300">
        <img 
          src={`/images/Subteams Images/${subteam.name}.JPG`} 
          alt={`${subteam.name} team photo`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Red Branding Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#c50a07] to-[#310302] flex items-center justify-center p-6 transition-opacity duration-300 ${
          isHovered ? 'opacity-95' : 'opacity-0'
        }`}
      >
        <div className="text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{subteam.name}</h3>
          <p className="text-lg leading-relaxed">{subteam.description}</p>
        </div>
      </div>

      {/* Default Label */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-opacity duration-300 ${
        isHovered ? 'opacity-0' : 'opacity-100'
      }`}>
        <h3 className="text-white text-xl font-semibold shadow-sm">{subteam.name}</h3>
      </div>
    </div>
  );
} 