import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mt-4 mb-3 fs-4">The Zerodha Universe</h1>
        <p className="mt-3 fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-4">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"50%", marginBottom:"5%"}}></img>
          <p className="text-small text-muted">
            Our asset management venture
            <br/>
            that is creating simple and transparent index
            <br/>funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-4">
          <img src="media/images/sensibullLogo.svg" style={{width:"50%", marginBottom:"9%"}}></img>
          <p className="text-small text-muted">
            Options trading platform that lets you <br/>
            create strategies, analyze positions, and examine
            <br/> data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 mt-4">
          <img src="media/images/goldenpiLogo.png" style={{width:"50%", marginBottom:"5%"}}></img>
          <p className="text-small text-muted">
            Investment research platform <br/>
            that offers detailed insights on stocks,
            <br/>sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 mt-4">
          <img src="media/images/streakLogo.png" style={{width:"50%", marginBottom:"5%"}}></img>
          <p className="text-small text-muted">
            Systematic trading platform
            <br/>
            that allows you to create and backtest
            <br/>strategies without coding.
          </p>
        </div>
        <div className="col-4 mt-4">
          <img src="media/images/smallcaseLogo.png" style={{width:"50%", marginBottom:"9%"}}></img>
          <p className="text-small text-muted">
            Thematic investing platform
            <br/>
            that helps you invest in diversified
            <br/>
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-4">
          <img src="media/images/dittoLogo.png" style={{width:"45%", marginBottom:"5%"}}></img>
          <p className="text-small text-muted">
            Personalized advice on life
            <br/>
            and health insurance. No spam
            <br/>
            and no mis-selling.
          </p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mt-4" style={{width: "20%", margin: "0 auto"}}>Sign Up for free</button>
      </div>
    </div>
  );
}

export default Universe;
