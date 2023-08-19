/* eslint-disable no-unused-vars */
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'


// ЗДЕСЬ ЭКШТ ОБЪЕKT
export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {chatId, message}
})

