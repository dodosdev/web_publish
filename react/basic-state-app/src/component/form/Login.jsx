import React, { useState, useRef } from 'react';

export default function Login() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const initForm = {'id':'', 'password':''};
    const [form, setForm] = useState(initForm);  // 값이 바뀔때마다 setId를 통해 새로운값을 넣어줌
    // const [password, setPassword] = useState('');
    // const [form, setForm] = useState({'id':'', 'password':''});  //{"id": "test"...}
    // const {name, value}; {type:Text, name=id, value:test};


    const handleChangeForm = (event) => {
        
        //아이디, 패스워드가 변경되면
        //setForm 함수를 이용하여"id":"test" 형식으로 저장
        // console.log(event.target);  //event.target 상속값을 받으면....{type:text, name=id, value:test}
        
        const {name, value} = event.target;
        // console.log(`name --> ${name}, value--> ${value}`);

        //form = {'id': '', 'password':''}
        setForm({...form, [name]:value}); //오브젝트객체의 필드값을 변수로 입력하는 경우에는 []로 감싼후적용
            //{요소의값을가져옴, 새로운값으로 변경(대체) } **splite연산
        
    }

    console.log(`form id --> ${form.id}`);
    console.log(`form password --> ${form.password}`);
    

    // const handleChangeId = (event) => {
    //     setId(event.target.value); //id의 form이 바뀔때마다 콘솔에 찍힘   
    //     // console.log(event.target.value);
    // }

    // const handleChangePassword = (event) => {
    //     setPassword(event.target.value); 
    // }
    const validate = () => { //현재시점에서 관리되는value값
        // console.log(idRef.current.value);
        if(idRef.current.value ==='') {
            alert('아이디를 입력해주세요');
            idRef.current.focus();
            return false;
        }else if(passwordRef.current.value === '') {
            alert('패스워드를 입력해주세요');
            passwordRef.current.focus();
            return false;
        }
        return XPathResult;      
        
        // return false;
    }

    const handleSubmit = (event) => {  // <button type='submit' onSubmit={handleSubmit}>로그인</button>   
        event.preventDefault();  // 버튼타입은 type='submit'으로함 // onSubmit클릭이되면 form 전체가 실행됨 
        if(validate()) {
            console.log(form);
            
        }
        console.log(form);      
        //로그인폼에 입력된 값을 ---> 서버(express, WAS,....)
        // {{"id":"test"}, {"password":"1234"}...} 데이터가 오브젝트리터럴형태로 만들어짐
        // submit(form);

        const formData = { //데이터가넘어가는형태
            "id": "test", 
            "password" : "1234"  //name값과 value값을 가져와서 처리
        };
        
    }




    return (
        <div>
            <h1>Login</h1>
            <form name='login-form' onSubmit={handleSubmit} >
                <div>
                    <label>아이디</label>
                    <input  type='text' 
                            name='id'  //id:test
                            value={form.id} //브라우저의 값을 받아오기 위해서 react에서 작업
                            ref={idRef}
                            onChange={handleChangeForm} //값이 바뀔때마다 일어남onChange
                            />
                </div>
                <div>
                    <label>패스워드</label>
                    <input type='password' 
                            name='password' //password
                            value={form.password} //value ->찍히는값
                            ref={passwordRef}
                            onChange={handleChangeForm} /> 
                </div>
                <div>
                    <button type='submit'>로그인</button> 
                </div>
            </form>
        </div>
    );
}

