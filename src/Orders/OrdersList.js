import React, { Component } from 'react';
import OrdersItem from './OrdersItem';


class OrdersList extends Component{

  constructor(props){
    super(props);

    this.renderOrderItem = this.renderOrderItem.bind(this);
  }

  renderOrderItem(){
    if( this.props.foodOrder.length > 0 ){
      return (<OrdersItem listType={ this.props.listType } foodOrder={ this.props.foodOrder } />)
    }

    return (<tr colSpan="5" ><td>No data</td></tr>)
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
                { this.renderOrderItem() }
              </tbody>
            </table>
          </div>

        </div>
    )
  }
}


export default OrdersList;
