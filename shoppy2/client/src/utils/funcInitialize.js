import React, { useRef } from 'react';

export default function initSignup() {
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
    const nameKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '휴대폰 번호', '이메일 주소'];
    const placeholderKor = ['아이디(6~12자이내', '비밀번호', '비밀번호 확인', '이름', '휴대폰 번호', '이메일 주소'];


    const placeholders = names.reduce((acc, name, idx) => {
        acc[name] = placeholderKor[idx]; return acc;
    }, {});
    
    const lables = names.reduce((acc, name, idx) => {
        acc[name] = placeholderKor[idx];return acc;
    }, []);

    return (
        <div>
            
        </div>
    );
}

