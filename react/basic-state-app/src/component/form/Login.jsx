import React, {useState} from 'react';

export default function Login() {
    const [id, setId] = useState(''); // 값이 바뀔때마다 setId를 통해 새로운값을 넣어줌
    const [password, setPassword] = useState('');
    const [form, setForm] = useState({}); 

    const handleChangeId = (event) => {
        setId(event.target.value); //id의 form이 바뀔때마다콘솔에 찍힘   
        // console.log(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value); 
    }

    const handleSubmit = (event) => {  // <button type='submit' onSubmit={handleSubmit}>로그인</button>   
        event.preventDefault();  // 버튼타입은 type='submit'으로함 // onSubmit클릭이되면 form 전체가 실행됨 
        console.log(event);
        //로그인폼에 입력된 값을 ---> 서버(express, WAS,....)
        // {{"id":"test"}, {"password":"1234"}...} 데이터가 오브젝트리터럴형태로 만들어짐
        
        const formData = { //데이터가넘어가는형태
            "id": "test", 
            "password":"1234"  //name값과 value값을 가져와서 처리
        };
        
    }




    return (
        <div>
            <h1>Login</h1>
            <form name='login-form' onSubmit={handleSubmit} >
                <div>
                    <label>아이디</label>
                    <input  type='text' 
                            name='id'  
                            value={id} //브라우저의 값을 받아오기 위해서 react에서 작업
                            onChange={handleChangeId} //값이 바뀔때마다 일어남onChange
                            />
                </div>
                <div>
                    <label>패스워드</label>
                    <input type='password' 
                            name='pass' 
                            value={password}
                            onChange={handleChangePassword} />
                </div>
                <div>
                    <button type='submit'>로그인</button> 
                </div>
            </form>
        </div>
    );
}

