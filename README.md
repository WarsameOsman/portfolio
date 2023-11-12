# Warsame Osman's Portfolio

## Description
This is my personal portfolio showcasing my projects, skills, and contact information.

## Usage
Navigate through the different sections to learn more about me and my work.

## Technologies Used
- HTML
- CSS
- JavaScript

## Project Structure
- /index.html
- /styles.css
- /script.js

## Live Portfolio
[Visit My Portfolio](https://warsameosman.github.io/portfolio)

## Contact Information
- Email: warsameos@icloud.com
- GitHub: [WarsameOsman's GitHub Profile](https://github.com/WarsameOsman)

## How to View the Code

- Clone this repository to your local machine.
- Open the `index.html` file in a web browser to view the portfolio.

### HTML
'code' 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <title>Warsame Osman - Portfolio</title>
</head>
<body>

    <nav>
        <div class="branding">Warsame Portfolio</div>
        <ul>
            <li><a href="#bio">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <header>
        <h1>Warsame Osman</h1>
        <p>Web Developer | Student | Arduino Enthusiast </p>
    </header>

    <section id="bio">
        <h2>About Me</h2>
        <p>Hi! I'm Warsame Osman, a high school student with a passion for programming and electronics. I have found joy in creating innovative projects, like an Arduino-controlled car that wirelessly connects to any device via Bluetooth. Another project involves 2D mapping using an ultrasonic sensor and Python code for data analysis. My journey into the world of technology has just begun, and I am excited about the endless possibilities it holds.</p>
    </section>
    <section id="projects">
        <h2>Projects</h2>
            <div class="project-container">
                <div class="project">
                    <h3>Arduino Car Project</h3>
                    <p>This project is an Arduino car that is controlled via an app. It is powered by an Arduino Uno and connects wirelessly to any device through a Bluetooth module</p>
                </div>
                <div class="project">
                    <h3>2D Mapping with Ultrasonic Sensor</h3>
                    <p>This project uses an ultrasonic sensor that is propped up on a servo to give a 180-degree mapping of its surroundings. The data is stored via a CSV file and is then graphed using a Python code I wrote that utilizes the Pandas and Matplotlib libraries.</p>
                </div>
            </div>
        </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Arduino</li>
            <li>Git</li>
            <li>Responsive Design</li>
        </ul>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p><a href="warsameos@icloudcom" target="_blank">Email: warsameos@icloud.com</a></p>
        <p><a href="https://github.com/WarsameOsman" target="_blank">Github: @WarsameOsman</a></p>
    </section>

    <footer>
        <p>&copy; 2023 Warsame Osman | Portfolio</p>
    </footer>

</body>
</html>

### CSS

/* Common styles for all devices */
body {
    background-color: #1e1e1e;
    text-align: center;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
    margin: 0;
    padding: 0 5px; /* Added padding on the sides for better readability */
    box-sizing: border-box;
}

header {
    padding: 50px 20px; /* Increased padding for the header */
    background-color: #1e1e1e;
    color: #fff;
    position: relative; /* Relative position for stacking content below the fixed navbar */
    z-index: 1; /* Ensure the header is above other elements */
}

h1, h2, h3 {
    color: #00bfff;
}

p {
    color: #ccc;
}

a {
    color: #4caf50;
    text-decoration: none;
}

#bio {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 20px;
}

#bio h2 {
    color: #00bfff;
    margin-bottom: 10px;
}

#bio p {
    font-size: 16px;
    line-height: 1.5;
}

#bio img {
    max-width: 100%;
    height: auto;
    margin-top: 15px;
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
}

#projects {
    margin: 0;
}

.project-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.project {
    width: calc(50% - 20px);
    margin-bottom: 20px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #eee;
    cursor: pointer;
    transition: border 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.project:hover {
    border: 2px solid #00bfff;
    background-color: #1e1e1e;
    color: white;
}

.project img {
    max-width: 100%;
    height: auto;
}

#skills ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#skills li {
    background-color: #4caf50;
    color: #1e1e1e;
    padding: 8px 12px;
    margin: 4px;
}

footer {
    background-color: #101018;
    color: #777;
    padding: 20px;
}

footer a {
    color: #4caf50;
}

nav {
    position: fixed; /* Fixed position to make it 'float' */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Ensure the navbar is above other elements */
    background-color: rgba(0, 0, 0, 0.2); /* Grey background color for navbar */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Add a subtle shadow for a floating effect */
    transition: background-color 0.3s ease-in-out; /* Smooth transition for background color change */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

nav .branding {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
}

nav ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav li {
    margin-right: 20px;
}

nav a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
}

nav a:hover {
    border-bottom: 2px solid #00bfff;
}

/* Responsive layout adjustments */
.responsive-layout {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

/* Style for clicked project card */
.project-clicked {
    border: 2px solid #00bfff;
    background-color: #1e1e1e;
    color: white;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
    body {
        overflow-y: scroll; /* Enable vertical scroll on smaller screens */
    }
}


### Javascript

// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Responsive Design Improvements
    window.addEventListener("resize", function () {
      adjustResponsiveDesign();
    });
  
    // Dynamic Content Loading
    const projectCards = document.querySelectorAll(".project");
  
    projectCards.forEach((card) => {
      card.addEventListener("click", function () {
        loadProjectDetails(card);
      });
    });
  });
  
  function adjustResponsiveDesign() {
    const screenWidth = window.innerWidth;
  
    // Example: Adjust layout based on screen width
    if (screenWidth < 600) {
      projectCards.forEach((card) => {
        card.classList.add("responsive-layout");
      });
    } else {
      projectCards.forEach((card) => {
        card.classList.remove("responsive-layout");
      });
    }
  }
  
  function loadProjectDetails(card) {
    const projectName = card.querySelector("h3").innerText;
    alert(`Details for ${projectName}:\nThis is a placeholder for additional project details.`);
  }


