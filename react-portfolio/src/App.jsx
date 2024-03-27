import { useState } from 'react'
// import Message from './components/Message.jsx'
import Header from './components/header/header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Aboutme from './components/aboutme/aboutme.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Contact from './components/contact/contact.jsx';
// import Resume from './components/resume/resume.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
  
    
      <div >
    <Header />
    <Aboutme />
    <Portfolio />
    <Contact />
    {/* <Resume /> */}
      
      
    </div>
  )
}

export default App
