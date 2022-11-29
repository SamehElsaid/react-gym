import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import "./Reasons.css";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons container" id="us">
      <div className="reasonsLeft">
        <div className="flex">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
      <div className="reasonsight">
        <h2>SOME REASONS</h2>
        <h3>
          <span className="strokTest">WHY</span> CHOOSE US?
        </h3>
        <p>
          <img src={tick} alt="" />
          <span>OVER 140+ EXPERT COACHS</span>
        </p>
        <p>
          <img src={tick} alt="" />
          <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </p>
        <p>
          <img src={tick} alt="" />
          <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </p>
        <p>
          <img src={tick} alt="" />
          <span>RELIABLE PARTNERS</span>
        </p>
        <div className="sport">
          <h4>OUR PARTNERS</h4>
          <div className="imgSport">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
