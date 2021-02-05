function Projects() {
    return(
        <div id="projects-div">
            <h2 id="projects-header">Projects</h2>
            <div class="projects">
                <div id="projects-margin">
                    <div>
                        <a href="http://token-chat.herokuapp.com/" target="_blank" rel="noreferrer"><img class="thumbnail" src="https://archive.nyafuu.org/foolfuuka/boards/c/image/1514/98/1514986417306.jpg" alt=""/></a>
                        <p class="projects-info"><a class="projects-info" href="http://token-chat.herokuapp.com/" target="_blank" rel="noreferrer">Token</a></p>
                        <p class="projects-info"><a class="projects-info" href="https://github.com/tylerdance/SEI-project4-frontend" target="_blank" rel="noreferrer">Frontend Github repo</a></p>
                        <p class="projects-info"><a class="projects-info" href="https://github.com/tylerdance/SEI-project4-backend" target="_blank" rel="noreferrer">Backend Github repo</a></p>
                    </div>

                    <div>
                        {/* <p class="project-name">Tab Sensei</p> */}
                        <a href="http://tabsensei.herokuapp.com/" target="_blank" rel="noreferrer"><img class="thumbnail" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1610833402/anime-girl-square2_fljonn.png" alt=""/></a>
                        <p class="projects-info"><a class="projects-info" href="http://tabsensei.herokuapp.com/" target="_blank" rel="noreferrer">Tab Sensei</a></p>
                        <p class="projects-info"><a class="projects-info" href="https://github.com/tylerdance/tab-sensei-frontend" target="_blank" rel="noreferrer">Frontend Github repo</a></p>
                        <p class="projects-info"><a class="projects-info" href="https://github.com/tylerdance/tab-sensei-backend" target="_blank" rel="noreferrer">Backend Github repo</a></p>
                    </div>
                    <div>
                        {/* <p class="project-name">Trail Hunter</p> */}
                        <a href="https://off-road-trail-finder.herokuapp.com/" target="_blank" rel="noreferrer"><img class="thumbnail" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1610835107/squamishcrop_oswwrf.jpg" alt="" /></a>
                        <p class="projects-info"><a class="projects-info" href="http://off-road-trail-finder.herokuapp.com/" target="_blank" rel="noreferrer">Trail Hunter</a></p>
                        <p class="projects-info"><a class="projects-info" href="https://github.com/tylerdance/trail-finder" target="_blank" rel="noreferrer">Github repo</a></p>
                    </div>

                    <div id="asteroids-pic">
                        {/* <p class="project-name">Asteroids</p> */}
                        <a href="https://tylerdance.github.io/Asteroids-game/" target="_blank" rel="noreferrer"><img class="thumbnail" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1610834682/asteroids3crop_gzgtgh.jpg" alt="" /></a>
                        <p class="projects-info"><a class="projects-info" href="http://tylerdance.github.io/Asteroids-game/" target="_blank" rel="noreferrer">Asteroids</a></p>
                        <p class="projects-info"><a class="projects-info" href="https://github.com/tylerdance/Asteroids-game" target="_blank" rel="noreferrer">Github repo</a></p>
                    </div>

                </div>
            </div>    
        </div>
    )
}

export default Projects