import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import profileReduser from "./profile/reduser";
import messagesReduser from './messages/reduser';
import chatsReduser from './chats/reduser';

// подключаем миддлвару
import middleware from '../middleware/middleware';



// Объединяем все редюсеры 
const redusers = combineReducers({
  profile: profileReduser,
  chats: chatsReduser,
  messages: messagesReduser
})

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  redusers, // redusers или один редюсер без сombineREd..
  composeEnhancer(applyMiddleware(middleware))
  );
export default store;
