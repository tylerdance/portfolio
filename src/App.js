import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Projects from './components/Projects'
import About from './components/About'

const projectList = [
  {
    name: 'Asteroids',
    description: 'Single player mini shooter',
    deployment: 'https://tylerdance.github.io/',
    repo: 'https://github.com/tylerdance/Asteroids-game',
  },
  {
    name: 'Trail Hunter',
    description: 'Off road bike trail search engine',
    deployment: 'https://off-road-trail-finder.herokuapp.com/',
    repo: 'https://github.com/tylerdance/trail-finder'
  },
  {
    name: 'Tab Sensei',
    description: 'Guitar tablature social platform',
    deployment: 'http://tabsensei.herokuapp.com/',
    repo: 'Frontend: https://github.com/tylerdance/tab-sensei-frontend Backend: https://github.com/tylerdance/tab-sensei-backend',
  }
]
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <h1>Tyler Dance</h1>
        <h3>Fullstack web developer</h3>
      </div>
    </BrowserRouter>
  );
}

export default App;
