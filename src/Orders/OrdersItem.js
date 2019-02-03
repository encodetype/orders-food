import React, { Component } from 'react';
import { connect } from 'react-redux'
import ta from 'time-ago';

import { actionUpdateOrderState } from '../redux/actions.js';

class OrdersItem extends Component{

  constructor(props){
    super(props);

    this.updateOrderStatus = this.updateOrderStatus.bind(this);
  }

  updateOrderStatus(e){
    e.stopPropagation();
    e.preventDefault();

    this.props.updateOrderToState(e.target.id);
  }

  renderAction(isDone,id){
    if(isDone){
      return;
    }

    return (<button className="btn btn-primary" onClick={ this.updateOrderStatus } id={ id } >To Serve</button>)
  }

  diffDate(time){
    return (new Date()).getTime()-(new Date(time)).getTime();
  }


  render(){
    if( this.props.foodOrder.length === 0 ){
      return null;
    }

    let isDone = this.props.listType === 'history' ? true : false;

    let listiTem = this.props.foodOrder.filter(item=>item.isDone === isDone ).map(row => (<tr key={ row.id } ><td>{ row.tableNo }</td>
        <td>{ row.foodName }</td>
        <td>{ row.quantity }</td>
        <td>{ ta.ago( (new Date()) - this.diffDate(row.time) ) }</td>
        <td>{ this.renderAction(row.isDone,row.id) }</td>
    </tr>
      ));

    return listiTem;

  }
}

const mapStateToProps = (state) => {
  return {
    foodOrder:state[0].orders || []
  }
}

const mapDispatchToProps = dispatch => ({
  updateOrderToState : (id) => { dispatch(actionUpdateOrderState(id)) }
});



export default connect(mapStateToProps,mapDispatchToProps)(OrdersItem);
