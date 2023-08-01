import React from 'react'
import './project.css';

export default function index({index, title, setModal, link, sub}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className="project">
            <h2><a target="_blank" href={link}>{title}</a></h2>
            <p>{sub}</p>
        </div>
    )
}