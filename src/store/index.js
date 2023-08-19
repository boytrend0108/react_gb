import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import profileReduser from "./profile/reduser";
import messagesReduser from './messages/reduser';
import chatsReduser from './chats/reduser';
// import middleware from '../middleware/middleware';
import thunk from "redux-thunk"

// Объединяем все редюсеры 
const redusers = combineReducers({
  profile: profileReduser,
  chats: chatsReduser,
  messages: messagesReduser
})

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  redusers, // redusers или один редюсер без сombineREd..
  composeEnhancer(applyMiddleware(thunk))
  );
export default store;
