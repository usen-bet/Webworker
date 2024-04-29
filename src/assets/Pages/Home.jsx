import './App.css'
import Circles from "./assets/Pictures/Circles.svg"
import { PrismicRichText, useSinglePrismicDocument } from '@prismicio/react'


import './Styles/global.scss'

function Home() {
    const [document] = useSinglePrismicDocument('homepage');
    return (
    <main>  
    <div className='head'>
    <div className='top-right'>
      <img src={Circles} alt="lightwork" />
    </div>
    <div className='top-left'>
      <img src={Circles} alt="lightwork" />
    </div>
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
    <div className='bottom-right'>
      <img src={Circles} alt="lightwork" />
    </div>
    <div className='bottom-left'>
      <img src={Circles} alt="lightwork" />

    </div>   
    </div>  
    </main>
  )
}

export default Home