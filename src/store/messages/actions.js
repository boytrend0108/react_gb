/* eslint-disable no-unused-vars */
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA'


// ЗДЕСЬ ЭКШТ ОБЪЕKT
export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {chatId, message}
})


export const addMessageWithSaga = (chatId, message) => ({
  type: ADD_MESSAGE_WITH_SAGA,
  payload: { chatId, message }
})


