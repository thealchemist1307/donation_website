import * as ActionTypes from './ActionTypes';
export const setDemo = (demo) => ({
    type: ActionTypes.DEMO_DONE,
    payload: demo
});

export const addRecent = (item) => ({
    type: ActionTypes.ADD_RECENT,
    payload: item
});
export const login=(item) => ({
    type: ActionTypes.LOGGING_IN,
    payload: item
});
export const logout=() => ({
    type: ActionTypes.LOGGING_OUT,
});
export const setUserType=(param)=>({
    type: ActionTypes.SET_USER_TYPE,
    payload: param
})
export const setProfileStatus=(param)=>({
    type: ActionTypes.PROFILE_STATUS,
    payload: param
})
export const addFavourite = (param) => ({
    type : ActionTypes.ADD_FAVOURITE,
    payload : param
})
export const removeFavourite = (param) => ({
    type : ActionTypes.REMOVE_FAVOURITE,
    payload : param
})
export const updateProfile =(param)=>({
    type : ActionTypes.UPDATE_PROFILE,
    payload : param
})
export const changeDrawerItem =(param)=>({
    type : ActionTypes.CHANGE_ITEM,
    payload : param
})
export const setInstruments =(param)=>({
    type : ActionTypes.SHOW_INSTRUMENTS,
    payload : param
})
export const setItems =(param)=>({
    type : ActionTypes.SET_ITEMS,
    payload : param
})
export const addDonation =(param)=>({
    type : ActionTypes.ADD_DONATION,
    payload : param
})
