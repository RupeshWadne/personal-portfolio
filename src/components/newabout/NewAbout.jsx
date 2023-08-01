import React, { useRef } from 'react'
import AboutImg from '../../assets/shubham.png'
import "./newabout.css"

const NewAbout = () => {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)
  return (
    <div>
      <main className="main">
        <img src={AboutImg} fill={true} alt="background" />
        <div className="sliderContainer">
          <div ref={slider} className="slider">
            <p ref={firstText}>Freelance Developer -</p>
            <p ref={secondText}>Freelance Developer -</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewAbout
