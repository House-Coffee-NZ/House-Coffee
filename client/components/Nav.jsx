import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

class Nav extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="navFlex">
<div className="navMain">
    <img src="./img/logo.png" alt="Main Logo" className="mainLogo"></img>
    </div>
<div className="navLink">
    <Link to="/" className="links">HOME</Link>
    <Link to="/about" className="links">ABOUT</Link>
    <a href="https://www.katipocoffee.co.nz/" target="_blank" className="links centerText">PRODUCTS</a>
    <Link to="/contact" className="links">CONTACT</Link>
</div>
</div>
            </React.Fragment>

        )
    }
}


export default Nav