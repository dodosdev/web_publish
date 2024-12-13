import React, { useRef, useState } from 'react';

export default function UserInfo() {
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const ageRef = useRef(null);
    // const [name, setName] = useState('');
    // const [address, setAddress] = useState('');

    // 폼데이터 저장소
    const init = {'name': '', 'address':'', 'age':''};
    const [formData, setFormData] = useState({init});
    // console.log(`UserInfo ---> ${name}, ${address}`);
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }
    
    
    const validateForm = () => {
        let result = true;
        if(nameRef.current.value === '') {
            alert('이름을 입력해주세요');
            nameRef.current.focus();
            result = false;
        }else if (addressRef.current.value === '') {
            alert('주소를 입력해주세요');
            addressRef.current.focus();
            result = false;
        }else if(ageRef.current.value === '') {
            alert('나이를 입력해주세요');
            ageRef.current.focus();
            result = false;
        }
        return result;

    }
    
    // const handleChangeName = (event) => { setName(event.target.value);}
    // const handleChangeAddress = (event) => { setAddress(event.target.value);}

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`UserInfo -->${FormData}`);
        
    }

    return (
        <div>
            <h1>User Info</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">Name</label>
                        <input type="text" 
                                name='name'
                                value={formData.name}
                                ref={nameRef}
                                onChange={handleChangeForm} //같은함수로사용->실행할 "이벤트 함수”를 {}안에 전달 
                                />
                    </li>
                    <li>
                        <label htmlFor="">Address</label>
                        <input type="text" 
                                name='address'
                                value={formData.address}
                                ref={addressRef}
                                onChange={handleChangeForm}
                                />
                    </li>
                    <li>
                        <label htmlFor="">Age</label>
                        <input type="text" 
                                name='age'
                                value={formData.age}
                                ref={ageRef}
                                onChange={handleChangeForm}
                                />
                    </li>
                </ul>
                <div>
                    <button type='submit'>로그인</button> 
                </div>
            </form>
        </div>
    );
}

