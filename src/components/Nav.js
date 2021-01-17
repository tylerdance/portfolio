import { Link } from 'react-router-dom'

function Nav() {
    return(
        <div class="nav" id="nav-stuff">
            <span class="nav-items"><Link to="/">Home</Link></span>
            {/* <span class="nav-items"><Link to="/about">About</Link></span> */}
            <span class="nav-items"><Link to="/">Resume</Link></span>
            <span class="nav-items"><Link to="/">Projects</Link></span>
        </div>
    )
}

export default Nav