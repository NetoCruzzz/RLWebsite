export interface Subteam {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Rocket {
  id: string;
  name: string;
  year: string;
  thumbnail: string;
  description: string;
  mainImage?: string;
  specifications: {
    height?: string;
    diameter?: string;
    weight?: string;
    apogee?: string;
    motor?: string;
  };
  achievements: string[];
  images: string[];
}

export interface Competition {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  image: string;
  url: string;
  achievements?: string[];
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  website?: string;
}
