import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Layout extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="navbar navbar-default" >
          <div className="container-fluid" >
            <a className="navbar-brand" href="" >
              Claim food order
            </a>

            <div className="collapsed navbar-collapsed" >
              <ul className="nav navbar-nav" >
                <li><Link to={ '/' } >Index</Link></li>
                <li><Link to={ '/orders-history' } >History</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container" >
        { this.props.children }
        </div>
      </div> )
  }
}

export default Layout;
