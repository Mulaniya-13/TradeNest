import React from "react";

function People() {
  return (
    <div className="container p-3">
      <div className="row text-center">
        <h2>People</h2>
      </div>
      <div className="row p-3 mt-5">
        <div className="col text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="nithin-kamath pic"
            style={{ borderRadius: "100%", width: "50%" }}
          ></img>
          <h6 className="mt-4 mb-4">Nithin kamath</h6>
          <h8>Founder,CEO</h8>
        </div>
        <div className="col mt-3 text-muted" style={{lineHeight:"2em"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.</p>
            <p> He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p>
            <p> Playing basketball is
            his zen. Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a>/ <a href="" style={{textDecoration:"none"}}>TradingQnA </a>/ <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  ); 
}

export default People;
