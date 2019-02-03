import { combineReducers } from 'redux'
import { ADD_ORDER,UPDATE_ORDER_STATE } from './actionsType.js';
import uuidv4 from 'uuid/v4';

const initialState = {
  orders:[]
}

function ordersToApp(state=initialState,action){
  switch (action.type){
    case ADD_ORDER:
      return Object.assign({},state,{
        orders:[...state.orders,{
          id:uuidv4(),
          tableNo:action.item.tableNo,
          foodName:action.item.foodName,
          quantity:action.item.quantity,
          time:new Date(),
          isDone:false
        }]
      });
    case UPDATE_ORDER_STATE:
      return Object.assign({},state,{ ...state,orders:state.orders.map((orderItem,index)=>{
        if( action.id === orderItem.id){
          return Object.assign({},orderItem,{ isDone:true });
        }

        return orderItem;
      })
    });
    default:
      return state;
  }
}

const rootReducers = combineReducers([ordersToApp]);
export default rootReducers;
