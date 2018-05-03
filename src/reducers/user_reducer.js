import {CREATER_USER} from '../actions'
export default function(state={},action){
    switch(action.type){
      case CREATER_USER:
      //console.log("Reducers" , action.payload);
      return action.payload
      default:
      return state
    }

}
