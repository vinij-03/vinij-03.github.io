import React from 'react';
import Layout from '../../Layout';

const htmlContent = `
<style>
    .mdfile {
        color: white;
    }
    .mdfile h2 {
        margin-top: 20px;
    }
    .mdfile hr {
        border: 0;
        height: 1px;
        background: #333;
        background-image: linear-gradient(to right, #ccc, #333, #ccc);
        margin: 20px 0;
    }
    .mdfile p, .mdfile ul, .mdfile ol {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .mdfile ul, .mdfile ol {
        padding-left: 20px;
        list-style-type: none; /* Remove default bullets */
    }
    .mdfile ul li:before {
        content: ">"; /* Add ">" before each list item */
        margin-right: 5px;
        color: #ccc; /* Customize the color of ">" */
    }
    .mdfile ol li:before {
        content: ">"; /* Add ">" before each list item */
        margin-right: 5px;
        color: #ccc; /* Customize the color of ">" */
    }
    .mdfile ul li, .mdfile ol li {
        margin-bottom: 5px;
    }
    .mdfile a {
        text-decoration: none; /* Remove underline by default */
        color: white;
    }
    .mdfile a:hover {
        text-decoration: underline; /* Underline on hover */
    }
    .mdfile span {
        margin-left: 10px;
    }
</style>

<div class="mdfile">
    <h2 id="experience">Experience</h2>
    <hr>
    <p><strong><a href="https://twinverse.in/">Twinverse Technology</a></strong> <span style="float: right;">Dec. 2022 - Present</span><br><em>Co-Founder and Web XR Developer</em> <span style="float: right;">React, Three.js, Babylon.js, MongoDB</span></p>
    <ul>
        <li>Enhanced <strong>Web VR</strong> services to showcase architectural projects using <strong>ThreeJs</strong> and <strong>R3F</strong>.</li>
        <li>Successfully led a team of <strong>9 individuals</strong> across <strong>7 client projects</strong>.</li>
        <li>Handled all <strong>copywriting responsibilities</strong> for the firm.</li>
        <li>Acted as the firm's representative at <strong>4 international events</strong> and <strong>6 investor pitches</strong>.</li>
        <li>Secured a total of <strong>INR 9 Lakh</strong> in funding for the firm within <strong>one year</strong>.</li>
    </ul>
    <hr>
    <h2 id="projects">Projects</h2>
    <hr>
    <p><strong><a href="https://github.com/vinij-03/Chat-App">My CHAT</a></strong> <span style="float: right;">Aug. 2023</span><br><em>Personalized Web Chatting Application</em> <span style="float: right;">React, NodeJs, ExpressJs, MongoDB, Tailwind, Git</span></p>
    <ul>
        <li>This Fullstack chat app made for <strong>realtime communication and data storage and file sharing</strong>.</li>
        <li><strong>Architected Scalable Backend</strong> infrastructure using <strong>NodeJs</strong>.</li>
        <li>Created <strong>CI/CD Pipeline</strong> using <strong>Github Actions</strong>.</li>
        <li>Constructed <strong>Authentication and SignUp</strong> system using <strong>JWT</strong> and <strong>MongoDB</strong>.</li>
    </ul>
    <hr>
    <p><strong><a href="https://github.com/vinij-03/ar_test_app_1.git">My-AR</a></strong> <span style="float: right;">Mar. 2023</span><br><em>AR Web Application for custom model upload and AR experience</em> <span style="float: right;">ThreeJs, MongoDb, Git</span></p>
    <ul>
        <li>Implemented precise <strong>Image Tracking</strong> for seamless 3D model placement.</li>
        <li>Constructed a platform enabling seamless upload and integration of <strong>personalized 3D models</strong>.</li>
        <li>Spearheaded the development of immersive <strong>AR experiences</strong>, using <strong>Image Tracking and Plane tracking</strong> for proper placement in real world environment.</li>
        <li><strong>A-Frame &amp; ThreeJs</strong> for optimized performance and intuitive user interaction.</li>
    </ul>
    <hr>
    <h2 id="achievements">Achievements</h2>
    <ol>
        <li><strong>Startup</strong> - Co-Founded <strong>Startup India</strong> and <strong>Startup Odisha</strong> Recognized Startup</li>
        <li><strong>Hackathon</strong> - Winner Of <strong>GITEX Global Dubai 2022 SuperNova YouthX</strong> out of 560 worldwide Startup</li>
        <li><strong>International Exhibition</strong> - <strong>G20 India</strong> (Sikkim &amp; Bhubaneswar) only 20 Selected Startup in India, <strong>GITEX Global Dubai 2022</strong>, <strong>Indian Mobile Congress 2023</strong></li>
        <li><strong>Startup Award</strong> - Best Student Startup 2023 Startup Odisha</li>
        <li><strong>Startup India Award 2023 Nominee</strong></li>
    </ol>
</div>
`;

function Work() {
    return (
        <Layout>
            <div className="px-12 py-8" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </Layout>
    );
}

export default Work;
