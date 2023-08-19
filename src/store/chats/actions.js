export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DEL_CHAT = 'CHATS::DEL_CHAT';

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name
}) 