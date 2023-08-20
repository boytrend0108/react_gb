import { createStore, combineReducers,  applyMiddleware, compose } from 'redux';

import profileReduser from "./profile/reduser";
import messagesReduser from './messages/reduser';
import chatsReduser from './chats/reduser';
import gistsReduser from "./gists/reduser"

import thunk from "redux-thunk";

//redux persist
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: 'root',
  storage,
};

// Объединяем все редюсеры 
const redusers = combineReducers({
  profile: profileReduser,
  chats: chatsReduser,
  messages: messagesReduser,
  gists: gistsReduser
})

const persistedReduser = persistReducer(persistConfig, redusers)

export const store = createStore(
  persistedReduser, // redusers или один редюсер без сombineREd..
  composeEnhancers(applyMiddleware(thunk))
  );

 const persistor = persistStore(store);

 export default persistor;

