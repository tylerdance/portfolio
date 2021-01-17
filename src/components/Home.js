function Home() {
    return(
        <div id="home-div">
            <h1 id="my-name-home">Tyler Dance</h1>
            {/* <img id="prof-pic" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1610837920/portfolio-pic_aatqcg.png"></img> */}
            <p id="bio">Fullstack web developer & audio engineer</p>
            <p id="links"><a id="github" href="https://github.com/tylerdance" target="_blank">Github</a> | <a id="linkedin" href="https://www.linkedin.com/in/tylerdance/" target="_blank">LinkedIn</a></p>
            <p id="contact">tylerdance12@gmail.com | Philadephia, PA</p>
            <br />
            {/* <br /> */}

            <div>
                {/* <h3>My Projects</h3> */}
                <div class="tab-sensei-div">
                    <div>
                        <h3><a href="http://tabsensei.herokuapp.com/" target="_blank">Tab Sensei</a></h3>
                        <p class="description">Guitar tab search engine and social platform that allows users to search for tabs, save tabs, comment, and play along to beats from the beat bank at any tempo.</p>
                        
                        <div><a href="http://tabsensei.herokuapp.com/" target="_blank">Live site</a></div>
                        <div><a href="https://github.com/tylerdance/tab-sensei-frontend" target="_blank">Frontend Github repo</a></div>
                        <div><a href="https://github.com/tylerdance/tab-sensei-backend" target="_blank">Backend Github repo</a></div>
                    </div>
                    <div>
                        <iframe class="vid" width="400" height="250" src="https://www.youtube.com/embed/Fa00WE9fpC4?list=PLfTlLh3QA5Fk8NAIQZlEmxG_mL9GsJbYK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="trail-hunter-div">
                    <div>
                        <h3><a href="https://off-road-trail-finder.herokuapp.com/" target="_blank">Trail Hunter</a></h3>
                        <p class="description">Off road bike trail search engine that allows users to search for bike trails based ontheir location and save trails to their profile.</p>
                        <div><a href="https://off-road-trail-finder.herokuapp.com/" target="_blank">Live site</a></div>
                        <div><a href="https://github.com/tylerdance/trail-finder" target="_blank">Github repo</a></div>
                    </div>
                    <div>
                        <iframe class="vid" width="400" height="250" src="https://www.youtube.com/embed/Fa00WE9fpC4?list=PLfTlLh3QA5Fk8NAIQZlEmxG_mL9GsJbYK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="asteroids-div">
                    <div>
                        <h3><a href="https://tylerdance.github.io/" target="_blank">Asteroids</a></h3>
                        <p class="description">Single player mini shooter game. Asteroids spawn randomly from all directions. See how long you can last.</p>
                        <div><a href="https://tylerdance.github.io/" target="_blank">Live site</a></div>
                        <div><a href="https://github.com/tylerdance/Asteroids-game" target="_blank">Github repo</a></div>
                    </div>
                    <div>
                        <iframe class="vid" width="400" height="250" src="https://www.youtube.com/embed/Fa00WE9fpC4?list=PLfTlLh3QA5Fk8NAIQZlEmxG_mL9GsJbYK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <br />
            <hr />
        </div>
    )
}

export default Home