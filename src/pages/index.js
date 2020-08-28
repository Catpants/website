import React from "react"
import './style.css'

export default function Home() {
  return (
    <div className="container">
      <div className="splash-page">
        <div className="header-text">
          <p className="header-logo">Cat Swale</p>
          <div className="menu">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <button href="#contact">Contact Me</button>
          </div>
          <h1>Quality Mobile Apps Made <br />Just for Your Business</h1>
          <p className="sub-heading">Apps Made Easy</p>
        </div>
      </div>
      <div className="about" id="about">
        <div className="about-text">
          <h2>Hi, I'm Cat Swale!</h2>
          <i>Freelance Software Developer</i>
          <br></br>
          <br></br>
          <p>I'm a full stack developer living in Perth, Western Australia.I specialise in mobile app development and am passionate about making beautiful, engaging solutions which lift any business to the next level.</p>
          <br></br>
          <p>I've been working as a software engineer for 4 years andcurrently also work full time for Virtual Gaming Worlds. I look forward to working with you!</p>
          <br></br>
          <p>~Cat</p>
        </div>
        <div className="about-image">
          <img src="IMG_0608.jpg"></img>
        </div>
      </div>
      <div className="services" id="services">
        <div className="services-header">
          <h2>Services</h2>
          <div className="services-line" />
        </div>
        <div className="services-container">
          <div className="service">
            <h4>Create a New Mobile App</h4>
            <p>Create a new mobile app from scratch. This includes consultation, development , deployment to the apple/google play stores and finally a maintenace period.</p>
            <b><br></br>Get in touch today for a free quote.</b>
          </div>
          <div className="service">
            <h4>Update an Existing App</h4>
            <p>Update an existing app withnew project features to retain and engage your audience.Adding new features or revamping your apps stylecan be easy.</p>
            <b><br></br>Get in touch today for a free quote.</b>
          </div>
          <div className="service">
            <h4>Fix Bugs/Issues with an Existing App</h4>
            <p>Existing apps often requiremaintenance. They may contains bugs that are hinderingyour business growth. I would love to hear your issuesand collaborate to resolve them.</p>
            <b><br></br>Get in touch today for a free quote.</b>
          </div>
        </div>
      </div>
      {/* <div className="work" id="work">
        <h2>Work</h2>
      </div> */}
    </div >

  )
}
