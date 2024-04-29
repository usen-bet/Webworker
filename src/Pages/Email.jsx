import Header from "./Headers/HeaderEmail"
import Circles from "../assets/Pictures/Circles.svg"
import "./Styles/Email.scss"
import './Styles/Intro.scss'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Email() {
  const notify = () => toast("Email sent");
  const form = useRef();
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const onSubmit = () => {
    setFirstName(" ")
    setEmail(" ")
    setMessage(" ")
    notify()
  }
  const change = (e) => {
    setFirstName(e.target.value)
  }
  const changed = (e) => {
    setEmail(e.target.value)
  }
  const changer = (e) => {
    setMessage(e.target.value)
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zk0xx8d', 'template_9ayyqqd', form.current, {
        publicKey: 'sIO8ZblhEQq7A7TrP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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
    <div className='top-left pick'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='bottom-right clap'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='top-mid'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>
    <div className='bottom-left'>
      <img src={Circles} className='img1' alt="lightwork" />
    </div>   
    </div>  
    <main className="main mains">
      <div className="sendEmail">
        <form action="" ref={form} className="form" onSubmit={sendEmail}>
        <h1>Email me</h1>
        <input 
        type="text" 
        onChange={change} 
        value={firstName} 
        className="Text" 
        placeholder="Name" 
        name="to_name"
        />
        <input 
        type="text" 
        onChange={changed} 
        value={email} 
        className="Text" 
        placeholder="Email" 
        name="from_name"
        />
        <textarea 
        name="message" 
        onChange={changer} 
        value={message} 
        id="email" 
        cols="30" 
        rows="10" 
        placeholder="Message">
 
        </textarea>
        <button className="email-btn" type="submit" value="Send" onClick={onSubmit} >
          Send
        </button>
        <ToastContainer
          theme="dark"
         />
        </form>
      </div>
    </main>
    </div>
  )
}

export default Email