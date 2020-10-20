import React from 'react'
import Header from './Header'
import Footer from './Footer'

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
                        <p className="coffeePrices">PRICES: <br />1kg - $40<br /> 500g - $20</p>
                        <div className="coffeeBuy">If you would like to purchase some of our great tasting coffee, please&nbsp;<a className="coffeeLinks" href="tel:021842319">phone&nbsp;</a> or&nbsp;<a className="coffeeLinks" href="mailto:housecoffee@xtra.co.nz">email&nbsp;</a> Warren for an invoice.
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>

        )
    }
}


export default Products