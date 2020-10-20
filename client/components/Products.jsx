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
                            <p className="coffeePrices">PRICES:<br /><br />
                        1kg - $40<br />
                        500g - $20</p>
                        </div>
                        <div className="coffeeWrapper">
                            <img src="./img/redback.jpg" alt="Redback Coffee Pic" className="aboutPic"></img>
                            <p className="coffeeInfo">A coffee with bite of salted caramel notes and deep, satisfying flavour.</p>
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>

        )
    }
}


export default Products