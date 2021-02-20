function RecentWork() {
    return(
        <div id="highlights">
            <div id="recent-work-header">
              
                <h2 >Recent Work</h2>

            </div>
            <div class="lol-div">
                <div id="token-sub-div">
                    <h3 ><a class="recents-header" href="http://token-chat.herokuapp.com/" target="_blank" rel="noreferrer">LoL Ranked Report</a></h3>
                    <p class="description">League of Legends competitive play analysis tool hosting current rankings for the top three tiers.</p>
                    {/* <p class="description">Open an <em>incognito</em> window with a second account to demo the chat functionality.</p> */}
                    {/* <br /> */}
                    <p class="tech-stack"><strong>React.js, Express, Node.js</strong></p>
                    <div class="links-div">
                        <div><a class="projects-info" href="http://lolrankedreport.herokuapp.com/" target="_blank" rel="noreferrer">live site</a></div>
                        <div><a class="projects-info" href="https://github.com/tylerdance/lol-report" target="_blank" rel="noreferrer">front end repo</a> | <a class="projects-info" href="https://github.com/tylerdance/lol-report-backend" target="_blank" rel="noreferrer">back end repo</a></div>
                        <div></div>

                    </div>
                </div>
                <div>
                    <img className="ss" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1613838363/Screen_Shot_2021-02-20_at_11.24.38_AM_zctqgf.png" alt="" />
                </div>
            </div>
            
            <div class="token-div">
                <div id="token-sub-div">
                    <h3 ><a class="recents-header" href="http://token-chat.herokuapp.com/" target="_blank" rel="noreferrer">Token</a></h3>
                    <p class="description">Websocket based messaging app experiment where users can find connections based on their location. Swipe right to send a chat invitation, swipe left to shuffle the database.</p>
                    {/* <p class="description">Open an <em>incognito</em> window with a second account to demo the chat functionality.</p> */}
                    {/* <br /> */}
                    <p class="tech-stack"><strong>React.js, MongoDB, Express, Node.js</strong></p>
                    <div class="links-div">
                        <div><a class="projects-info" href="http://token-chat.herokuapp.com/" target="_blank" rel="noreferrer">live site</a></div>
                        <div><a class="projects-info" href="https://github.com/tylerdance/SEI-project4-frontend" target="_blank" rel="noreferrer">front end repo</a> | <a class="projects-info" href="https://github.com/tylerdance/SEI-project4-backend" target="_blank" rel="noreferrer">back end repo</a></div>
                        <div></div>

                    </div>
                </div>
                <div>
                    <img className="ss" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1612022377/Screen_Shot_2021-01-30_at_10.58.09_AM_xni1d0.png" alt="" />
                </div>
            </div>

            <div class="tab-sensei-div">
                <div id="tabsensei-sub-div">
                    <h3><a class="recents-header" href="http://tabsensei.herokuapp.com/" target="_blank" rel="noreferrer">Tab Sensei</a></h3>
                    {/* <div>
                        <iframe class="vid" src="https://www.youtube.com/embed/Fa00WE9fpC4?list=PLfTlLh3QA5Fk8NAIQZlEmxG_mL9GsJbYK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> */}
                    <p class="description">Guitar tab search engine and social platform. Users can search for tabs, comment, save tabs to their profile, and play along to beats from the beat bank at any tempo.</p>
                    {/* <br /> */}
                    <p class="tech-stack"><strong>React.js, MongoDB, Express, Node.js</strong></p>
                    <div class="links-div">
                        <div><a class="projects-info" href="http://tabsensei.herokuapp.com/" target="_blank" rel="noreferrer">live site</a></div>
                        <div><a class="projects-info" href="https://github.com/tylerdance/tab-sensei-frontend" target="_blank" rel="noreferrer">front end repo</a> | <a class="projects-info" href="https://github.com/tylerdance/tab-sensei-backend" target="_blank" rel="noreferrer">back end repo</a></div>
                        <div></div>

                    </div>
                </div>
                <div>
                    <img className="ss" src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1612022956/Screen_Shot_2021-01-30_at_11.08.56_AM_sjxo4y.png" alt="" />
                </div>
            </div>

            {/* <div class="trail-hunter-div">
                <div>
                    <h3><a href="https://off-road-trail-finder.herokuapp.com/" target="_blank">Trail Hunter</a></h3>
                <div>
                    <iframe class="vid" src="https://www.youtube.com/embed/Fa00WE9fpC4?list=PLfTlLh3QA5Fk8NAIQZlEmxG_mL9GsJbYK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    <p class="description">Off road bike trail search engine that allows users to search for bike trails based ontheir location and save trails to their profile.</p>
                    <p class="description"><strong>Javascript, Express</strong></p>
                    <div><a href="https://off-road-trail-finder.herokuapp.com/" target="_blank">Live site</a></div>
                    <div><a href="https://github.com/tylerdance/trail-finder" target="_blank">Github repo</a></div>
                </div>
            </div> */}

            {/* <div class="asteroids-div">
                <div>
                    <h3><a href="https://tylerdance.github.io/" target="_blank">Asteroids</a></h3>
                <div>
                    <iframe class="vid" src="https://www.youtube.com/embed/Fa00WE9fpC4?list=PLfTlLh3QA5Fk8NAIQZlEmxG_mL9GsJbYK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    <p class="description">Single player mini shooter game. Asteroids spawn randomly from all directions. See how long you can last.</p>
                    <p class="description"><strong>Javascript</strong></p>
                    <div><a href="https://tylerdance.github.io/" target="_blank">Live site</a></div>
                    <div><a href="https://github.com/tylerdance/Asteroids-game" target="_blank">Github repo</a></div>
                </div>
            </div> */}
        </div>
    )
}

export default RecentWork;