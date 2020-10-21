import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { HashRouter as NavLink, Link } from 'react-router-dom';

class Products extends React.Component {


    render() {
        return (
            <React.Fragment>

                <Header />
                <div className="mainTitle borderBottom">House Coffee Products</div>
                <div className="mainBody">
                    <div className="sellTitle borderBottomSolid">Choose from our great coffee range!</div>
                    {/* wrapper */}
                    <div className="coffeeBody">
                        <div className="coffeeWrapper">
                            <img src="./img/blackwidow.jpg" alt="Blackwidow Coffee Pic" className="aboutPic"></img>
                            <p className="coffeeInfo">A dark roasted coffee blend taken beyond second crack to develop a rich, grunty hit!</p>
                        </div>
                        <div className="coffeeWrapper">
                            <img src="./img/redback.jpg" alt="Redback Coffee Pic" className="aboutPic"></img>
                            <p className="coffeeInfo">A coffee with bite of salted caramel notes and deep, satisfying flavour.</p>                           
                        </div>
                        <div className="coffeePrices">PRICES: <br />1kg - $40<br /> 500g - $20</div>
                        <Link to="/contact" className="coffeeLinks learnButton">CLICK HERE FOR INFORMATION ON HOW TO CONTACT WARREN TO PURCHASE OUR GREAT TASTING COFFEE</Link>
                    </div>
                    <div className="sellTitle borderBottomSolid">ESPRESSO MACHINE ATTACHMENTS</div>
                        <div>
                        <a href="https://pdfhost.io/v/kEc~pleFd_MOTTA_Metallurgica_Pricelist_August_2020_a.pdf" target="_blank" className="coffeeLinks learnButton">
                            CLICK HERE TO SEE THE METALLURGICA MOTTA RANGE AND PRICELIST
                            </a> 
                        </div>

                </div>
                <Footer />
            </React.Fragment>

        )
    }
}


export default Products