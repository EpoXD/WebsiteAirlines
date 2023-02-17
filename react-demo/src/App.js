import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { MdOutlineMail } from "react-icons/md"
import { GiCommercialAirplane } from "react-icons/gi"
import { HiOutlineTicket } from "react-icons/hi"
import video from "./video/airplane.mp4"
function App(){
  return (
    <>
     <Router>
      <div className="App">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4"></source>
        </video>
        <div className="airplane">
        <GiCommercialAirplane className="icon-airplane"/>
        </div>
        <div className="container">
        <div className="buy-ticket">Airline tickets</div>
        <button className="btn">Buy</button>
        </div>
  <ul>
    <li className="home"><AiOutlineHome className="icon-home"/><a href="/home">Home</a></li>
    <li className="ticket"><HiOutlineTicket className="icon-ticket"/><a href="/ticket">Tickets</a></li>
    <li className="about"><AiOutlineInfoCircle className="icon-about"/><a href="/About">About</a></li>
    <li className="contact-us"><MdOutlineMail className="icon-contact-us"/><a href="/Contact-us">Contact us</a></li>
  </ul>
  </div>
    <Routes></Routes>
  </Router>
  </>
  )
}

export default App;
