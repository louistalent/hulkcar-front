import Hero from "@/components/Hero";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden mf:p-10 px-3 py-4 bg-primary dark:bg-dark-primary">
      <Hero />
      <HeroCarousel />
    </div>
  );
}
