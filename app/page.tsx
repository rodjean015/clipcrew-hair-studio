import Contact from "./components/Contact";
import Product from "./components/Product";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Highlight from "./components/Highlight";
import Service from "./components/Service";
import Clothing from "./components/Clothing";
import Features from "./components/Feature";

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <Product />
      <Service />
      <Highlight />
      <Clothing />
      <Features />
      <Contact />
    </div>
  );
}
