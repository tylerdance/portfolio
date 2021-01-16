import { Link } from 'react-router-dom'

function Nav() {
    return(
        <div>
            <span><Link to="/about">About</Link></span>
            <span><Link to="/projects">Projects</Link></span>
        </div>
    )
}

export default Nav