import React from "react";
import "./Hero.css";
import { FaMapLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left-side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br /> Most Suitable <br />
              Property
            </motion.h1>
          </div>

          <div className=" flexcolStart secondaryText hero-des">
            <span>Find a variety of properties that suits you very easily</span>
            <br />
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <FaMapLocationDot color="var(--blue)" size={35} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          {/* div-1 */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            {/* div-2 */}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1800} end={2000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            {/* div-3 */}
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <motion.img
              src="/hero-image.png"
              alt="logo1"
              style={{ display: "block", borderRadius: "15px" }}
              animate={{ y: ["0%", "-5%", "0%"], scale: [1, 1.01, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
