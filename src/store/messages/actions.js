/* eslint-disable no-unused-vars */
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA'


// ЗДЕСЬ ЭКШТ ОБЪЕKT
export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {chatId, message}
})

// ЗДЕСЬ АКTION ЭТО ФУНКЦИЯ- ПОЭТОМУ ИСПОЛЬЗУЕМ THUNK
export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
  dispatch(addMessage(chatId, message));

  if (message.author !== "robot") {
    const botMessage =  {text:"I'm bot from thunk", author: 'robot'}
    setTimeout(() => {dispatch(addMessage(chatId, botMessage))}, 1700)
  }
}

// export const addMessageWithSaga = (chatId, message) => ({
//   type: ADD_MESSAGE_WITH_SAGA,
//   payload: { chatId, message }
// })


