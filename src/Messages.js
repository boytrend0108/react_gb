import { useEffect, useRef, useState } from "react"

const Messages = (props) => {

  let [value, setValue] = useState('')

  const inputRef = useRef()


  const setInputValue = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus()
    }
    return () => {
      console.log("unmounted");
    }
  }, [])
  

return (
  <div className="Messages">
    <p>counter: {props.msg} </p>
    <br />

    <input ref={inputRef} type="text" value={value} onChange={setInputValue} />

    <p>{props.msg}</p>
  </div>
  )
}

export default Messages