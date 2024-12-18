import React, { useRef, useState } from 'react';
import { validateLogin2 } from '../../apis/validate';


export default function Login2() {
    const idRef = useRef(null);
    const passRef = useRef(null);

    const [formData, setFormData] = useState({'id':'', 'pass':''});
    const [errorMsg, setErrorMsg] = useState({'id': '', 'pass':''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        // console.log(name, value); // 폼이 빈값인지아닌지 체크 
        setFormData({...formData, [name]:value}); //스프레드 연산자-요소를가져와서 펼친다
        if(name === 'id') {
            (value === '') ?
            setErrorMsg({...errorMsg, ['id']:'아이디를 입력해주세요'})
            : setErrorMsg({...errorMsg, ['id']: ''})
        } else if(name === 'pass') {
            (value === '') ?
            setErrorMsg({...errorMsg, ['pass']:'패스워드를 입력해주세요'})
            : setErrorMsg({...errorMsg, ['pass']: ''})
        };

    }

    const validate = () => {
        let result = true;
        if(idRef.current.value === '') {
            // alert("아이디를 입력해주세요");
            setErrorMsg({...errorMsg, ['id']:'아이디를 입력해주세요'});
            idRef.current.focus();
            return false;
        }else if (passRef.current.value === '') {
            // alert("패스워드를 입력해주세요");
            setErrorMsg({...errorMsg, ['pass']:'패스워드를 입력해주세요'});
            passRef.current.focus();
            result = false;
        }
        return result;
    }




    const handleSubmit = (e) => {
        e.preventDefault(); 
        const param = {
            'idRegf' : idRef,
            'passRef': passRef,
            'errorMsg':errorMsg,
            'setErrorMsg': setErrorMsg
        };


        if(validate()) console.log(formData);
        
    }

    
    return (
        <form onSubmit={handleSubmit}> 
            <ul>
                <li>
                    <label htmlFor="">아이디</label>
                    <input type="text"
                            name="id"
                            value={formData.id}
                            ref={idRef}
                            onChange={handleChange}/>
                    <span style={{'color': 'red'}}>{errorMsg.id}</span> 
                </li>
                <li>
                    <label htmlFor="">패스워드</label>
                    <input type="password"
                            name="pass"
                            value={formData.pass}
                            ref={passRef}
                            onChange={handleChange}/>
                    <span style={{'color': 'red'}}>{errorMsg.pass}</span> 
                </li>
                <li>
                    <button type="submit">로그인</button>
                </li>
            </ul>
        </form>
    );
}

