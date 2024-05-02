import Logo from "../Brand/Logo3.png"
import "../Header Styles/Header.scss"
import "../Header Styles/Navbar.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaXTwitter, FaWhatsapp, FaInstagram, FaLinkedin,FaGithub } from "react-icons/fa6"
import {RevealPurple} from "../Animations/RevealPurple"
import {Reveal} from "../Animations/Reveal"
import { Fastvert } from "../Animations/Fastvert"
import { Slowvert } from "../Animations/Slowvert"
import { Midvert } from "../Animations/Midvert"
import { Topvert } from "../Animations/Topvert"
import { Downvert } from "../Animations/Downvert"
import { Pop } from "../Animations/Pop"

function Header() {
  const [unclick, setUnclick] = useState(true)
    const toggle = () => {
      console.log("trap")
      setUnclick(!unclick)
    }
  return (
    <div>
    <div className='nav-bar'>
    <Link to="/">
    <div className="navs">
        <Pop>
        <img 
        src={Logo}
        alt='Image'
        />   
        </Pop> 
    </div>
    </Link>
        <>
        <div className="nav">
         <div className='link l1 hover-under'>
          <Link to="/">
          <Pop>
          Home
          </Pop>
          </Link>
         </div>
         <div className='link l4'> 
          <Link to="/Intro">
          <Pop>
          Intro
          </Pop>
          </Link>
         </div>
         <div className='link l2'>
          <Link to="/Project">
          <Pop>
          Projects
          </Pop>
          </Link>
         </div>
         <div className='link l3'>
          <Link to="/Email">
          <Pop>
          Send an Email
          </Pop>
          </Link>
         </div>
        </div>
        <button onClick={toggle} className={unclick ? " hamburger" : "active"}>
          <div className={unclick ? "ham-top " : "one"}></div>
          <div className={unclick ? "ham-mid white" : "white two"}></div>
          <div className={unclick ? "ham-bottom" : "three"}></div>
        </button>
    </>
    </div>
    {
      unclick ? (null) : (
        <div className="black">
       <div className="linkers"> 
       <ul className="Link-list">
        <li> 
        <Link to="/" className="center">
        <RevealPurple> 
          Home
        </RevealPurple>   
        </Link> 
        </li>
        <li>
          <Link to="/Intro" className="center">
          <Reveal> 
          Intro
        </Reveal> 
          </Link>
        </li>
        <li>
          <Link to="/Project" className="center">
          <RevealPurple> 
          Projects
        </RevealPurple>
          </Link>
        </li>
        <li>
        <Link to="/Email" className="center">
        <Reveal> 
          Send an Email
        </Reveal>
        </Link>
        </li>
        <li>
        <Link to="/Skills" className="center">
        <RevealPurple> 
          Skills
        </RevealPurple>
        </Link>
        </li>
       </ul>
       </div>
       <div className="socials">
        <a href="https://twitter.com/Wweb3workers">
        <Fastvert>
        <FaXTwitter className="social-icon"/>
        </Fastvert>
        </a>
       <a href="">
         <Slowvert>
         <FaInstagram className="social-icon"/>
         </Slowvert>
        </a>
        <a href="https://www.linkedin.com/in/betse-usen-3794ba232/">
        <Downvert>
        <FaLinkedin className="social-icon"/>  
        </Downvert>  
        </a>
        <a href="https://wa.me/08081955876">
        <Topvert>
        <FaWhatsapp className="social-icon"/>  
        </Topvert> 
        </a>
        <a href="https://github.com/usen-bet/">
        <Midvert>
        <FaGithub className="social-icon"/>
        </Midvert>
        </a>
       </div>
      </div>
      )
    }
    </div>
  )
}

export default Header