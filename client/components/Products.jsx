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
                        <div className="mainLinks">
                        <div className="coffeeWrapper">
                        <img src="./img/blackwidow.jpg" alt="Blackwidow Coffee Pic" className="aboutPic"></img>
                        <p className="coffeeInfo">A dark roasted coffee blend taken beyond second crack to develop a rich, grunty hit!<br />
                        1kg - $40 500g - $20</p>  
                        </div>
                        <img src="./img/redback.jpg" alt="Redback Coffee Pic" className="aboutPic"></img>  
                        <div>

                        </div>
                        </div>

                
                    </div>
                    <Footer />
            </React.Fragment>

        )
    }
}


export default Products