import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavigationBar.js'
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
