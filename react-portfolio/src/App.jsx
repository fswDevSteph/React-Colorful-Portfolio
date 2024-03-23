import { useState } from 'react'
// import Message from './components/Message.jsx'
import Header from './components/header/header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css'
import Aboutme from './components/aboutme/aboutme.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
  
    
      <div className='space'>
    <Header />
    <Aboutme />
    
      
      
    </div>
  )
}

export default App
