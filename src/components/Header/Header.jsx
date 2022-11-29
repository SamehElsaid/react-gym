import { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";
const Header = () => {
  const [menu, setMenu] = useState(true);
  const [modile, setModile] = useState(() => {
    if (window.innerWidth <= "768") {
      return true;
    } else {
      return false;
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth <= "768") {
      setModile(true);
    } else {
      setModile(false);
    }
  });
  console.log(modile);
  const openMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <div className="header hero">
      <img src={Logo} alt="" />

      <ul>
        <div className="sp" onClick={openMenu}>
          <div className="allE">
            <div
              className="alSp"
              style={{
                display: menu ? "grid" : "none",
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div
              className="mediaMenu"
              style={{ display: modile? menu ? "none" : "grid" :"flex"}}
            >
              <li>
                <Link to="/" onClick={openMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="programs" smooth={true} onClick={openMenu}>
                  Programs
                </Link>
              </li>
              <li>
                <Link to="us" smooth={true} onClick={openMenu}>
                  Why us
                </Link>
              </li>
              <li>
                <Link to="plans" smooth={true} onClick={openMenu}>
                  Plans
                </Link>
              </li>
              <li>
                <Link to="testimonials" smooth={true} onClick={openMenu}>
                  Testimonials
                </Link>
              </li>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Header;
