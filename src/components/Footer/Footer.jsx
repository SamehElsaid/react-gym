import "./Footer.css";
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
const Footer = () => {
    return (
      <footer className="footer">
        <div className="blur footer-blur"></div>
        <div className="blur footer-blur2"></div>
        <div className="container">
          <div className="frist">
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
          <div className="sec">
            <img src={logo} alt="" />
          </div>
        </div>
      </footer>
    );
};

export default Footer;