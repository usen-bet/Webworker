import Slider from "react-slick";
import { FaCss3 } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiPrismic } from "react-icons/si";
import Header from "./Headers/ProjectHeader"
import { SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import Circles from "../assets/Pictures/Circles.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/Intro.scss'
import './Styles/Project.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Fastvert} from "../Components/Animations/Fastvert"
import {Pop} from "../Components/Animations/Pop"
import {Slowvert} from "../Components/Animations/Slowvert"
import {Downvert} from "../Components/Animations/Downvert"
import {Topvert} from "../Components/Animations/Topvert"

function Project() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Project">
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
    <div className='top-lefts'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='bottom-right tip-top'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='top-mid'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='bottom-left tip-rop'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>   
    <div className='bottom-lefts'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>  
    </div>  
    <div className="projects">
  <main className="project-space">
  <Slider {...settings}>
      <div className="project-page">
        <div className="project-work"> 
          <div className="white-bg">
            <div className="reg-bg">            
            <h1>LYNX</h1>
            <div>
            <div className="icon-det">
            <div className="flex">
            <a href="https://github.com/usen-bet/LynxRealEstate_Website">
            <button>
              <Pop>
              <span className="ones">View</span> Code
              </Pop>
            </button>
            </a> 
            <a href="https://react-project-zeta-six.vercel.app/">
            <button>
              <Pop>
              <span className="ones">View</span> Site
              </Pop>
            </button>
            </a>
            </div>
            <div className="language">
              <Slowvert>
              <FaReact className="Icon-l-size" />
              </Slowvert>
              <Fastvert>
                <FaCss3 className="Icon-l-size" />
              </Fastvert>
              <Topvert>
                <IoLogoJavascript className="Icon-l-size" />
              </Topvert>
              <Downvert>
                <SiVite className="Icon-l-size"/>
              </Downvert>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page">
        <div className="project-work">
        <div className="white-bg">
            <div className="reg-bg">
              <h1>
                <Fastvert>
                FONE.DEV
                </Fastvert>
                </h1>
              <div className="icon-det">
              <div className="flex">
            <a href="https://github.com/usen-bet/Net-clone.git">
             <button>
              <Pop>
              <span className="ones">View</span> Code
              </Pop>
            </button>   
            </a>    
            <a href="https://fone-e`nt.vercel.app/Front.htm">
            <button>
              <Pop>
              <span className="ones">View</span> Site
              </Pop>
            </button>
            </a>
            </div>
            <div className="language">
              <Slowvert>
                <FaHtml5 className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <FaCss3 className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <IoLogoJavascript className="Icon-l-size" />
              </Slowvert>
            </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div className="project-page">
        <div className="project-work">
        <div className="white-bg">
            <div className="reg-bg">
            <h1>WEATHER APP</h1>
            <div className="icon-det">
            <div className="flex">
            <a href="https://github.com/usen-bet/weather.git">
              <button>
                <Pop>
              <span className="ones">View</span> Code
              </Pop>
              </button>
            </a> 
            <a href="https://weather-app-bay-omega.vercel.app/Untitled-1.html">
            <button>
              <Pop>
              <span className="ones">View</span> Site
              </Pop>
            </button>
            </a>
            </div>
            <div className="language">
              <Slowvert>
                <FaHtml5 className="Icon-l-size" /></Slowvert><span></span>
              <Slowvert>
                <FaCss3 className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <IoLogoJavascript className="Icon-l-size" />
              </Slowvert>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page">
        <div className="project-work">
        <div className="white-bg">
            <div className="reg-bg">
            <h1>MESSENGER</h1>
            <div className="icon-det">
            <div className="flex">
            <a href="https://github.com/usen-bet/Chat-Application.git">
              <button>
              <Pop>
              <span className="ones">View</span> Code
              </Pop>
              </button>
            </a>
            <a href="https://messenger-8025d.web.app/">
              <button>
                <Pop>
              <span className="ones">View</span> Site
              </Pop>
              </button>
            </a>
            </div>
            <div className="language">
              <Slowvert>
              <FaReact className="Icon-l-size" />
              </Slowvert><span></span>
              <Slowvert>
                <FaCss3 className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <IoLogoJavascript className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <SiFirebase className="icon-l-size" />
              </Slowvert>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page">
        <div className="project-work">
        <div className="white-bg">
            <div className="reg-bg">
            <h1>NETFLIX CLONE</h1>
            <div>
            <div className="icon-det">
            <div className="flex">
            <a href="https://github.com/usen-bet/Net-clone.git">
            <button>
              <Pop>
              <span className="ones">View</span> Code
              </Pop>
            </button> 
            </a>  
            <a href="https://fone-ent.vercel.app/Front.htm">
              <button>
                <Pop>
              <span className="ones">View</span> Site
              </Pop>
              </button>
            </a>
            </div>
            <div className="language">
              <Slowvert>
              <FaReact className="Icon-l-size" />
              </Slowvert><span></span>
              <Slowvert>
                <FaCss3 className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <IoLogoJavascript className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <SiFirebase className="icon-l-size" />
              </Slowvert>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page">
        <div className="project-work"> 
          <div className="white-bg">
            <div className="reg-bg">            
            <h1>HRXN</h1>
            <div className="icon-det">
            <div className="flex">
            <a href=" ">
            <button>
              <Pop>
              <span className="ones">View</span> Code
              </Pop>
            </button>
            </a> 
            <a href=" ">
            <button>
              <Pop>
              <span className="ones">View</span> Site
              </Pop>
            </button>
            </a>
            </div>
            <div className="language">
              <TbBrandNextjs className="Icon-l-size" />
              <Slowvert>
                <FaCss3 className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <IoLogoJavascript className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <SiVite className="Icon-l-size"/>
              </Slowvert>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page">
        <div className="project-work"> 
          <div className="white-bg">
            <div className="reg-bg">            
            <h1>PORTFOLIO</h1>
            <div className="icon-det">
            <div className="flex">
            <a href=" ">
            <button>
              <Pop>
              <span className="ones">View</span> Code
              </Pop>
            </button>
            </a> 
            <a href=" ">
            <button>
              <Pop>
              <span className="ones">View</span> Site
              </Pop>
            </button>
            </a>
            </div>
            <div className="language">
              <Slowvert>
              <FaReact className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <FaCss3 className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <IoLogoJavascript className="Icon-l-size" />
              </Slowvert>
              <Slowvert>
                <SiVite className="Icon-l-size"/>
              </Slowvert>
              <SiPrismic />
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  </main>   
    </div>
    </div>
  )
}

export default Project