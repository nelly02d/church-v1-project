import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavigationBar.js'
import Home from './components/Home.js';
import Mass from './components/Mass';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Mass />
      <Contact />
    </div>
  );
}

export default App;
