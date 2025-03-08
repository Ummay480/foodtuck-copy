
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FoodMenu from "@/components/FoodMenu";
import WhyChooseUs from "@/components/WhyChooseUs"
import Menu from "@/components/Menu";
import Members from "@/components/Members";
import BlogSection from "@/components/BlogSection";
import CreativeProcess from "@/components/CreativeProcess";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    
      <main className="px-20 overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <FoodMenu />
        <WhyChooseUs/>
        <StatsSection/>
        <Menu/>
        <Members/>
        <Testimonials/>
        <CreativeProcess/>
        <BlogSection/>
      </main>
     
    </>
  );
}
