import Head from "next/head";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Hero from "../components/landing/Hero";
import SkillsMarquee from "../components/landing/SkillsMarquee";
import Projects from "../components/landing/Projects";
import Experience from "../components/landing/Experience";
import About from "../components/landing/About";
import Contact from "../components/landing/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>Aayush Mishra | AI Systems Engineer</title>
        <meta
          name="description"
          content="Portfolio of Aayush Mishra — Founder, AI Systems Engineer. Building secure autonomous AI products in Rust."
        />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <SkillsMarquee />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
