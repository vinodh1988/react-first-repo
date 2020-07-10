import React from 'react'
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App'
import About from './about'
import Api from './api'

class Home extends React.Component{
    render(){
        return(
            <Router>
            <div class="page">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            
            <a className="navbar-brand" href="/">My Demo App</a>
            

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/apicalls">Api Calls</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About app</Link>
              </li>
            </ul>
          </nav>   

          <div id="content">
             <Route exact path="/" component={App} />
             <Route path="/apicalls" component={Api} />
             <Route path="/about" component={About} />
          </div>
          </div>
          </Router>
        )
    }
}

export default Home