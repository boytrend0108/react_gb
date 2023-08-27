import TextMsg from "../components/TextMsg";
import InputFild from "../components/InputFild";
import ChatsComp from "../components/ChatsComp";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMessagesByIdWithFB } from '../middleware/middleware';


const Chats = () => {
  const { id } = useParams(); // получае id из роута
  const messages = useSelector((state) => state.messages.messagesList[id] || []);
  const chats = useSelector(state => state.chats.chatList);
  const dispatch = useDispatch();

// при изменении chatId подгружаем из FB cообщения.
  useEffect(() => {
    dispatch(getMessagesByIdWithFB(id))
  }, [id]);

  return (
    <div className="chatsComp">
      <h2>{chats[id]?.name || 'Select chat' }</h2>
      <main className="Main">
        <ChatsComp />
        <div className="messagesBox">
          {!chats.length && <h3>There is no chats</h3>}
          {chats.length > 0 &&
            messages.map((el, i) => (
              <TextMsg msg={el} key={i} />
            ))}
        </div>
      </main> 

      <InputFild />
    </div>
  );
};

export default Chats