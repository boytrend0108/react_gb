import { ADD_MESSAGE, addMessage } from "../store/messages/actions";

/* eslint-disable no-unused-vars */
const middleware = (store) => (next) => (action) => {
  const id = action.payload.chatId;
  if (action.type === ADD_MESSAGE && action.payload.message.author !== 'robot' ) {
    setTimeout(() =>  store.dispatch(addMessage(id, {text:"I'm bot from middleware", author: 'robot'})), 2000)
  }

  return next(action);
}

export default middleware;