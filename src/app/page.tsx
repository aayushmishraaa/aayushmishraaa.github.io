import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { Experience } from "@/components/experience";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  );
}
