
import './App.css';
import FirstComp from './FirstComp';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        Hello, {props.name}
        <FirstComp />
      </header>
    </div>
  );
}

export default App;
