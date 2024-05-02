import './App.css'
import Circles from "./assets/Pictures/Circles.svg"
import { PrismicRichText, useSinglePrismicDocument } from '@prismicio/react'
import './Styles/global.scss'
import Header from './Components/Header'
import {Helmet} from "react-helmet";
import {Pop} from "./Components/Animations/Pop"
import {Reveal} from "./Components/Animations/Reveal"
import { ForceReveal } from './Components/Animations/ForceReveal'
import { PropagateLoader } from 'react-spinners'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
     setLoading(true)
     setTimeout(() => {
        setLoading(false)
     }, 3000)
  }, [])
  const override = {
    display: "block",
    margin: "auto",
    borderColor: "#ABF5F5",
  };
  const [document] = useSinglePrismicDocument('homepage');
  return (
    <main> 
      <Helmet>
                <meta charSet="utf-8" />
                <title>Wwebworkers</title>
                <link data-react-helmet="true" rel="icon" type='image/png' href="/favicon.ico" />
      </Helmet> 
      <Header/>
      {
        loading ? (
          <div className="load">
        <PropagateLoader
        color={color}
        cssOverride={override}
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
          </div>
        ):(
    <div className='head'>
    <div className='top-right'>
      <Reveal>
      <img src={Circles} className='img1' alt="lightwork" />
      </Reveal>
    </div>
    <div className='top-left'>
      <ForceReveal>
      <img src={Circles} className='img1' alt="lightwork" />
      </ForceReveal>
    </div>
    <Pop>
    <h1 className='title'><span className='fw'>
      {document && (
        <PrismicRichText field={document.data.header} />
      )}
      </span>
      <span className='sw'>
      {document && (
        <PrismicRichText field={document.data.header2} />
      )}
      </span>
      <span className='tw'>
      {document && (
        <PrismicRichText field={document.data.header3} />
      )}
      </span>
      </h1>
    </Pop>
    <div className='bottom-right'>
      <Reveal>
      <img src={Circles} className='img1' alt="lightwork" />
      </Reveal>
    </div>
    <div className='bottom-left'>
      <ForceReveal>
      <img src={Circles} className='img1' alt="lightwork" />
      </ForceReveal>
    </div>   
    </div> 
  )} 
    </main>
  )
}

export default App
