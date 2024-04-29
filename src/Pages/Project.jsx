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
            <a href="https://github.com/usen-bet/LynxRealEstate_Website">
            <button>
              View Code
            </button>
            </a> 
            <a href="https://react-project-zeta-six.vercel.app/">
            <button>
              View Site
            </button>
            </a>
            </div>
            <div className="language">
              <FaReact className="Icon-l-size" />
              <FaCss3 className="Icon-l-size" />
              <IoLogoJavascript className="Icon-l-size" />
              <SiVite className="Icon-l-size"/>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page">
        <div className="project-work">
        <div className="white-bg">
            <div className="reg-bg">
              <h1>FONE</h1>
              <div>
            <a href="https://github.com/usen-bet/Net-clone.git">
            <button>
              View Code
            </button> 
            </a>    
            <a href="https://fone-ent.vercel.app/Front.htm">
            <button>
              View Site
            </button>
            </a>
            </div>
            <div className="language">
              <FaHtml5 className="Icon-l-size" />
              <FaCss3 className="Icon-l-size" />
              <IoLogoJavascript className="Icon-l-size" />
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
            <div>
            <a href="https://github.com/usen-bet/weather.git">
              <button>
                View Code
              </button>
            </a> 
            <a href="https://weather-app-bay-omega.vercel.app/Untitled-1.html">
            <button>
              View Site
            </button>
            </a>
            </div>
            <div className="language">
              <FaHtml5 className="Icon-l-size" /><span></span>
              <FaCss3 className="Icon-l-size" />
              <IoLogoJavascript className="Icon-l-size" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page">
        <div className="project-work">
        <div className="white-bg">
            <div className="reg-bg">
            <h1>MESSENGER APP</h1>
            <div>
            <a href="https://github.com/usen-bet/Chat-Application.git">
              <button>
              View Code
              </button>
            </a>
            <a href="https://messenger-8025d.web.app/">
              <button>
                View Site
              </button>
            </a>
            </div>
            <div className="language">
              <FaReact className="Icon-l-size" /><span></span>
              <FaCss3 className="Icon-l-size" />
              <IoLogoJavascript className="Icon-l-size" />
              <SiFirebase className="icon-l-size" />
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
            <a href="https://github.com/usen-bet/Net-clone.git">
            <button>
              View Code
            </button> 
            </a>  
            <a href="https://fone-ent.vercel.app/Front.htm">
              <button>
                View Site
              </button>
            </a>
            </div>
            <div className="language">
              <FaReact className="Icon-l-size" /><span></span>
              <FaCss3 className="Icon-l-size" />
              <IoLogoJavascript className="Icon-l-size" />
              <SiFirebase className="icon-l-size" />
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
            <div>
            <a href=" ">
            <button>
              View Code
            </button>
            </a> 
            <a href=" ">
            <button>
              View Site
            </button>
            </a>
            </div>
            <div className="language">
              <TbBrandNextjs className="Icon-l-size" />
              <FaCss3 className="Icon-l-size" />
              <IoLogoJavascript className="Icon-l-size" />
              <SiVite className="Icon-l-size"/>
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
            <div>
            <a href=" ">
            <button>
              View Code
            </button>
            </a> 
            <a href=" ">
            <button>
              View Site
            </button>
            </a>
            </div>
            <div className="language">
              <FaReact className="Icon-l-size" />
              <FaCss3 className="Icon-l-size" />
              <IoLogoJavascript className="Icon-l-size" />
              <SiVite className="Icon-l-size"/>
              <SiPrismic />
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