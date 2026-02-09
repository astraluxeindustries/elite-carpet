import { Testimonial, Service } from './types';
import { Sofa, Grid3X3, Layers, Building2 } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Elite Carpet & Tile Cleaning Services",
  phonePrimary: "435-319-9387",
  phoneSecondary: "435-319-8603",
  phoneVan: "435.229.8936",
  email: "Elitecarpet.tile@gmail.com",
  address: "1031 S Bluff Street, St George, UT 84770",
  slogan: "Best Cleaning Best Prices",
  area: "Washington County Area"
};

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Michael Rodriguez",
    text: "These guys did an absolutely amazing job. I thought our carpet was a lost cause but after the cleaning was done I was amazed! They charged a fair and reasonable price that was still super affordable. I will definitely come to this business again to get this done at me next apartment. This company was on time., good price but most of all did a fantastic job., my carpet’s look new., it wasn’t soaking wet and literally dried in 4 hours.",
    rating: 5
  },
  {
    id: 2,
    name: "Dane Graham",
    text: "Amazing local service. Goes above and beyond. Honestly you can’t find a better cleaning company. These guys did my house and went way above just carpet cleaning. They’re amazing. I use them over and over and very affordable and fair. Much better than big box franchise carpet cleaners who love to price gouge for their huge operations. These people are wonderful! They are friendly, considerate and punctual",
    rating: 5
  },
  {
    id: 3,
    name: "Renee Norton",
    text: "Elite was everything I hoped they would be. I have lovely, light cplor, fairly new, high quality carpet ...that had many stains. Elite vacuumed the carpets twice, moved all my furniture, then cleaned the carpets. They left so that the carpets could dry thoroughly then returned to put the furniture back in place. The carpets look brand new and the stains are completely gone. I am delighted with the results and will be an Elite customer from now on.!",
    rating: 5
  }
];

export const SERVICES: Service[] = [
  {
    id: 'upholstery',
    title: 'Upholstery Cleaning',
    description: 'Our process and specialized upholstery cleaners are safe for all types of fabrics. Our heavy-duty cleaning equipment eliminates stains and odors.',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800' // Sofa cleaning
  },
  {
    id: 'tile',
    title: 'Tile & Grout Cleaning',
    description: 'Are you in need of tile cleaning in Washington County? Our trusted tile-cleaning specialists are ready to help. Why Us? Professional service, Tile cleaning, grout cleaning, and high Customer satisfaction.',
    icon: Grid3X3,
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' // Tile floor
  },
  {
    id: 'rugs',
    title: 'Area & Oriental Rugs',
    description: 'Deep cleans & dries quickly, safe and non-toxic, even for toddler and pets. Keeps carpets clean longer, residue-free cleaners helps prevent re-soiling.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=800' // Rug
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    description: 'Expert commercial carpet, tile, grout and upholstery cleaning. Whether you have a shop, office or other commercial premises.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' // Office
  }
];

export const SERVICE_AREAS = [
  "St George",
  "Bloomington",
  "Ivins",
  "Santa Clara",
  "Hurricane",
  "Washington"
];
