function Home() {
    return(
        <div>
          <h1 id="my-name-home">Tyler Dance</h1>
          {/* <img id="prof-pic" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1610837920/portfolio-pic_aatqcg.png"></img> */}
          <br />
          <p id="webdev">fullstack web dev & audio engineer | <a id="linkedin" href="https://www.linkedin.com/in/tylerdance/" target="_blank">LinkedIn</a></p>
          
        
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

export default Home