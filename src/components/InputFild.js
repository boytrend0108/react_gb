import { useState, useRef } from "react";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';



const InputFild = (props) => {
  const InputRef = useRef(0)
  
  let [msg, setMessage] = useState("");
  let [msgCounter, setMsgCounter] = useState(1)
  const {addMsg} = props

  const addMsgToArray = () => {
    addMsg({id: msgCounter, author: "me", text: msg})
    setMsgCounter(oldValue => oldValue + 1)
    setMessage('')
    InputRef.current.focus()
  }

  const setInputValue = (event) => {
    setMessage(event.target.value)
  }

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