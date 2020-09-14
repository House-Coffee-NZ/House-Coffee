import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

import Header from './Header'
import Footer from './Footer'

class Contact extends React.Component {


    render() {
        return (
            <React.Fragment>
              <Header />
              <div className="mainTitle borderBottom">HOW CAN I GET IN CONTACT?
              </div>
              <div className="contactBody">
   <div className="contactText">
   <div className="infoTitle borderBottomSolid">GET IN TOUCH WITH US ABOUT</div>
       <ul className="contactInfo">
           <li>Sales &amp; Repairs</li>
           <li>Barista Training</li>
           <li>Machine Maintenance</li>
           <li>In House Service</li>
       </ul>
   </div>
              <div className="contactText contactInformation">
              <div className="infoTitle borderBottomSolid">CONTACT INFORMATION</div>    
              <div className="contactTitle">PHONE</div>
              <div className="footerLink contactMargin"><a href="tel:021842319">021 842 319</a></div>
              <div className="contactTitle">EMAIL</div> 
              <div className="footerLink contactMargin"><a href="mailto:housecoffee@xtra.co.nz">housecoffee@xtra.co.nz</a></div>              
              </div>
              </div>
              <Footer />
            </React.Fragment>

        )
    }
}


export default Contact