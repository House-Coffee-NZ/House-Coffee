import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

import Nav from './Nav'
import TopBanner from './TopBanner'

class Header extends React.Component {


    render() {
        return (
            <React.Fragment>
                <TopBanner />
                <div className="headerPic">
<div className="headerContent">
    
<Nav />
</div>
                </div>
            </React.Fragment>

        )
    }
}


export default Header