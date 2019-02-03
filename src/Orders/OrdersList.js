import React, { Component } from 'react';

class OrdersList extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="panel panel-default" >
          <div className="panel-heading" >
            { this.props.title }
          </div>
          <div className="panel-body" >
            <table className="table" >
              <thead>
                <tr>
                  <th>Table No</th>
                  <th>Food Order</th>
                  <th>Quantity</th>
                  <th>Time</th>
                  <th width="1" ></th>
                </tr>
              </thead>
              <tbody>
                { this.props.children }
              </tbody>
            </table>
          </div>

        </div>
    )
  }
}

export default OrdersList;
