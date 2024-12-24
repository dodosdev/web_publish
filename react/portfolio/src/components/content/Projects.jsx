import React from 'react';
import Project from './Project.jsx';

export default function Projects() {
    const projectList = [
        {
            "img": "images/projects/project1.webp",
            "alt": "project",
            "title":"Project #1",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "images/projects/project2.webp",
            "alt": "project2",
            "title":"Project #2",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "images/projects/project3.webp",
            "alt": "project3",
            "title":"Project #3",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "images/projects/project4.webp",
            "alt": "project4",
            "title":"Project #4",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "images/projects/project5.webp",
            "alt": "project5",
            "title":"Project #5",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "images/projects/project4.webp",
            "alt": "project4",
            "title":"Project #4",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "images/projects/project2.webp",
            "alt": "project2",
            "title":"Project #2",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "images/projects/project5.webp",
            "alt": "project5",
            "title":"Project #5",
            "description": "Clone Coding with HTML, CSS"
        }
    ]

    
    return (
        <ul class="projects">
            {projectList && projectList.map((project) =>
                <li class="project">
                    <Project
                        img={project.img}
                        alt={project.alt}
                        title={project.title}
                        description={project.description}
                        />
                </li>
            )}
        </ul>
    );
}

