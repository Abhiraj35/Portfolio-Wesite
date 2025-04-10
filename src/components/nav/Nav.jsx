import React, { useState} from 'react'
import {Link} from 'react-router-dom'

import "./nav.css"

function Nav() {
    const [navOpen,setNavOpen] = useState(false);

  return (
    <div className='nav'>
        <div className="nav-containar">
            <div className="navbar">
                <div className="menu-toggle cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
                    <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                        <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                        <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                    </div>
                </div>
            </div>
            {/* overlay div */}
            <div className="nav-overlay " style={{top:navOpen ? "0" : "-100vh",transitionDelay:navOpen ? "0s" : "0s"}}
            >
                <ul className='nav-links font-[Canopee] font-extrabold '>
                    <li className='nav-item '>
                        {/* <Link to='/' onClick={() => setNavOpen(!navOpen)} style={{top:navOpen ? "0" : "130px",transitionDelay:navOpen ? "1s" : "0s"}}>Home</Link> */}
                        <a href="#home" onClick={() => setNavOpen(!navOpen)} style={{top:navOpen ? "0" : "130px",transitionDelay:navOpen ? "1s" : "0s"}}>Home</a>

                        <div className='nav-item-wrapper'></div>
                    </li>

                    <li className='nav-item'>
                        {/* <Link to="/project" onClick={() => setNavOpen(!navOpen)} style={{top:navOpen ? "0" : "130px",transitionDelay:navOpen ? "1s" : "0s"}}>Project</Link> */}

                        <a href="#project" onClick={() => setNavOpen(!navOpen)} style={{top:navOpen ? "0" : "130px",transitionDelay:navOpen ? "1s" : "0s"}}>Project</a>
                        <div className='nav-item-wrapper'></div>
                    </li>

                    <li className='nav-item'>
                        {/* <Link to="/" onClick={() => setNavOpen(!navOpen)} style={{top:navOpen ? "0" : "130px",transitionDelay:navOpen ? "1s" : "0s"}}>About</Link> */}

                        <a href="#about" onClick={() => setNavOpen(!navOpen)} style={{top:navOpen ? "0" : "130px",transitionDelay:navOpen ? "1s" : "0s"}}>About</a>
                        <div className='nav-item-wrapper'></div>
                    </li>

                    <li className='nav-item'>
                        {/* <Link to="/" onClick={() => setNavOpen(!navOpen)} style={{top:navOpen ? "0" : "130px",transitionDelay:navOpen ? "1s" : "0s"}}>Contact</Link> */}

                        <a href="#contact" onClick={() => setNavOpen(!navOpen)} style={{top:navOpen ? "0" : "130px",transitionDelay:navOpen ? "1s" : "0s"}}>Contact</a>
                        <div className='nav-item-wrapper'></div>
                    </li>
                </ul>


                {/* nav footer */}
                <div className="nav-footer">
                    <div className="location" style={{
                        bottom:navOpen ? "0" : "-20px",
                        opacity:navOpen ? "1" : "0",
                        transitionDelay:navOpen ? "1.2s" : "0s"
                    }}>
                        <span className='font-[Domaine_Disp_Cond_Medium]'>Kolkata, India</span>
                    </div>
                    <div className="nav-social-media ">
                        <ul>
                            <li>
                                <a href="#" className='font-[Bebas_Neue] font-bold tracking-widest' style={{
                        bottom:navOpen ? "0" : "-20px",
                        opacity:navOpen ? "1" : "0",
                        transitionDelay:navOpen ? "1.3s" : "0s"
                    }}>Linkedin</a>
                            </li>
                            <li>
                            <a href="#"  className='font-[Bebas_Neue] font-bold tracking-widest' style={{
                        bottom:navOpen ? "0" : "-20px",
                        opacity:navOpen ? "1" : "0",
                        transitionDelay:navOpen ? "1.4s" : "0s"
                    }}>GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Nav
