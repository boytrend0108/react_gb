import firebaseConfig from "../services/firebaseConfig";
import { getDatabase, ref, push, onValue , set, remove } from "firebase/database";
import { ADD_MESSAGE, addMessage, updateMessages } from "../store/messages/actions";
import { chatListUpdate } from '../store/chats/actions'


/* eslint-disable no-unused-vars */
const middleware = (store) => (next) => (action) => {
  const id = action.payload.chatId;
  if (action.type === ADD_MESSAGE && action.payload.message.author !== 'robot' ) {
    setTimeout(() =>  store.dispatch(addMessage(id, {text:"I'm bot from middleware", author: 'robot'})), 2000)
  }

  return next(action);
}

// ========== FireBase ===========

 export const initTrackerWithFB = () => async (dispatch) => {
  const db = getDatabase(firebaseConfig); // достам базу
  const chatRef = ref(db, "/chats");  // полключаемся к чатам

  onValue(chatRef, snapshot => { // следим за изменениями в базе 
    const data = snapshot.val(); // при изменениях в базе забираем данные 
    let chatArr = [];
    if (data) {
      const chatIds = Object.keys(data); 
      chatArr = chatIds.map(item => ({ // cоздаем массив для отображения на сайте
        id: item,
        name: data[item].name
      }));
    }
  
    dispatch(chatListUpdate(chatArr)); // имненяем данные в приложении
  })
};

export const addChatWithFB = (name) => async () => {
  const db = getDatabase(firebaseConfig);
  const chatRef = ref(db, '/chats');
  const newChatRef = push(chatRef);
  set(newChatRef, {name: name}).then(res => {
    console.log('chat added', res)
  })
};

export const deleteChatWithFB = (id) => async () => {
  const db = getDatabase(firebaseConfig);
  const chatRef = ref(db, `/chats/${id}`);
  const messagesRef = ref(db, `/messages/${id}`);
  remove(chatRef).then(res => {
    console.log("Chat removed", res);
  });
  remove(messagesRef).then(res => {
    console.log('Messages deleted', res)
  });
};

export const addMessageWithFB = (chatId, message) => async() => {
  const db = getDatabase(firebaseConfig);
  const messageRef = ref(db, `/messages/${chatId}`);
  const newMessageRef = push(messageRef);
  set(newMessageRef, message).then(res => {
    console.log('message added', res);
  })
};

export const getMessagesByIdWithFB = (chatId) => async (dispatch) => {
  const db = getDatabase(firebaseConfig);
  const messagesRef = ref(db, `/messages/${chatId}`);

  onValue(messagesRef, snapshot => {
    const data = snapshot.val();
    const messages = data && Object.values(data);

    if (messages?.length > 0) {
      dispatch(updateMessages(chatId, messages));
    }

  });

}



export default middleware;