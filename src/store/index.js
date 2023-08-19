import { createStore, combineReducers,  applyMiddleware, compose } from 'redux';

import profileReduser from "./profile/reduser";
import messagesReduser from './messages/reduser';
import chatsReduser from './chats/reduser';

import thunk from "redux-thunk";

//redux persist
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

// Объединяем все редюсеры 
const redusers = combineReducers({
  profile: profileReduser,
  chats: chatsReduser,
  messages: messagesReduser
})

const persistedReduser = persistReducer(persistConfig, redusers)

export const store = createStore(
  persistedReduser, // redusers или один редюсер без сombineREd..
  composeEnhanser(applyMiddleware(thunk))
  );

 const persistor = persistStore(store);

 export default persistor;

