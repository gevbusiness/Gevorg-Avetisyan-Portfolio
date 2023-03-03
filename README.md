# gevorg-avetisyan-portfolio

this is my old code i use this area to keep whats needed, ignore for now

  <header>
        <div>
            <h1>
                <span class="g">G</span>evorg
                <span class="g">A</span>vetisyan
            </h1>
        </div>
        <nav>
            <a href="#about-me">About Me</a>
            &nbsp;
            <a href="#work">Work</a>
            &nbsp;
            <a href="#contact">Contact</a>
            &nbsp;
            <a href="#resume">Resume</a>
        </nav>
        <div class="me">
            <p class="coding-journey">Coding Journey</p>
        </div>
    </header>
 main
 <section id="about-me" class="about-me">
                <h2>About Me</h2>
            <div class="about-me-p">
                <p> My name is Gevorg Avetisyan. <br>
                    I am a 29 year old aspiring Full Stack Web Developer. <br>
                    I study at UCLA Extensions program.
                </p>
            </div>
        </section>
        <section id="work">
            <h2>Work</h2>
            <div class="work-box-first">
                <img src="/assets/images/me-me.jpeg">
            </div>
            <div class="work-box-second">
                <img src="/assets/images/cool-paper.jpeg">
                <img src="/assets/images/cool-paper.jpeg">
            </div>
            <div class="work-box-third">
                <img src="/assets/images/cool-paper.jpeg">
                <img src="/assets/images/cool-paper.jpeg">
            </div>
        </section>
        <section id="contact" class="contact-me">
            <div>
                <h2>Contact</h2>
                <p>Gevorg Avetisyan 818-999-999 million@yahoo.com</p>
            </div>
        </section>

       <<<<<<CSS>>>>>>

        * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    background-color: black;
}

header h1 {
    font-size: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    padding-top: 20px;
    padding-left: 20px;
}

.g {
    color: red;
}

a {
    color: red;
    text-decoration: none;
}

a:hover {
    background-color: white;
}

nav {
    position: relative;
    bottom: 40px;
    padding-right: 20px;
    text-align: right;
    font-size: 25px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.about-me {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 20px;
}

.about-me-p {
    display: flex;
    justify-content: center;
}

h2 {
    font-size: 50px;
    color: red;
}

.me {
    height: 200px;
    width: 100%;
    padding-bottom: 30px;
    background-image: url(/assets/images/cool-white.jpeg);
}

.coding-journey {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 30px;
    font-weight: bolder;
    font-style: oblique;
    color: black;
    text-align: right;
    padding-right: 20px;
    padding-top: 10px;
}

.work-box-first {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 10px 10px;
}

.work-box-first img {
    border: red;
    border-style: outset;
    width: 1220px;
    height: 600px;
}

.work-box-second {
    display: flex;
    flex-direction:row;
    gap: 20px;
    padding: 10px 10px 10px 10px;
}

.work-box-second img {
    border: red;
    border-style: outset;
    width: 600px;
    height: 200px;
}

.work-box-third {
    display: flex;
    flex-direction:row;
    gap: 20px;
    padding: 10px 10px 10px 10px;
}

.work-box-third img {
    border: red;
    border-style: outset;
    width: 600px;
    height: 200px;
}
  
a:hover {
    background-color: white;
}

.contact-me p {
 color: white;
 font-size: 25px;
 display: flex;
 justify-content: center;
}
