import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';


class Main extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="mainTitle borderBottom">THE BEST QUALITY ESPRESSO MACHINES IN NEW ZEALAND
                    </div>
                <div className="mainBody">
                    <div className="mainText">House Coffee New Zealand supply coffee machines to domestic consumers and offer servicing
                    options for a range of different brands and models, most notably the new Rocket Evoluzione Espresso
                    machine.<br /><br />
                    This machine and others like it represent the absolute pinnacle of coffee machine
                    technology and are made of durable, stainless materials that are sure to consistently impress and
                    inspire. These attractive products will compliment any kitchen and retain an essence of timeless
                    style for years to come, not to mention save you money on store bought coffees!
                    </div>
                    <div className="sellTitle borderBottomSolid">LEARN MORE ABOUT WHAT WE SELL</div>
                    <div className="mainLinks">
                        <div>
                        <a href="https://rocket-espresso.co.nz/" target="_blank">
                            <img src="./img/rocket.jpg" alt="Rocket Logo" className="brandPic"></img>
                        </a>
                        <a href="https://rocket-espresso.co.nz/" target="_blank" className="learnButton">ROCKET COFFEE MACHINES</a>
                        </div>
                        <div>
                        <a href="https://www.mazzer.co.nz/" target="_blank"> 
                            <img src="./img/mazzer.jpeg" alt="Mazzer Logo" className="brandPic"></img>
                        </a>
                        <a href="https://www.mazzer.co.nz/" target="_blank" className="learnButton">MAZZER COFFEE GRINDERS</a>
                        </div>
                        <div>
                        <a href="https://domobar.co.nz/espresso-machines/domobar-super-espresso-machine/overview" target="_blank">     
                        <img src="./img/domobar.webp" alt="Domobar Logo" className="brandPic">
                        </img>
                        </a>    
                        <a href="https://domobar.co.nz/espresso-machines/domobar-super-espresso-machine/overview" target="_blank" className="learnButton domoButton">DOMORBAR ESPRESSO MACHINES</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}


export default Main