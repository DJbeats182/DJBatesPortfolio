import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WorkflowSection from "./components/WorkflowSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <WorkflowSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
