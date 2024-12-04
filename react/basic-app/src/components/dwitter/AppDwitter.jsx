import Dwitter from "./Dwitter.jsx";
import './Dwitter.css';
import {useEffect, useState} from 'react';  
//package.json 비동기식처리하는 아이들을 처리하는 함수, 가장먼저 실행된다!!! 
// react에서 실행된다 
//useStatus -->상태관리


export default function AppDwitter() {
    const [dwitters, setDwitters] = useState([]);

    
    //[관리할변수이름, 변수에 넣는 함수명]
    // let dwitters = [];



    // react network 접속 진행 시 ==> useEffect() 리액트 Hooks 사용한다. 
    // react hooks -- useEffect();
    // useEffect(callback함수, dependencies) : 맨 처음에 실행되는 함수

    useEffect(() => {  //맨처음 한번만 호출하도록 상태 관리
        fetch("/data/dwitters.json")  //network을 통해 접속(외부시스템) fetch-비동기
        .then((result) => result.json())
        .then((jsonData) => setDwitters(jsonData))
        .catch(error => console.log(error));
    }, []);
    

    console.log(`dwitters --> ${dwitters}`);
        

    return (
        <div className="dwitter-container">
            <h1>Dwitter</h1>
            <ul className="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / SignUp</li>
            </ul>

            { dwitters.map((dwitter) =>  
                <Dwitter
                    img= {dwitter.img}
                    name= {dwitter.name}
                    id= {dwitter.id}
                    date= {dwitter.date}
                    content= {dwitter.content} />   
                
            )}

        </div>
    );
}

//한줄 이상이면 {}로묶음