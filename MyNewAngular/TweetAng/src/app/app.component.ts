import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Brian Dudey'
  imgSource="http://via.placeholder.com/150"
  address = 'ABC Chennai | 9500900989 | abcchennai@gmail.com | chennai.org'
  profile =[
    'PROFILE','Innovative optimized solution seeker. Etched to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, an inated, and an alliteration advocate.'
  ]
  skills = [
    "Technical Skills",
    "JavaScript",
    "CSS",
    "HTML",
    "React",
    "Redux",
    "Mongo",
    "Deployment",
  ];

  Add_skills = [
    "Additional skills",
    "Project Management",
    "Recruitment",
    "Business Development",
    "Fundraising"
  ];
  Workexp = [
    "Work Experience",
    "Event Manager",
    "C3 Present,Washington DC",
    "Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation.",
    " Brought new bushiest to the organization through relentless networking and stewardship which helped the company wn the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women",
    "Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.",
  ];

  Workexp2 = [
    "Work Experience",
    "Gay & Lesbian Elder Housing,Los Angels",
    "C3 Present,Washington DC",
    "Arranging presentations and pitch deck.",
    "Designing a PR plan and establishing important focus points.",
    " Designing, creating and managing content across multiple communication platforms.",
    " Building relationships with key media players.",
  ];
  myEdu = [
    "Education",
    "Engineering immersion programe",
    "Thinkfull,Chicago, IL",
    "Project focused intensive program on MongoDB, Express, React, NodeJs (MERN) technical stack ",
    `Developed a full stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.`,
    `Developed a language learning app, 'Foodie Phonetics" using spaced repetition and a Ihked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.`,
    `Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-devebped RESTful API, Geospatial searching, and user authentication with JWT.`,
    `BA,English`,
    `University of California`
  ];

}
