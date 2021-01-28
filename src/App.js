import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Home from './components/Home'
import RecentWork from './components/RecentWork'

function App() {


  return (
  
      <div className="App">
        {/* <Nav /> */}
        <br />
        <Home />
        <RecentWork />
        <Resume />
        <Projects />
        {/* <Route path="/home" component={Home} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route exact path="/projects" component={Projects} /> */}

        <button id="back-to-top">Back to top</button>

      </div>
   
  );
}

export default App;
