import React from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <span className="text-bg"></span>
      <div className="homeContent">
        <div className="first-name">Dambreville</div>
        <div className="last-name">Jérémy</div>
        <div className="separation">
          <div></div>
          <div></div>
        </div>
        <h1>Développeur front-end</h1>
        <div className="socialNetwork">
          <ul>
            <li>
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-codepen"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JerDamb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
