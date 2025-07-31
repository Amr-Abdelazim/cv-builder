import '../styles/Home.css'
import { useState } from 'react';
import CVform from './CVform';
export default function Home() {
    const [started, setStarted] = useState(false);
    function handleClick() {
        setStarted(true);
    }
    return started ? (<CVform />)
    : (
        <div className="home-container">
           <div className='content-container'>
            <div className="welcome-message">
                Welcome to CV Builder — your free tool for crafting a professionally designed CV.
            </div>
            <button className="start-btn" onClick={handleClick}>Get Started</button>
          </div>
        </div>
    )
}