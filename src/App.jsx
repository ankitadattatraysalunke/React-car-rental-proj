import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import { GiDuration } from 'react-icons/gi';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/About/About';
import Services from './components/Services/Services';
import CartList from './components/CartList/CartList';
import Testimonial from './components/Testimonial/Testimonial';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {

    //Dark Mode Feature
  const [theme, setTheme] = React.useState
  (localStorage.getItem("theme")?
   localStorage.getItem("theme"):"light"
  );

    const element = document.documentElement;
    useEffect(()=>{
      if(theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme", "dark ");
      }
      else{
        element.classList.remove("dark");
        localStorage.setItem("theme", "light ");
      }
    }, [theme]);

    //AOS Initilization
    React.useEffect(()=>{
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    },[]);


  return (
    <div className='bg-white dark:bg-black dark:text-white pb-14'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <CartList />
      <Testimonial />
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
