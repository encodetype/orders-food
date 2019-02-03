import { ADD_ORDER,UPDATE_ORDER_STATE } from './actionsType.js';

export function actionAddOrder(item){
  return  { type:ADD_ORDER,item:item }
}

export function actionUpdateOrderState(id){
  return  { type:UPDATE_ORDER_STATE,id }
}
