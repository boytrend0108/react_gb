 import { useDispatch, useSelector } from 'react-redux';
import ChatItem from './ChatItem';
import '../styles/Chats.scss'
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { addChatWithFB, initTrackerWithFB } from '../middleware/middleware'

const Chats = () => {

const chats = useSelector(state => state.chats.chatList);
const [visible, setVisible] = useState(false);
const [chatName, setChatName] = useState('');
const dispatch = useDispatch();
const {chatId} = useParams();

const closeDialog = () => setVisible(false);
const openDialog = () => setVisible(true);
const handleChatName  = e => setChatName(e.target.value);

const handleSave = () => {
  dispatch(addChatWithFB(chatName))
  closeDialog();
  setChatName('')
}

useEffect(() => {
  dispatch(initTrackerWithFB());
}, [chatId])

  return ( 
    <div className="chats">
      Chats
      {chats.length > 0 
        ? chats.map((chat, i) => <ChatItem key={i} id={i} name={chat.name}/>) 
        : <div>No Chats Yet</div>
      } 

      <Button onClick={openDialog}>Add chat</Button>
      <Dialog open={visible} >
         <DialogTitle>Enter your name</DialogTitle>
         <TextField
           value={chatName}
           onChange={handleChatName}
           placeholder='Chat name'
         />
         <Button onClick={handleSave}>Save chat</Button>
      </Dialog>
    </div>
  );
}

export default Chats