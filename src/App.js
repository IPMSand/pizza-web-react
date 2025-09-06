import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
   </Router>
      
    </div>
  );
}

export default App;


// < src={logo} className="App-logo" alt="logo" />
/**
 * <Navbar />
      <header className="App-header">
     <h1>Hello My React Set Up! meow</h1>
      </header>
 */