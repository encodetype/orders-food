import React, { Component } from 'react';
import Layout from '../Layouts/Layout.js';
import OrdersList from './OrdersList.js';
import OrdersItem from './OrdersItem.js';


class OrdersHistory extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Layout>
        <OrdersList title="Orders History" >
          <OrdersItem listType="history" />
        </OrdersList>
      </Layout>
    )
  }
}

export default OrdersHistory;
