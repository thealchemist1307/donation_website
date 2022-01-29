import * as ActionTypes from './ActionTypes';

export const showDemo = (state ={ demo:false}, action) => {
  console.log(action)
    switch(action.type) {
        case ActionTypes.DEMO_DONE:
          return {...state, errMess: null, demo:true};
        default:
            return state;
    }
}
