import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from './components/header/header.jsx'
import Aboutme from './components/aboutme/aboutme.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div >
      <Header />
      <Aboutme />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
