import React from "react"
import './style.css'

export default function Home() {
  return (
    <div>
      <div className="splash-page">
        <div className="header-text">
          <p className="header-logo">Cat Swale</p>
          <div className="menu">
            <a>About</a>
            <a>Work</a>
            <a>Services</a>
            <button>Contact Me</button>
          </div>
          <h1>Quality Mobile Apps Made <br />Just for Your Business</h1>
          <h2>Apps Made Easy</h2>
        </div>
        <div className="about">
          <div className="about-text">
            <h3>Hi, I'm Cat Swale!</h3>
            <i>Freelance Software Developer</i>
            <p>I'm a full stack developer living in Perth, Western Australia.I specialise in mobile app development and am passionate about making beautiful, engaging solutions which lift any business to the next level.</p>
          </div>
          <div className="about-image">
            <img src="IMG_0608.jpg"></img>
          </div>
        </div>
      </div>
    </div >

  )
}
