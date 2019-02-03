import React, { Component } from 'react';
import Layout from '../Layouts/Layout.js';
import { connect } from 'react-redux'

import OrdersList from './OrdersList.js'
import OrdersItem from './OrdersItem.js'

import { actionAddOrder } from '../redux/actions.js';

class OrdersIndex extends Component{

  constructor(props){
    super(props);

    this.state = {
      fields:{},
      errors:{},
    }

    this.handleChange = this.handleChange.bind(this);
    this.renderInputText = this.renderInputText.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }


  renderInputText(args){
    return (<div className={ `form-group ${  this.state.errors[args.fieldName] !== "" && this.state.errors[args.fieldName] !== undefined  ? 'has-error' : '' } `}  >
      <label>{ args.label }</label>
    <input type="text" name={ args.fieldName } value={ this.state.fields[args.fieldName] || '' } className="form-control" onChange={ this.handleChange } placeholder={ args.placeholder } />
    </div>)
  }

  handleChange(event){
    let name = event.target.name;

    let fields = this.state.fields || {};
    fields[name] = event.target.value;

    this.setState({ "fields":fields });
  }

  validateForm(){
    let validateState = true;
    let errors = {};

    let fields = this.state.fields;

    if( ! fields['orders_table_no']  ){
      errors['orders_table_no'] = 'Error';
      validateState = false;
    }

    if( ! fields['orders_food_name']  ){
      errors['orders_food_name'] = 'Error';
      validateState = false;
    }

    if( ! fields['orders_quantity']  ){
      errors['orders_quantity'] = 'Error';
      validateState = false;
    }

      this.setState({ errors:errors });
    return validateState;
  }

  sendOrder(e){
    e.stopPropagation();
    e.preventDefault();

    let fields = this.state.fields;

    if( this.validateForm() === true ){

      let item = {
          tableNo: fields['orders_table_no'],
          foodName: fields['orders_food_name'],
          quantity: fields['orders_quantity'],
          time: new Date()
      }
      this.props.addOrderToState(item);
      this.setState({ fields:{} });
      e.target.reset();
    }
  }

  render(){
    return (
      <Layout>
        <form method="post" onSubmit={ this.sendOrder.bind(this) } >
          { this.renderInputText({ label:'Table No',fieldName:'orders_table_no' }) }
          { this.renderInputText({ label:'Food',fieldName:'orders_food_name' }) }
          { this.renderInputText({ label:'Quantity',fieldName:'orders_quantity' }) }
          <button className="btn btn-success" >Order</button>
        </form>
        <br/>
        <br/>
      <OrdersList title="Current Orders" >
          <OrdersItem />
        </OrdersList>
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addOrderToState : (item) => { dispatch(actionAddOrder(item)) }
});

export default connect(null,mapDispatchToProps)(OrdersIndex);
