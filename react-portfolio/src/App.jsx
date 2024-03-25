import { useState } from 'react'
// import Message from './components/Message.jsx'
import Header from './components/header/header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Aboutme from './components/aboutme/aboutme.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
  
    
      <div >
    <Header />
    <Aboutme />
    <Portfolio />
      
      
    </div>
  )
}

export default App
