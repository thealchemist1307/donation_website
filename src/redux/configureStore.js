
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';
import {showDemo} from "./showDemo"
import {recentlyViewed} from "./recentlyViewed"
import { composeWithDevTools } from 'redux-devtools-extension';
import {userDetails} from "./userDetails"
import {favouriteArtist} from "./favouriteArtist"
import { drawerItem } from './drawerItem';
import localStorage from 'redux-persist/es/storage';
import { donation } from './donation';
export const ConfigureStore = () => {  
    const config = {
        key: 'root',
        storage:localStorage,
        debug: true
    };

    const store = createStore(
        persistCombineReducers(
            config,
            {
                showDemo,
                recentlyViewed,
                userDetails,
                favouriteArtist,
                drawerItem,
                donation
            }
        ),
        composeWithDevTools(
 
        applyMiddleware(thunk, logger),
        )

    );
    
    const persistor = persistStore(store);

    return { persistor, store };
};
