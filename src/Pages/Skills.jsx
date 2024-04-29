import { FaCss3 } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import Header from "./Headers/HeaderSkills";
import { SiPrismic } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import Circles from "../assets/Pictures/Circles.svg"
import './Styles/Intro.scss';
import "./Styles/Skills.scss"

function Skills() {
  return (
    <div>
      <Header />
      <div className='head'>
    <div className='top-right'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='bottom-mid'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='top-left'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='bottom-right'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='top-mid'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='bottom-left'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>   
    </div>  
    <main className="main next">
    <div className="icon">
    <h1 className="icon-title">Skills</h1>    
    <div className="icon-half">
    <div className="icon-skill">
    <IoLogoJavascript className="icon-size" />
    Javascript
    </div>
    <div className="icon-skill">
    <FaReact className="icon-size" />
    Reactjs
    </div>
    <div className="icon-skill">
    <FaHtml5 className="icon-size" />
    HTML
    </div>
    <div className="icon-skill">
    <FaCss3 className="icon-size" />
    CSS
    </div>
    </div>
    <div className="icon-half">
    <div className="icon-skill">
    <TbBrandNextjs className="icon-size" />
    Nextjs
    </div>
    <div className="icon-skill">
    <SiPrismic className="icon-size" />
    Prismic.io
    </div>
    <div className="icon-skill">
    <SiFirebase  className="icon-size"/>
    Firebase
    </div>
    <div className="icon-skill">
    <SiVite className="icon-size" />
    Vite
    </div>
    </div>
    </div>
    </main>
    </div>
  )
}

export default Skills