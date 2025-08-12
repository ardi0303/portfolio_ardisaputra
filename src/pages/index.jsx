import Navbar from "@/components/layouts/navbar";
import Hero from "./hero";
import About from "./about";
import Project from "./project";
import Certificate from "./certificate";
import Contact from "./contact";
import Footer from "@/components/layouts/footer";

export default function Index() {
  return (
    <div className="w-full bg-teal-100 transition-colors duration-300 dark:bg-teal-950">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}
