import { About } from "@/components/About";
import { Catering } from "@/components/Catering";
import { DemoBanner } from "@/components/DemoBanner";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { Footer } from "@/components/Footer";
import { FullMenu } from "@/components/FullMenu";
import { Hero } from "@/components/Hero";
import { LocationHours } from "@/components/LocationHours";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="page-with-mobile-bar flex min-h-full flex-col">
      <DemoBanner />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <FeaturedDishes />
        <FullMenu />
        <About />
        <Catering />
        <Testimonials />
        <LocationHours />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
