function About() {
    return(
        <div id="about-parent-div">
            <h2 id="about-header">About</h2>
            <div class="about">
                <p>During a 13 week sprint of full time software development at General Assembly, I developed three fullstack applications using React.js, MongoDB, SQL, Express, and Node, and one mini game in Javascript. Exposure to such a fast paced environment reassured me of my potential to learn new technologies quickly and effectively while maintaining an appetite for even more challenging problems. The independent nature of the work was rewarding, but I learned more from the group projects with small production teams. Now having a good understanding of project management in terms of version control, merge conflicts, and time management, I’m looking forward to bringing these skills to my next software engineering role.</p>
                <br />
                <p>Currently, I am developing a ranked player analysis tool for League of Legends competitive play. Users will be able to view current leaderboards sorted by win/loss ratio or League points. React is used on the front end, and Express on the back end to make the Axios requests and avoid CORS errors. This project is definitely a good test of my available tools for sorting and rendering information from an API and using a backend to facilitate requests. Repo links are below under LoL Ranked Report.</p>
            </div>
        </div>
    )
}

export default About