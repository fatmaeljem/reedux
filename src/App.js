import './App.css';
import Add from './Components/Add';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
      <h2>TO-DO LIST</h2>
      <Add/>
     <TodoList/>
    </div>
  );
}

export default App;