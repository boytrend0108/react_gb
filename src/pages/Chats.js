import { useState, useEffect } from "react"
import TextMsg from "../components/TextMsg"
import InputFild from "../components/InputFild"
import ChatsComp from "../components/ChatsComp"
import INITIAL_CHATS from "../constants/common.js"
import { useParams } from "react-router-dom"

const Chats = () => {
  const {id} = useParams()

  const [messages, setMessages] = useState([...INITIAL_CHATS[id]?.messages || []])

  const addMsgToArray = (msg) => {
    setMessages(oldArr => [...oldArr, msg])
  }

  useEffect(() => {
    if(!messages.length) return
    if (messages[messages.length - 1].author === "me") {
      const botMsg = { 
        id: messages[messages.length - 1].id + Date.now(),
        author: "robot",
        text: "hhh-jjj-jjj"
      }
      setTimeout(() => {setMessages(oldArr => [...oldArr, botMsg])}, 1000)
    }
  }, [messages])

  useEffect(() => {
    setMessages(INITIAL_CHATS[id]?.messages)
  }, [id])


  return (
   <div className="chatsComp">
     <h2>Chats</h2>
     <main className='Main'>
      <ChatsComp />
      <div className="messagesBox">
        {!INITIAL_CHATS[id] && <h3>Chat not found</h3>}
        {messages.map((el) => (
          <TextMsg msg={el} key={el.id} />
        ))}
      </div>
      </main>

      <InputFild addMsg={addMsgToArray} />

   </div>
   )
}

export default Chats