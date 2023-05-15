import React, {useState} from 'react'
import './header.css'

const Header = ({darkMode, setDarkMode}) => {
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")
    return (
        <header className="header">

        

            <nav className="nav container">
                <a href="#" className="nav__logo">
                <img className="logo" src="src/assets/rupesh.png" alt="" />
                </a>

                


                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a 
                                href="#home" 
                                onClick={() => setActiveNav("#home")}
                                className={activeNav ==="#home" ? "nav__link active__link" : "nav__link"}
                            >
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#about" 
                                onClick={() => setActiveNav("#about")}
                                className={activeNav ==="#about" ? "nav__link active__link" : "nav__link"}
                                
                            >
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#skills" 
                                onClick={() => setActiveNav("#skills")}
                                className={activeNav ==="#skills" ? "nav__link active__link" : "nav__link"}
                            >
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#services"  
                                onClick={() => setActiveNav("#services")}
                                className={activeNav ==="#services" ? "nav__link active__link" : "nav__link"}
                            >
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#portfolio" 
                                onClick={() => setActiveNav("#portfolio")}
                                className={activeNav ==="#portfolio" ? "nav__link active__link" : "nav__link"}
                            >
                                <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#blogs" 
                                onClick={() => setActiveNav("#blogs")}
                                className={activeNav ==="#blogs" ? "nav__link active__link" : "nav__link"}
                            >
                                <i className="uil uil-scenery nav__icon"></i>Blogs
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#contact" 
                                onClick={() => setActiveNav("#contact")}
                                className={activeNav ==="#contact" ? "nav__link active__link" : "nav__link"}
                            >
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                        <div className="containerr">
                <span style={{color: darkMode? 'gray' : 'yellow'}}>☀︎</span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" 
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
                <span style={{color: darkMode ? "#c96dfd" : 'gray'}}>☽</span>
            </div>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
                
            </nav>
        </header>
    )
}

export default Header
