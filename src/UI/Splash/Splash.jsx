import { useState } from "react";
import classess from "./Splash.module.css";
import { Navigate } from "react-router-dom";
import { greeting } from "../../portfolio";

function AnimatedSplash() {
  return (
    <div className={classess.splashContainer}>
      <div className={classess.logo_wrapper}>
        <div className={classess.loading}>
          <div className={classess.ball}></div>
          <div className={classess.ball}></div>
          <div className={classess.ball}></div>
          <div className={classess.ball}></div>
          <div className={classess.ball}></div>
          <div className={classess.ball}></div>
          <div className={classess.ball}></div>
        </div>
      </div>
      <div style={{ paddingTop: "60px", textAlign: "center" }}>
        <h1 className={classess.splashText}>{greeting.username}</h1>
        <p className="underline">{greeting.job}</p>
      </div>
    </div>
  );
}

function Splash() {
  const [isRedirect, setIsRedirect] = useState(false);
  setTimeout(() => setIsRedirect(true), 2000);

  return isRedirect ? <Navigate to="main" /> : <AnimatedSplash />;
}

export default Splash;
