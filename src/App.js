
import './App.scss';
import FirstComp from './FirstComp';
import SecondComp from './SecondComp';
import Messages from './Messages';
import {useEffect, useState} from "react"
import Button from './components/Button';
import Counter from './components/Counter';


function App(props) {
  const left = "50px";
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    setCounter((previous) => previous = previous + 1)
  }

  useEffect(() => {
    console.log('useEffect')
  }, [])

  return (
    <div className="App" style={{ paddingTop : "30px", paddingLeft: left}}>
      <header className={`App-header ${props.showRed ? "red-header" : "blue-header"}`} >
        Hello, {props.name}
        <FirstComp />
        <SecondComp />
        <br/>

        <Button addCount={addCount}/>
        {counter < 2 && <Counter value={counter}/>}

         {/* Условный рендеринг */}
        {counter < 3 && <Messages msg={counter} />}

       
      </header>
    </div>
  );
}

export default App;
