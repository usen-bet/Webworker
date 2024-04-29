
import Circles from "../assets/Pictures/Circles.svg"
import './Styles/Intro.scss'
import { Typewriter } from 'react-simple-typewriter'
import  Header from "./Headers/Header1"

function Intro() {
  const handleDone = () => {
    console.log("Done after 5 loops!")
  }

  return (
    <div>
      <Header />
      <div className='head'>
    <div className='tr'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='bm'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='tl'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='br'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='tm'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='bl'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>   
    </div>  
    <main className="main">
    <h1 className="title2">
    <Typewriter
            words={['The Web Worker']}
            loop={1}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
    />
    </h1>
    <p>
    <Typewriter
            words={['I am the webworker, a developer, and this is my front end showcase site, check for my works in the projects section to see what i am capable of, i am passionate about bringing your ideas to life, send me a message today.']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
    />  
    </p>
    </main>
    </div>
  )
}

export default Intro