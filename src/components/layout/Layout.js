import React, { useState, useEffect } from "react"
import "../../scss/bulma.scss"
import Sidebar  from "../Sidebar";
import Navbar from "../Navbar";

var lessons = [
  {
    "name": "Python",
    "to": "/python/",
    "lessonList": [
      { to: "/python/", name: "Python Introduction"},
      { to: "/python/getstarted", name: "Python Get Started"},
      { to: "/python/syntax", name: "Python Syntax"},
      { to: "/python/comments", name: "Python Comments"},
      { to: "/python/variables", name: "Python Variables"},
      { to: "/python/datatypes", name: "Python Data Types"},
      { to: "/python/numbers", name: "Python Data Numbers"},
      { to: "/python/casting", name: "Python Casting"},
      { to: "/python/strings", name: "Python Strings"},
      { to: "/python/boolean", name: "Python Boolean"},
      { to: "/python/operators", name: "Python Operators"},
      { to: "/python/lists", name: "Python Lists"},
      { to: "/python/conditions", name: "Python Conditions"},
      { to: "/python/arrays", name: "Python Arrays"},
      { to: "/python/functions", name: "Python Functions"},
      { to: "/python/videos", name: "Python Videos"},
      { to: "/python/quiz", name: "Python Quiz"}
    ]
  },
  {
    "name": "Java",
    "to": "/java/",
    "lessonList": [
      { to: '/java/', name: 'Java Introduction' },
      { to: '/java/getstarted', name: 'Java Getting Started' },
      { to: '/java/syntax', name: 'Java Syntax' },
      { to: '/java/comments', name: 'Java Comments' },
      { to: '/java/string', name: 'Java Strings' },
      { to: '/java/variables', name: 'Java Variables' },
      { to: '/java/datatypes', name: 'Java Data Types' },
      { to: '/java/typecasting', name: 'Java Type Casting' },
      { to: '/java/booleans', name: 'Java Boolean' },
      { to: '/java/methods', name: 'Java Methods' },
      { to: '/java/conditions', name: 'Java Conditions' },
      { to: '/java/arrays', name: 'Java Arrays' },
      { to: '/java/classes', name: 'Java Classes' },
      { to: "/java/videos", name: "Java Videos"},
      { to: "/java/quiz", name: "Java Quiz"}
    ]
  },
  {
    "name": "PHP",
    "to": "/php/",
    "lessonList": [
      { to: '/php/', name: 'PHP Introduction' },
      { to: '/php/install', name: 'PHP Install' },
      { to: '/php/syntax', name: 'PHP Syntax' },
      { to: '/php/comments', name: 'PHP Comments' },
      { to: '/php/variables', name: 'PHP Variables' },
      { to: '/php/echoprint', name: 'PHP Echo / Print' },
      { to: '/php/datatypes', name: 'PHP Data Types' },
      { to: '/php/strings', name: 'PHP Strings' },
      { to: '/php/ifelseif', name: 'PHP If...Else...Elseif' },
    ]
  }
]

export default function Layout({ children }) {
  const [currentLessonPage, setCurrentLessonPage] = useState("python");
  const [foundLessons, setFoundLessons] = useState(lessons[0]);

  useEffect(() => {
      // Runs on every render
      setCurrentLessonPage(window.location.pathname.split("/")[1]);
      setFoundLessons(lessons.find(element => element.name.toLowerCase() === currentLessonPage));
  });

  return (
    <div class="container">
      <Navbar lessons={lessons}/>

      <div class="columns">
        <Sidebar subject={currentLessonPage} pages={foundLessons.lessonList}/>

        <div class="column is-10">
          { children }
        </div>
      </div>
    </div>
  );
}