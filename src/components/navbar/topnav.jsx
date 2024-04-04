import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './topnav.css'

function TopNav() {

  // Change style of navbar on scroll
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    var navbar = document.querySelector("#myNavbar");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
      navbar.className = navbar.className.replace(
        " w3-card w3-animate-top w3-white",
        ""
      );
    }
  }

  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
  return (

    // grab bootstrap nav and  add media query for the hamburger menu
    < section className='navbar-custom-color relative' >
      <div className="w3-top">
        <div className="w3-bar " id="myNavbar">
          <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" title="Toggle Navigation Menu" onClick={() => toggleFunction()}>
            <i className="fa fa-bars" />
          </a>
          <a href="#home" className="w3-bar-item w3-button w3-hide-small w3-right">HOME</a>
          <a href="#action/3.1" className="w3-bar-item w3-button w3-hide-small w3-right"><i className="fa fa-user" /> ABOUT</a>
          <a href="#action/3.2" className="w3-bar-item w3-button w3-hide-small w3-right"><i className="fa fa-th" /> PORTFOLIO</a>
          <a href="#action/3.3" className="w3-bar-item w3-button w3-hide-small w3-right"><i className="fa fa-envelope" /> CONTACT</a>

        </div>

        {/* Navbar on small screens */}
        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
          <a href="#action/3.1" className="w3-bar-item w3-button" onClick={() => toggleFunction()}>ABOUT</a>
          <a href="#action/3.2" className="w3-bar-item w3-button" onClick={() => toggleFunction()}>PORTFOLIO</a>
          <a href="#action/3.3" className="w3-bar-item w3-button" onClick={() => toggleFunction()}>CONTACT</a>

          <meta name="apple-mobile-web-app-capable" content="yes" />
        </div>
      </div>

      {/* nav bar divide that creates coloured bar */}
      < div className='custom-shape-divider-top-1711511784' >
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' className='shape-fill'></path>
          <path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' className='shape-fill'></path>
          <path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' className='shape-fill'></path>
        </svg>
      </div >
      {/* navbar divide facing down */}
      < div className='custom-shape-divider-bottom-1711514726' >
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' className='shape-fill'></path>
          <path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' className='shape-fill'></path>
          <path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' className='shape-fill'></path>
        </svg>
      </div >

    </section >

  );
}

export default TopNav;