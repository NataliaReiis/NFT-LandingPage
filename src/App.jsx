import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Free from "./components/Free";
import Clients from "./components/Clients";
import SuperRare from "./components/SuperRare";
import Realese from "./components/Realese";
import Like from "./components/Like";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ScrollReveal from 'scrollreveal';


export default function App() { 

  // Thema Dark e light
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  //Efeito de rolagem Scroll
  useEffect(() => {
    const registerAnimations = () => {

      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false
      });
      sr.reveal(`
        nav,.home,.free,.clients,.super-rare,.releases,.like,.signup,footer
      `,
        {interval: 500 }
      );
    };
    registerAnimations()
  }, []);

  //Corrigindo bug de delay da animação scroll
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].computedStyleMap.transform = "none";
    const nav = document.getElementsByName("nav");
    nav[0].style.transform = "none";
  }, 1500);

  return (
    <div className="container-app" data-theme={theme}>
        <NavBar  changeTheme={changeTheme} currentTheme ={theme}/>
        <Home />
        <Free />
        <Clients />
        <SuperRare />
        <Realese />
        <Like />
        <Signup />
        <Footer />
        <ScrollToTop />

    </div>
  );
}
