import JsxExamples from '../JsxExamples';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, world!
        </h1>

        <JsxExamples 
          myFirstProp="Hello text more text here" 
          surname={"Prikhodkina"}
          age={30}

          isLoggedIn  //  isLoggedIn={true}

        />
      </header>
   </div>
  );
}

export default App;
