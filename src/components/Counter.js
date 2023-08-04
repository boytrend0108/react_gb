import { useEffect } from "react"

const Counter = (props) => {
  let {value} = props

  useEffect(() => {
    return () => console.log("unmout")
  }, [])


  return <div>Count: {value}</div>
}

export default Counter