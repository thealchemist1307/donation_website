import * as ActionTypes from './ActionTypes';

export const userDetails = (state ={ loggedin:false,accDetails:{},authDetails:{},profDetails:{},whichUser:""}, action) => {
  console.log(action)
    switch(action.type) {
        case ActionTypes.LOGGING_IN:
          return {...state, loggedin:true, accDetails:action.payload.user,authDetails:action.payload.authResponse};
        case ActionTypes.LOGGING_OUT:
            return {...state, errMess: null, loggedin:false,accDetails:{},authDetails:{},profDetails:{},whichUser:"",profileCompleted:false};
        case ActionTypes.SET_USER_TYPE:
          return{...state,whichUser:action.payload}
          case ActionTypes.PROFILE_STATUS:
            return{...state,profileCompleted:action.payload}
        case ActionTypes.UPDATE_PROFILE:
          return {...state, accDetails:action.payload};
   
        default:
            return state;
    }
}
