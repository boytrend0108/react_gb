import {ADD_MESSAGE, UPDATE_MESSAGES } from "./actions"

const initialState = {
  messagesList: {}
}
/**
 * {
 *   chatId1: [{id, text, author}, {id, text, author}]
 *   chatId2: [{id, text, author}, {id, text, author}, {id, text, author}]
 * }
 * 
 * type messageItem = {
 *  id: string,
 *  text: string,
 *  author: string
 * }
 * 
 * type messageList = {
 *   [string]: messageItem[]
 * }
 */

const messagesReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { chatId, message } = action.payload;
      const oldMessages = state.messagesList[chatId] || [];
      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [chatId]: [
            ...oldMessages,
            {
              id: `${chatId}${oldMessages.length}`,
              ...message,
            },
          ],
        },
      };
    }

    case UPDATE_MESSAGES :
      return {
        ...state, 
        messagesList: {
          ...state.messagesList,
          [action.chatId]: action.messages
        }
      }
    default:
      return state;
  }
}

export default messagesReduser;