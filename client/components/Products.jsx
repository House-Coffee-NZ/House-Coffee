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
                        <div className="coffeePrices">
                            <p className="priceTitle">PRICES:&nbsp;</p>
                            <p className="price">1kg - $40&nbsp;</p>
                            <p className="price">500g - $20&nbsp;</p>
                            <p className="priceInfo">To purchase some of our great tasting coffee, contact Warren on the link below to get in touch</p>
                        </div>
                        <Link to="/contact" className="coffeeLinks lightBackground">CLICK HERE</Link>
                    </div>
                    <div className="sellTitle borderBottomSolid">ESPRESSO MACHINE ATTACHMENTS</div>
                    <div className="metalWrapper">
                        <img src="./img/metal.jpg" alt="Metallurgica Motta Logo" className="metalLogo"></img>
                        <div>
                            <p className="metalInfo">We source a range of espresso machine attachments to use with your espresso machine. Click on the link below to
                        see the range and contact Warren on how to purchase any of the items listed!</p>
                        </div>
                        <div className="coffeeLinks">
                            <a href="https://pdfhost.io/v/kEc~pleFd_MOTTA_Metallurgica_Pricelist_August_2020_a.pdf" target="_blank" className="coffeeLinks lightBackground marginBottom">
                                CLICK HERE
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