import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import {useState, useEffect} from "react";


function App() {
  useEffect(() => {
    document.title = "ByteGeist";
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}



export default App;
