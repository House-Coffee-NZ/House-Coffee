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

                
                    </div>
                    <Footer />
            </React.Fragment>

        )
    }
}


export default Products