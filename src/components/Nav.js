import { Link } from 'react-router-dom'

function Nav() {
    return(
        <div class="nav" id="nav-stuff">
            <span class="nav-items"><Link to="/home">Home</Link></span>
            {/* <span class="nav-items"><Link to="/about">About</Link></span> */}
            <span class="nav-items"><Link to="/projects">Projects</Link></span>
        </div>
    )
}

export default Nav