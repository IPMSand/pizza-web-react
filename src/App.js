import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
     <h1>Hello My React Set Up! meow</h1>
      </header>
    </div>
  );
}

export default App;
// < src={logo} className="App-logo" alt="logo" />