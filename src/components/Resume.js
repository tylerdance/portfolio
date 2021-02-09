function Resume() {
    return(
        <div id="resume-parent-div">
            <h2 id="resume-header">Experience</h2>
            <div id="resume-sub-div">
                <div class="resume-div">
                    {/* <h3>Experience</h3> */}
                    {/* <hr /> */}
                    <p class="resume"><strong>Software Engineering Immersive Program</strong>  at General Assembly (October 2020 - January 2021)</p>
                        <li class="resume">13 weeks of fullstack software development training in some of the most common technologies currently being used in the industry</li>
                        <li class="resume">Javascript, React, Python, Django, MongoDB, Express, Node.js, SQL, PostreSQL, HTML, CSS, Heroku, Github</li>
                        <li class="resume">Experience working on small development teams and as a project manager</li>
                    {/* <br /> */}
                    <hr />
                    <p class="resume"><strong>Audio/Visual Technician</strong> at PSAV (June 2019 - March 2020)</p>
                        <li class="resume">Corporate conference technical support</li>
                        <li class="resume">Live audio system operation for conferences of up to 200 people</li>
                        <li class="resume">Long throw projection tower assembly</li>
                    <hr />
                    <p class="resume"><strong>Audio Engineer</strong> freelance (2012 - present)</p>
                        <li class="resume">9 years of multi-track mixing, mastering, and music production</li>
                        <li class="resume">Ableton Live, Pro Tools, Izotope Ozone</li>
                    <hr />
                    <p class="resume"><strong>Music Teacher</strong> at Valotta Studios (May 2018 - May 2019)</p>
                        <li class="resume">Private lessons with 15-20 weekly students of all ages</li>
                        <li class="resume">Taught advanced and fundamental guitar techniques</li>
                        {/* <li class="resume">Recital preparation</li> */}
                    {/* <hr /> */}
                    {/* <br />
                    <p class="resume"><strong>Concert Board Productions Chair</strong> at Ithaca College Bureau of Concerts (April 2014 - December 2016)</p>
                        <li class="resume">Contract reviewal for equipment reservations</li>
                        <li class="resume">Liason between audio/visual team and concert board</li> */}
                </div>
                    <h2 id="education-header">Education</h2>
                <div class="resume-div2">
                    <p class="resume"><strong>Software Engineering Immersive Program</strong> at General Assembly 2021</p>
                    {/* <br /> */}
                    <p class="resume"><strong>B.S. Audio Production</strong> in TV/Radio at Ithaca College 2016</p>

                </div>
            </div>
            
            {/* <button id="resume-btn" class="btn btn-dark" >
                <a href="assets/tylerdance-resume.pdf" download>Download Resume</a>pm        
            </button> */}

            <div class="resume-btn">
                {/* <a id="resume-btn" href="https://docs.google.com/document/d/e/2PACX-1vRo9c981fgn-NRKae_eBdAVCxAVLLD0_cAIuidOyNFpuEl5ggWTnc0LPj5vCoPTZfyGhbaDmvb2VzHg/pub" target="_blank"><button class="btn btn-dark">Full Resume</button></a> */}
                {/* <a id="resume-btn" href="C:/assets/tylerdance-resume.pdf" download><button class="btn btn-dark">Full Resume</button></a> */}
                <a href="https://docdro.id/VYfdb7q" target="_blank" rel="noreferrer"><button class="btn btn-dark">Download Resume</button></a>
            </div>
        </div>
    )
}

export default Resume;