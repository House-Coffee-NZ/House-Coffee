import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

import Header from './Header'
import Footer from './Footer'


class About extends React.Component {


    render() {
        return (
            <React.Fragment>
              <Header />
              <div className="mainTitle borderBottom">WHO ARE HOUSE COFFEE?<br/> WHAT DO WE DO?
              </div>
              <div className="aboutBody">
              <img src="./img/about.webp" alt="About Picture" className="aboutPic"></img>     
              <div className="mainText">
              House Coffee started 15 years ago selling the best espresso  machines and grinders 
              available in New Zealand. We pride ourselves in providing top notch service and 
              customer satisfaction and led the way with in-house service and barista training. 
              We ensure a quick turn-around on repairs and service and often may provide a loan 
              machine for longer tasks.
              <br /><br />
              Katipo Coffee started 5 years ago supplying domestic customers and offices with 
              fresh roasted beans. Our Red Back blend has been a favourite of many with its 
              salted caramel notes and deep, satisfying flavour. Black Widow has appealed to 
              those who prefer a dark roasted blend taken beyond 2nd crack to develop a rich, 
              grunty hit!
              <br /><br /> 
              All our beans are fairly sourced from Guatemala, Columbia and Sumatra. The 
              importer has developed a long relationship with each grower and purchases the 
              entire seasons production each year. 
              While not certified organic, nearly all coffee is grown at altitude using organic practises which make most coffee production naturally organic.
              </div>
              </div>
              <Footer />
            </React.Fragment>

        )
    }
}


export default About