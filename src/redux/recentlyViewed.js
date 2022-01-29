import * as ActionTypes from './ActionTypes';

export const recentlyViewed = (state ={ recent:[],recentMap:new Map()}, action) => {
  console.log(action)
    switch(action.type) {
        case ActionTypes.ADD_RECENT:
        var arr= state.recent  
        arr.push(action.payload)
        var result=[]
        var map =new Map()
        for (const item of arr) {
          if(!map.has(item.account_id)){
              map.set(item.account_id, true);    // set any value to Map
              result.push(item);
          }
      }
        if(result.length<20)
          {

              return {...state, errMess: null, recent:result};
            
          }
          else{

            result.shift()
            return {...state, errMess: null, recent:result};
          }

        default:
            return state;
    }
}
