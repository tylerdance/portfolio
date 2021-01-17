import { Link } from 'react-router-dom'


function Projects() {
    return(
        <div>
            <h2 id="projects-header">Projects</h2>
            <div class="projects">
                <div>
                    <p class="project-name">Tab Sensei</p>
                    <a href="http://tabsensei.herokuapp.com/" target="_blank"><img class="thumbnail" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1610833402/anime-girl-square2_fljonn.png" /></a>
                </div>
                <div>
                    <p class="project-name">Trail Hunter</p>
                    <a href="https://off-road-trail-finder.herokuapp.com/" target="_blank"><img class="thumbnail" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1610835107/squamishcrop_oswwrf.jpg"></img></a>
                </div>
                <div>
                    <p class="project-name">Asteroids</p>
                    <a href="https://tylerdance.github.io/" target="_blank"><img class="thumbnail" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1610834682/asteroids3crop_gzgtgh.jpg"></img></a>
                </div>
            </div>    
        </div>
    )
}

export default Projects