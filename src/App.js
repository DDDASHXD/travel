import React, {useEffect, useState, useRef} from 'react';
import './style/main.scss';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';


import base from "./images/hero/base.png";
import sun from "./images/hero/sun.png";
import back from "./images/hero/mountain-back.png";
import back2 from "./images/hero/mountain-back-2.png";
import mid from "./images/hero/mountain-mid.png";
import front from "./images/hero/mountain-front.png";
import birds from "./images/hero/birds.png";

import camperBus from "./images/camperbus.jpg";

function App() {
  const mainContainer = useRef(null);
  const [scroll, setScroll] = useState(null);

  const moveCursor = (e) => {
    const cursor = document.querySelector('.cursor');
    
    gsap.to(cursor, {
      left: e.clientX,
      top: e.clientY,
    })
  }

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: mainContainer.current,
      smooth: true,
    })

    scroll.on("scroll", (instance) => {
      setScroll(instance.scroll.y);
    })
    const cursor = document.querySelector('.cursor');

    const pointer = document.querySelectorAll("img");
    pointer.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.classList.add("pointer")
      })
      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("pointer")
      })
    })

    const pageLoad = () => {
      const base = document.getElementsByClassName("base")[0];
      const sun = document.getElementsByClassName("sun")[0];
      const back = document.getElementsByClassName("back")[0];
      const back2 = document.getElementsByClassName("back2")[0];
      const mid = document.getElementsByClassName("mid")[0];
      const front = document.getElementsByClassName("front")[0];
      const birds = document.getElementsByClassName("birds")[0];
      const titles = document.getElementsByClassName("title");
      
      gsap.from(base, {
        duration: 1,
        opacity: 0,
        delay: 0.25,
      })

      gsap.from(front, {
        duration: 1,
        y: "100%",
        delay: 0.5,
      })

      gsap.from(mid, {
        duration: 1,
        y: "100%",
        delay: 0.75,
      })

      gsap.from(back, {
        duration: 1,
        y: "100%",
        delay: 1,
      })

      gsap.from(back2, {
        duration: 1,
        y: "100%",
        delay: 1,
      })

      gsap.from(sun, {
        duration: 1,
        y: "100%",
        delay: 1.25,
      })

      gsap.from(birds, {
        duration: 1,
        y: "100%",
        delay: 0.7,
      })

      gsap.from (titles, {
        duration: 1,
        y: "150%",
        delay: 1.8,
        stagger: 0.05,
        ease: "power4.out",
      })
    }

    pageLoad();
  }, [])

  return (
    <>
    <div className="cursor">
    <svg x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300">
    <defs>
        <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
    </defs>
    <circle cx="150" cy="100" r="75" fill="none"/>
    <g>
        <use href="#circlePath" fill="none"/>
        <text fill="#000">
            <textPath href="#circlePath">Open this image by clicking your mouse</textPath>
        </text>
    </g>
</svg>
    </div>
    <div className="App" ref={mainContainer} onMouseMove={(e) => moveCursor(e)}>
      <div className="hero" id="test">
        <img src={base} alt="" className="base" data-scroll />
        <img src={sun} alt="" className="sun" data-scroll data-scroll-speed="-2" />
        <img src={back} alt="" className="back" data-scroll data-scroll-speed="-3" />
        <img src={back2} alt="" className="back2" data-scroll data-scroll-speed="-3" />
        <img src={mid} alt="" className="mid" data-scroll data-scroll-speed="-2" />
        <img src={front} alt="" className="front" data-scroll data-scroll-speed="-1"/>
        <img src={birds} alt="" className="birds" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" />
        <p className="title" data-scroll data-scroll-speed="-2">EXPLORE</p>
        <p className="title outline" data-scroll data-scroll-speed="-1.5">EXPLORE</p>
        <p className="title outline" data-scroll data-scroll-speed="-1">EXPLORE</p>
      </div>
      <section className="features">
        <img src={camperBus} alt="" />
      </section>
    </div>
    </>
  );
}

export default App;
