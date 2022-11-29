import "./Cosh.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { useState } from "react";
import { motion } from "framer-motion";
const Cosh = () => {
  const [index, setIndex] = useState(0);
  
  const indexAdd = () => {
    index === testimonialsData.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const indexMin = () => {
    index === 0 ? setIndex(testimonialsData.length - 1) : setIndex(index - 1);
  };
  return (
    <>
      <div className="container cosh" id="testimonials">
        <div className="leftCosh">
          <h2>TESTIMONIALS</h2>
          <h3 className="strokTest">WHAT THEY</h3>
          <h4>SAY ABOUT US</h4>
          <p>{testimonialsData[index].review}</p>
          <p>
            <span>{testimonialsData[index].name}</span> <span> - </span>
            <span>{testimonialsData[index].status}</span>
          </p>
        </div>
        <div className="rightCosh">
          <div className="mainImg">
            <img src={testimonialsData[index].image} alt="" />
            <motion.div
              initial={{ left: "-20%" }}
              whileInView={{ left: "-5%" }}
              transition={{
                duration: 1,
                type: "tween",
              }}
              className="fs"
            ></motion.div>
            <motion.div
              initial={{ left: "20%" }}
              whileInView={{ left: "5%" }}
              transition={{
                duration: 1,
                type: "tween",
              }}
              className="fa"
            ></motion.div>
          </div>
          <div className="arrow">
            <img src={leftArrow} onClick={indexMin} alt="" />
            <img src={rightArrow} onClick={indexAdd} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cosh;
