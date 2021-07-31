import logo from './GitHub-logo.png';
import './App.css';
import Profilefinder from './Profilefinder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

        <Profilefinder/>
    </div>
  );
}

export default App;
