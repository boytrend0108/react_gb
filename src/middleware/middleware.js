import firebaseConfig from "../services/firebaseConfig";
import { getDatabase, ref, push, onValue , set, remove} from "firebase/database";
import { ADD_MESSAGE, addMessage } from "../store/messages/actions";
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
    const data = snapshot.val();
    if (!data) return;
    const chatIds = Object.keys(data); 
    const chatArr = chatIds.map(item => ({ // cоздаем массив для отображения на сайте
      id: item,
      name: data[item].name
    }));

    dispatch(chatListUpdate(chatArr));
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
  })
}


export default middleware;