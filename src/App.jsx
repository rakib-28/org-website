import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import TeachersPanel from "./pages/TeachersPanel.jsx";
import Navbar from "./pages/Navbar.jsx";
import Welcome from "./pages/Welcome.jsx";
import Gallery from "./pages/Gallery.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Landing />
      <Welcome />
      <Gallery />
      <About />
      <Contact />
      <TeachersPanel />
    </div>
  );
}

export default App;
