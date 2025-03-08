import React from 'react';
import NavBar from '@/components/NavBar';
import HeroBenner from '@/components/HeroBanner';
import WhyChooseUs from '@/components/WhyChooseUs 2';
import TeamMembers from '@/components/TeamMembers';
import Testimonials from '@/components/Testimonials';



const aboutPage = () => {
  return (
    <>
        <NavBar/>
      <HeroBenner title="About Us" />
      <WhyChooseUs />
         <TeamMembers />
      <Testimonials />
 
    </>
  );
};

export default aboutPage;
