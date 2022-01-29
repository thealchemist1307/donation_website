import * as ActionTypes from './ActionTypes';

export const donation = (state ={ donation:[]}, action) => {
  console.log(action)
    switch(action.type) {
        case ActionTypes.ADD_DONATION:
          return {...state, errMess: null, donation:[...state.donation,action.payload]};
        default:
            return state;
    }
}
