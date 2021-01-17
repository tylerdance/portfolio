import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path="/home" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route exact path="/projects" component={Projects} />

        <div>
       
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
