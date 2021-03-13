import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom'
// import Nav from './components/Nav'
import Projects from './components/Projects'
import Resume from './components/Resume'
import About from './components/About'
import Home from './components/Home'
import RecentWork from './components/RecentWork'
import ShowResume from './components/ShowResume';

function App() {
  
  // const topFunction = () => {
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // }

  return (
  
      <div className="App">
        {/* <Nav /> */}
        <Home />
        <RecentWork />
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Resume />
        <ShowResume /> */}
        {/* <Route path="/home" component={Home} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route exact path="/projects" component={Projects} /> */}

        <div id="back-to-top">
        {/* <button  class="btn btn-dark" onClick={topFunction}>Back to top</button> */}

        </div>

      </div>
   
  );
}

export default App;
