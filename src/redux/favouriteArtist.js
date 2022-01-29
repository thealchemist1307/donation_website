import * as ActionTypes from './ActionTypes'

export const favouriteArtist = (state = {favourite:[],favouriteMap : new Map()},action) => {
    console.log(action)
    switch(action.type) {
        case ActionTypes.ADD_FAVOURITE:
            if(state.favourite.length<9){
                var arr = state.favourite
                arr.push(action.payload)
                console.log("brr")
                let outputArray = Array.from(new Set(arr))
                return {...state,errMess:null,favourite:outputArray}
            }
            else{
                var arr = state.favourite
                arr.shift()
                arr.push(action.payload)
                let outputArray = Array.from(new Set(arr))
                return {...state,errMess:null,favourite:outputArray}
            }
        
        case ActionTypes.REMOVE_FAVOURITE:
            var brr=state.favourite        
            console.log(state.favourite  )
            var brr= brr.filter((item)=>{
                if((item.personal_info.account_id!=action.payload.personal_info.account_id)
                ||(item.account_id!=action.payload.account_id))
                {
                    return item
                }
            })
            console.log("left",brr)
                return {...state,errMess:null,favourite:brr}
        default:
            return state
    }
}