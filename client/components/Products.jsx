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
                        <Link to="/contact" className="coffeeLinks lightBackground">CLICK HERE FOR INFORMATION ON HOW TO CONTACT WARREN TO PURCHASE OUR GREAT TASTING COFFEE</Link>
                    </div>
                    <div className="sellTitle borderBottomSolid">ESPRESSO MACHINE ATTACHMENTS</div>
                    <div className="metalWrapper">
                        <img src="./img/metal.jpg" alt="Metallurgica Motta Logo" className="metalLogo"></img>
                        <div>
                        <p className="metalInfo">We source a range of espresso machine attachments to use with your espresso machine. Click on the link below to
                        see the range and contact Warren on how to purchase any of the items listed!</p>
                        </div>
                        <div className="maxWidth">
                        <a href="https://pdfhost.io/v/kEc~pleFd_MOTTA_Metallurgica_Pricelist_August_2020_a.pdf" target="_blank" className="coffeeLinks lightBackground marginBottom">
                            CLICK HERE TO SEE THE METALLURGICA MOTTA RANGE AND PRICELIST
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>

        )
    }
}


export default Products