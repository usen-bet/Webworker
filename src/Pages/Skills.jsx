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
import { Reveal } from "./Animations/Reveal";
import { RevealPurple } from "./Animations/RevealPurple";
import { Fastvert } from "./Animations/Fastvert"
import { Pop } from "./Animations/Pop"
import { Topvert } from "./Animations/Topvert"
import { Downvert } from "./Animations/Downvert"
import { Midvert } from "./Animations/Midvert";

function Skills() {
  return (
    <div>
      <Header />
      <div className='head'>
    <div className='top-right'>
      <Reveal>
      <img src={Circles} className='img1' alt="lightwork" />
      </Reveal>
    </div>
    <div className='bottom-mid'>
      <Reveal>
      <img src={Circles} className='img1' alt="lightwork" />
      </Reveal>
    </div>
    <div className='top-left'>
      <RevealPurple>
      <img src={Circles} className='img1' alt="lightwork" />
      </RevealPurple>
    </div>
    <div className='bottom-right'>
      <Reveal>
      <img src={Circles} className='img1' alt="lightwork" />
      </Reveal>
    </div>
    <div className='top-mid'>
      <RevealPurple>
        <img src={Circles} className='img1' alt="lightwork" />
      </RevealPurple>
    </div>
    <div className='bottom-left'>
      <RevealPurple>
        <img src={Circles} className='img1' alt="lightwork" />
      </RevealPurple>
    </div>   
    </div>  
    <main className="main next">
    <div className="icon">
    <h1 className="icon-title"><Pop>Skills</Pop></h1>    
    <div className="icon-half">
    <div className="icon-skill">
    <Fastvert>
    <IoLogoJavascript className="icon-size" />
    </Fastvert>
    <Pop>
    <span>Javascript</span>
    </Pop>
    </div>
    <div className="icon-skill">
    <Topvert>
    <FaReact className="icon-size" />
    </Topvert>
    <Pop>
    <span>Reactjs</span>
    </Pop>
    </div>
    <div className="icon-skill">
    <Downvert>
    <FaHtml5 className="icon-size" />
    </Downvert>
    <Pop>
    <span>HTML</span>
    </Pop>
    </div>
    <div className="icon-skill">
    <Midvert>
    <FaCss3 className="icon-size" />
    </Midvert>
    <Pop>
      <span>CSS</span>
    </Pop>
    </div>
    </div>
    <div className="icon-half">
    <div className="icon-skill">
    <Fastvert>
    <TbBrandNextjs className="icon-size" />
    </Fastvert>
    <Pop>
      <span>Nextjs</span>
    </Pop>
    </div>
    <div className="icon-skill">
    <Fastvert>
    <SiPrismic className="icon-size" />
    </Fastvert>
    <Pop>
      <span>Prismic.io</span>
    </Pop>
    </div>
    <div className="icon-skill">
    <Topvert>
    <SiFirebase  className="icon-size"/>
    </Topvert>
    <Pop>
      <span>Firebase</span>
    </Pop>
    </div>
    <div className="icon-skill">
    <Downvert>
    <SiVite className="icon-size" />
    </Downvert>
    <Pop>
      <span>Vite</span>
    </Pop>
    </div>
    </div>
    </div>
    </main>
    </div>
  )
}

export default Skills