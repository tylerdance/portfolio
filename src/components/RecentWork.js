function RecentWork() {
    return(
        <div id="highlights">
            <div id="recent-work-header">
              
                <h2 >Recent Work</h2>

            </div>
            <div class="token-div">
                <div>
                    <h3><a href="http://token-chat.herokuapp.com/" target="_blank" rel="noreferrer">Token</a></h3>
                    <p class="description">Websocket based chat app experiment that allows users to find connections based on their location. Swipe right to send a chat invitation to that user, swipe left to shuffle the database.</p>
                    <p class="description">Open an <em>incognito</em> window with a second account to demo the chat functionality.</p>
                    <p class="description"><strong>React.js, MongoDB, Express, Node</strong></p>
                    <div><a href="http://token-chat.herokuapp.com/" target="_blank" rel="noreferrer">Live site</a></div>
                    <div><a href="https://github.com/tylerdance/SEI-project4-frontend" target="_blank" rel="noreferrer">Frontend Github repo</a></div>
                    <div><a href="https://github.com/tylerdance/SEI-project4-backend" target="_blank" rel="noreferrer">Backend Github repo</a></div>
                </div>
            </div>

            <div class="tab-sensei-div">
                <div>
                    <h3><a href="http://tabsensei.herokuapp.com/" target="_blank" rel="noreferrer">Tab Sensei</a></h3>
                {/* <div>
                    <iframe class="vid" src="https://www.youtube.com/embed/Fa00WE9fpC4?list=PLfTlLh3QA5Fk8NAIQZlEmxG_mL9GsJbYK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> */}
                    <p class="description">Guitar tab search engine and social platform that allows users to search for tabs, save tabs, comment, and play along to beats from the beat bank at any tempo.</p>
                    <p class="description"><strong>React.js, MongoDB, Express, Node</strong></p>
                    <div><a href="http://tabsensei.herokuapp.com/" target="_blank" rel="noreferrer">Live site</a></div>
                    <div><a href="https://github.com/tylerdance/tab-sensei-frontend" target="_blank" rel="noreferrer">Frontend Github repo</a></div>
                    <div><a href="https://github.com/tylerdance/tab-sensei-backend" target="_blank" rel="noreferrer">Backend Github repo</a></div>
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