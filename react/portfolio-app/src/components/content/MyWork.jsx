import React, { useEffect, useState } from 'react';
import ProjectsMenu from './ProjectsMenu.jsx';
import Projects from './Projects.jsx';



export default function MyWork() {
    const [ menuList, setMenuList] = useState([])
    const [projectlist, setProjectList] = useState([])
    const [ category, setCategory] = useState(`total`);

    useEffect(() => {
        fetch("/data/contents.json")
        .then(data => data.json())
        .then(jsonData => {
            setMenuList(jsonData.projectMenu);

            if(category === 'total') {
                setProjectList(jsonData.projectList)
            }else {
                const filterProject = 
                    jsonData.projectList.filter((project) => project.category === category);
                    setProjectList(filterProject);
            }
        })
        .catch(error => console.log(error));

    }, [category]);

    const handMenuClickReq2 = (category) => {
        console.log(`MyWork ---> ${category}`); //탭메뉴클릭시 결과값이console에 출력되는부분
        setCategory(category);
    }

    
    return (
        <section id="work" class="section max-container">    
            <h2 class="title">My work</h2>
            <p class="description">Projects</p>
            <ul class="categories">
            <ProjectsMenu list={menuList} click={handMenuClickReq2}  />
            </ul>
            <Projects list={projectlist}/>
        </section>
    );
}

