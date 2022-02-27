import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed:60,
          strings: ["Developer", "Full-stack Engineer", "Artist", "Tea lover"],
        });
      }, []);
    
    return (
        <div className="intro" id="intro">
        <video autoPlay muted loop className="mutedcovervid">
            <source src="/assets/videos/rain.mp4" type="video/mp4" />
        </video>
          <div className="center">
            <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Jenny Abella</h1>
              <h3>
                <span ref={textRef}></span>
              </h3>
            </div>
            <a href="#portfolio">
              <img src="/assets/down.png" alt="arrowdown" />
            </a>
          </div>
        </div>
      );
} 