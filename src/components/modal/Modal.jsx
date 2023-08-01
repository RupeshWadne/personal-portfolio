import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import "./modal.css"

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}  


export default function index({modal, projects}) {
    const cursor = useRef(null);
    const modalContainer = useRef(null);
    const cursorLabel = useRef(null);
    
      useEffect( () => {
    
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    
        let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
    
        window.addEventListener('mousemove', (e) => {
          const { pageX, pageY } = e;
          xMoveContainer(pageX)
          yMoveContainer(pageY)
          xMoveCursor(pageX)
          yMoveCursor(pageY)
          xMoveCursorLabel(pageX)
          yMoveCursorLabel(pageY)
        })
      }, [])
  const { active, index } = modal;

  return (
    <>
        <motion.div variants={scaleAnimation} ref={modalContainer} initial="initial" animate={active ? "enter" : "closed"} className="modalContainer">
            <div style={{top: index * -100 + "%"}} className="modalSlider">
            {
                projects.map( (project, index) => {
                const { src, color, link1 } = project
                return <div className="modal" style={{backgroundColor: color}} key={`modal_${index}`}>
                    <img 
                    src={src}
                    width={300}
                    height={0}
                    alt="image"
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className="cursor" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className="cursorLabel" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  )
}
