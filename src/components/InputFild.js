import { useState, useRef, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessageWithFB } from '../middleware/middleware'


const InputFild = () => {
  const InputRef = useRef(0) // получаем елемент
  const {id} = useParams();
  const name = useSelector(state => state.profile.name);
  const messages = useSelector(state => state.messages.messagesList[id])

  const dispatch = useDispatch();
  let [msg, setMessage] = useState("");


  const addMsgToArray = () => {
    if (msg === '') return;
    dispatch(addMessageWithFB(id, {text:msg, author: name}))
    setMessage('')
    InputRef.current.focus()
  }

  const setInputValue = (event) => {
    setMessage(event.target.value)
  }

  useEffect(()=> {
    if (!messages || !messages.length) return
    if (messages[messages.length - 1].author !== 'robot') {
      setTimeout(() =>  dispatch(addMessageWithFB(id, {text:"I'm bot", author: 'robot'})), 1000)
    }
 }, [messages])

  return (
    <div className="inputFild">
      <TextField 
        inputRef={InputRef}
        type="text" 
        placeholder="input text here" 
        value={msg} 
        onChange={setInputValue}
        id="standard-basic" 
        label="Standard" 
        variant="standard"
        autoFocus
        fullWidth
      />

    <Fab color="primary" aria-label="add" onClick={addMsgToArray}>
      <SendIcon />
    </Fab>
    
    </div>
  )
}

export default InputFild