import "./Testim.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Testim = () => {
  return (
    <div className="testim container">
      <div className="blur hero-blur"></div>
      <div className="blur hero-blur2"></div>

      <h2>
        <span className="strokTest">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="strokTest">NOW WITHUS</span>
      </h2>
      <div className="plan" id="plans">
        {plansData.map((e, i) => (
          <div className="plansData" key={i}>
            {e.icon}
            <h3>{e.name}</h3>
            <h4>{e.price}$</h4>
            <div className="features">
              {e.features.map((feature, i) => (
                <p key={i}>
                  <img src={whiteTick} alt="" /> {feature}
                </p>
              ))}
            </div>
            <div className="more">{`See more benefits ->`} </div>
            <div className="btn btn-new">
              <button>Join now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testim;
