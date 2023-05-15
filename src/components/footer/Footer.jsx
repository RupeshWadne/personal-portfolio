import React from 'react'
import './footer.css'
import hashnde from "../../assets/brand-icon.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Rupesh</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>
            
                <div className="footer__social">
                    <a 
                        href="https://www.instagram.com/rupesh_wadne_" className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a 
                        href="https://www.twitter.com/rupesh_wadne_" className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-twitter"></i>
                    </a>

                    <a 
                        href="https://github.com/RupeshWadne" className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-github"></i>
                    </a>
                    <a 
                        href="https://shubhamwadne.hashnode.dev/" className="footer__social-link"
                        target="_blank"
                    >
                        <img className="footer__social-link_hash" src={hashnde}></img>
                    </a>
                </div>

                <span className="footer__copy">&#169; RupeshWadne. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
