import { useState } from 'react';
import ChatItem from './ChatItem';
import '../styles/Chats.scss'
import INITIAL_CHATS from "../constants/common"

const Chats = () => {
const [chats] = useState(INITIAL_CHATS)

  return (
    <div className="chats">
      Chats
      {chats.map((chat, i) => <ChatItem key={i} id={i} />) }
    </div>
  );
}

export default Chats