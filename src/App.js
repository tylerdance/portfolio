import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Home from './components/Home'

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Home />
        <Resume />
        <Projects />
        {/* <Route path="/home" component={Home} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route exact path="/projects" component={Projects} /> */}

        <div>
       
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
