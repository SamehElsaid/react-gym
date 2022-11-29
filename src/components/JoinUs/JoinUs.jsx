import "./JoinUs.css"

const JoinUs = () => {
  return (
    <div>
      <div className="container join">
        <div className="letfJoin">
          <hr />
          <h3>
            <span className="strokTest">READY TO</span> LEVEL UP <br /> YOUR
            BODY
            <span className="strokTest"> WITH US?</span>
          </h3>
        </div>
        <div className="rightJoin">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="text" placeholder="Enter your Email Address here..." />
            <button type="submit">Join now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
