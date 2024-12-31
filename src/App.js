import React from "react";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import './App.css';
import Blog from "./components/Blog/Blog";
import { motion } from 'framer-motion';
import logo from './assets/logo3.png';
import { logo2 } from "./constants/image";


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <div className="absolute top-0 left-0 right-0 h-full w-full overflow-hidden">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 1,
          }}
          className="flex h-[100vh] w-full  items-center justify-center bg-white"
        >
          <img src={logo} alt="" className="w-[150px]" />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 650, x: 0 }}
        animate={{ y: 0, x: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 1,
          delay: 1.5,
        }}

        className="">
        <Hero />
        <TopProducts />
        <Banner />
        <Testimonials />
        <Blog />
        <Subscribe />

        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
