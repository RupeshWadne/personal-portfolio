import React, {useState} from 'react'

import Project from '../project/Project';
import Modal from "../modal/Modal"
import Work1 from '../../assets/work1.png'
import Work2 from '../../assets/work2.png'
import Work3 from '../../assets/work3.png'
import Work4 from '../../assets/work4.png'
import Work5 from "../../assets/work5.png"
import Work6 from "../../assets/work6.png"
import Work7 from "../../assets/work7.png"
import Work8 from "../../assets/work8.png"
import Work9 from "../../assets/work9.png"

const projects = [
  {
    id: 1,
    src: Work7,
    title: "GOD NFT MARKETPLACE & EXPLORE",
    category: "Web3 Fullstack",
    link1:"https://god-nft-marketplace.vercel.app/",
    link2:"https://github.com/RupeshWadne/God-NFT-Marketplace",
    color: '#000000',
  },
  {
    id: 2,
    src: Work8,
    title: "LENS SOCIAL MEDIA",
    category: "Web3 Fullstack",
    link1:"https://social-media-lens-app.vercel.app/",
    link2:"https://github.com/RupeshWadne/Social-Media-Lens-App",
    color: '#8C8C8C',
  },
  {
    id: 3,
    src: Work9,
    title: "DEVTA DAO",
    category: "Web3 Fullstack",
    link1:"https://devta-dao.vercel.app/",
    link2:"https://github.com/RupeshWadne/Devta-DAO-App",
    color: '#EFE8D3',
  },
  {
    id: 4,
    src: Work6,
    title: "Music App",
    category: "Web2 Fullstack",
    link1:"https://shubham-wadne-music-app.netlify.app/",
    link2:"https://github.com/RupeshWadne/music-app",
    color: '#706D63'
  },
  {
    id: 5,
    src: Work3,
    title: "AI-Image-Generating",
    category: "Web2 Fullstack",
    link1:"https://ai-image-generation-app.netlify.app/",
    link2:"https://github.com/RupeshWadne/AI-Image-generation-App",
    color: '#000000',
  },
  {
    id: 6,
    src: Work2,
    title: "Memory Game",
    category: "Frontend",
    link1:"https://memory-game-app-react.netlify.app/",
    link2: "https://github.com/RupeshWadne/memory-game-react",
    color: '#8C8C8C',
  },
  {
    id: 7,
    src: Work5,
    title: "Modern App",
    category: "Frontend",
    link1:"https://modern-ui-app-react.netlify.app/",
    link2:"https://github.com/RupeshWadne/modern-ui-app",
    color: '#EFE8D3',
  },
  {
    id: 8,
    src: Work4,
    title: "NFT Explorer",
    category: "Web3 Fullstack",
    link1:"https://nft-explore-app.netlify.app/",
    link2:"https://github.com/RupeshWadne/nft-explorer",
    color: '#706D63'
  },
  {
    id: 9,
    src: Work1,
    title: "E-commerse website",
    category: "Frontend",
    link1:"https://full-responsive-ui.netlify.app/",
    link2:"https://github.com/RupeshWadne/ecommerse",
    color: '#000000',
  },
]

const NewWork = () => {

    const [modal, setModal] = useState({active: false, index: 0})
    
  return (
    <div>
      <main className="work_main">
        <div className="work_body">
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
                link={project.link1}
                sub={project.category}
              />
            )
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </div>
  )
}

export default NewWork
