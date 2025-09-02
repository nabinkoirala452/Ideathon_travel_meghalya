// ServicesList.jsx
import React from 'react';
import ServicesCard from './ServicesCard';
import { MdHotel , MdSupportAgent} from "react-icons/md";
import { FaPlaneDeparture, FaShuttleVan } from "react-icons/fa";
import { IoMdBus } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { RiSuitcase3Fill } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";



const ServicesList = () => {
  const services = [
   {
    title: 'Adventure Tours',
    description: 'Explore thrilling destinations with our guided adventure tours.',
    icon: <IoMdBus />,
  },
  {
    title: 'Travel Planning',
    description: 'Let us handle the details! We plan, you enjoy your dream vacation.',
    icon: <FaPlaneDeparture />,
  },
  {
    title: 'High-Quality Accommodations',
    description: 'Experience comfort and luxury with our carefully selected accommodations.',
    icon: <MdHotel />,
  },
  {
    title: 'Local Experiences',
    description: 'Immerse yourself in authentic culture with curated local activities and guides.',
    icon: <GiWorld />,
  },
  {
    title: '24/7 Customer Support',
    description: 'Travel worry-free with our round-the-clock assistance and support team.',
    icon: <MdSupportAgent />,
  },
  {
    title: 'Custom Packages',
    description: 'Tailor-made tours designed to fit your preferences, budget, and schedule.',
    icon: <RiSuitcase3Fill />,
  },
  {
    title: 'Transport & Transfers',
    description: 'Seamless pick-up, drop-off, and intercity transfers to make travel stress-free.',
    icon: <FaShuttleVan />,
  },
  {
    title: 'Travel Saftety',
    description: 'Stay secure with reliable SOS help for emergencies and unexpected events.',
    icon: <AiOutlineSafety />,
  },

  ];
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServicesCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
