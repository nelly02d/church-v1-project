import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavigationBar.js'
import Home from './components/Home.js';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
