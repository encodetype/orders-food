import React, { Component } from 'react';
import Layout from '../Layouts/Layout.js';
import OrdersList from './OrdersList.js';
import { connect } from 'react-redux'


class OrdersHistory extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Layout>
        <OrdersList title="Orders History" listType="history" foodOrder={ this.props.foodOrder } />
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    foodOrder:state[0].orders
  }
}

export default connect(mapStateToProps,null)(OrdersHistory);
