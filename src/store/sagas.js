import {takeLatest, put, delay} from "redux-saga/effects";
import {ADD_MESSAGE_WITH_SAGA, addMessage } from "./messages/actions";

function* onAddMessageWithSaga(action) {
  yield put(addMessage(action.payload.chatId, action.payload.message)); // отправляем наше сообщение
  if (action.payload.message.author !== "robot") {
    const botMessage = {text: "Hi i'm from saga", author: 'robot'};
    yield delay(2000); // delaem задержку
    yield put(addMessage(action.payload.chatId, botMessage)); // отправляем сообщение от бота
  }
}

function* mySaga() {
  yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
}

export default mySaga;