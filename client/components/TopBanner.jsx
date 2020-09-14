import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';



class Home extends React.Component {


    render() {
        return (
            <React.Fragment>
              <div className="topBannerMain">
          <div>CALL US TODAY!</div>
          <div className="headerNumber"><a href="tel:021842319">021 842 319</a></div>
              </div>
            </React.Fragment>

        )
    }
}


export default Home