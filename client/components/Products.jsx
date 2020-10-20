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
                        <div>
                        <img src="./img/blackwidow.jpg" alt="Blackwidow Coffee Pic" className="aboutPic"></img>  
                        <div>

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