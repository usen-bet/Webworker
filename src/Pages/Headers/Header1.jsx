import Logo from "../Brand/Logo3.png"
import "../Header Styles/Header.scss"
import "../Header Styles/Navbar.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaXTwitter, FaWhatsapp, FaInstagram, FaLinkedin,FaGithub } from "react-icons/fa6"

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
        <img 
        src={Logo}
        alt='Image'
        />  
    </div>
    </Link>
        <>
        <div className="nav">
         <div className='link l1'>
          <Link to="/">
          Home
          </Link>
         </div>
         <div className='link l2'>
          <Link to="/Project">
          Projects
          </Link>
         </div>
         <div className='link l3'>
          <Link to="/Email">
          Send an Email
          </Link>
         </div>
         <div className='link l4'> 
          <Link to="/Skills">
          Skills
          </Link>
         </div>
        </div>
        <button onClick={toggle} className={unclick ? " hamburger" : "active"}>
          <div className={unclick ? "ham-top" : "one"}></div>
          <div className={unclick ? "ham-mid white" : "two"}></div>
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
         <Link to="/">
           Home
           </Link> 
         </li>
         <li>
           <Link to="/Intro">
           Intro
           </Link>
         </li>
         <li>
           <Link to="/Project">
           Projects
           </Link>
         </li>
         <li>
         <Link to="/Email">
           Send an Email
         </Link>
         </li>
         <li>
         <Link to="/Skills">
           Skills
         </Link>
         </li>
        </ul>
        </div>
        <div className="socials">
        <FaXTwitter className="social-icon"/>
        <FaInstagram className="social-icon"/>
        <FaLinkedin className="social-icon"/>
        <FaWhatsapp className="social-icon"/>
        <FaGithub className="social-icon"/>
        </div>
       </div>
      )
    }
    </div>
  )
}

export default Header