import * as ActionTypes from './ActionTypes'

export const drawerItem = (state = {currItem:"",showInstruments:false,items:[]},action) => {
    console.log(action)
    switch(action.type) {
        case ActionTypes.CHANGE_ITEM:
                return {...state,errMess:null,currItem:action.payload}
        case ActionTypes.SHOW_INSTRUMENTS:
            return {...state,errMess:null,showInstruments:action.payload}
        case ActionTypes.SET_ITEMS:
            return {...state,errMess:null,items:action.payload}
    
        default:
            return state
    }
}