import Button from "../Button/Button";
import Figment from "../Figment/Figment";
import Header from "../Header/Header";
import Heart from "../../assets/heart.png";
import Heroimg from "../../assets/hero_image.png";
import HeroBack from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import "./Hero.css";
import { motion } from "framer-motion";
import {useState } from "react";
const Hero = () => {
  let [modile, modileSet] = useState(()=>{
    if(window.innerWidth <= "768"){
      return true
    }else{
      return false
    }
  });
  window.addEventListener("resize", () => {
    window.innerWidth <= "768" ? modileSet(true) : modileSet(false);
  });

  return (
    <div className="hero container" id="home">
      <div className="blur hero-blur"></div>
      <div className="left ">
        <div className="">
          <Header />
          <div className="theBest">
            <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            <motion.div
              initial={{ left: "73%" }}
              whileInView={{ left: "10px" }}
              transition={{
                duration: 3,
                type: "tween",
              }}
            ></motion.div>
          </div>
          <div className="textHero">
            <p>
              <span className="strokTest">SHAPE</span> YOUR <br /> IDEAL BODY
            </p>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
          <div className="figments">
            <Figment title="140" description="EXPERT COACHES" />
            <Figment title="978" description="FITNESS PROGRAMS" />
            <Figment title="50" description="MEMBERS JOINED" />
          </div>
          <div className="heroBtn">
            <Button title="Get Started" />
            <Button title="Learn More" color="#f48915" />
          </div>
        </div>
      </div>
      <div className="right ">
        <div className="container">
          <div className="btnRight">
            <Button title="Join Now" color="white" textClor="black" />
          </div>
          <motion.div
            className="heart"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
          >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <p>116 bpm</p>
          </motion.div>
          <div className="heroImg">
            <motion.img
              initial={{ left: "100% " }}
              whileInView={{
                left: modile ? "50%" :"0px",
              }}
              transition={{
                duration: 3,
                type: "tween",
              }}
              src={HeroBack}
              alt=""
            />
            <img src={Heroimg} alt="" />
            <motion.div
              className="calorie"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1, left: 0, translateX: "-80%" }}
              transition={{
                duration: 3,
                type: "spring",
              }}
            >
              <img src={calories} alt="" />
              <div className="textCalorie">
                <span>
                  Calories <br /> burned
                </span>
                <p>
                  220 <br /> kcal
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
