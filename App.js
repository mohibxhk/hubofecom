import React from "react";
import "@/App.css";
import { Toaster } from "sonner";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App font-body bg-[#0A0A0A] text-white min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0F0F0F",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
