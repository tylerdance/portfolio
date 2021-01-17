function Home() {
    return(
        <div>
            <h1 id="my-name-home">Tyler Dance</h1>
            <img id="prof-pic" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1610837920/portfolio-pic_aatqcg.png"></img>
            <p id="webdev">Fullstack web developer & audio engineer</p>
            <p id="links"><a href="https://github.com/tylerdance" target="_blank">Github</a> | <a id="linkedin" href="https://www.linkedin.com/in/tylerdance/" target="_blank">LinkedIn</a></p>
            <p id="contact">tylerdance12@gmail.com | Philadephia, PA</p>
            <br />
            {/* <br /> */}

            <div>
                {/* <h3>My Projects</h3> */}
                <div class="tab-sensei-div">
                    <div>
                        <h3><a href="http://tabsensei.herokuapp.com/" target="_blank">Tab Sensei</a></h3>
                        <p class="description">Guitar tab search engine and social platform that allows users to search for tabs, save tabs, comment, and play along to beats from the beat bank at any tempo</p>
                        
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

            <h2 id="resume-header">Resume</h2>
            <div id="resume-div">
                <div>
                    <h3>Experience</h3>
                    <p class="resume"><strong>Software Engineering Immersive Program</strong>  at General Assembly (October 2020 - January 2021)</p>
                        <li class="resume">Javascript, React, Express, Node.js, SQL, PostreSQL, MongoDB</li>
                        <li class="resume">Python, Django</li>
                    <br />
                    <p class="resume"><strong>Audio/Visual Technician</strong> at PSAV (June 2019 - March 2020)</p>
                        <li class="resume">Corporate conference technical support</li>
                        <li class="resume">Specialized in audio system operation with Soundcraft Expression console</li>
                        <li class="resume">Long throw projection tower assembly</li>
                    <br />
                    <p class="resume"><strong>Music Teacher</strong> at Valotta Studios (May 2018 - May 2019)</p>
                        <li class="resume">Private lessons with 15-20 weekly students of all ages</li>
                        <li class="resume">Taught advanced and fundamental guitar techniques</li>
                        <li class="resume">Recital preparation</li>
                        <br />
                    <p class="resume"><strong>Audio Engineer</strong> freelance (2012 - present)</p>
                        <li class="resume">Multi track mixing in Ableton Live and Pro Tools</li>
                        <li class="resume">Mastering with Izotope Ozone</li>
                    <br />
                    <p class="resume"><strong>Concert Board Productions Chair</strong> at Ithaca College Bureau of Concerts (April 2014 - December 2016)</p>
                        <li class="resume">Contract reviewal for equipment reservations</li>
                        <li class="resume">Liason between audio/visual team and concert board</li>
                    <br />
                    <br />
                    <h3>Education</h3>
                    <p class="resume"><strong>Software Engineering Immersive Program</strong> at General Assembly (October 2020 - January 2021)</p>
                    <p class="resume"><strong>B.S. Audio Production</strong> in TV/Radio at Ithaca College (2012 - 2016)</p>
                </div>
                
            </div>
        </div>
    )
}

export default Home