import { createStore, combineReducers,  applyMiddleware } from 'redux';

import profileReduser from "./profile/reduser";
import messagesReduser from './messages/reduser';
import chatsReduser from './chats/reduser';
import mySaga from "./sagas"

//redux-saga
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

// Объединяем все редюсеры 
const redusers = combineReducers({
  profile: profileReduser,
  chats: chatsReduser,
  messages: messagesReduser
})

const store = createStore(
  redusers, // redusers или один редюсер без сombineREd..
  applyMiddleware(sagaMiddleware)
  );
export default store;

sagaMiddleware.run(mySaga);