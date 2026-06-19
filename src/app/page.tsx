import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedRepositories } from "@/components/sections/FeaturedRepositories";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <FeaturedRepositories />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
