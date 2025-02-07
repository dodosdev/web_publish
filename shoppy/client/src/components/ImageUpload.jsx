import React, { useState } from 'react'
import Form  from "react-bootstrap/Form";
import axios from "axios";

export default function ImageUpload({getFileName}) {
    
    const [oldFile, setOldFile] = useState('');
    const formData = new FormData();  //FormData--> 오브젝트타입
    


    //파일업로드 이벤트 함수
    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]); //새로운 파일  b.png
        formData.append("oldFile", oldFile);  //이전파일 a.png
        //files[0] --> 0번째에 있는파일만 받겠음  0:File

        //서버전송
        axios
            .post('http://localhost:9000/uploads', formData, {
                headers : { "Content-Type" : "multipart/form-data"}, //파일과 문자 데이터 추가시
            })
            .then(res => {
                // console.log('res-->', res.data);
                getFileName(res.data);
                setOldFile(res.data.oldFile);
            })
            .catch(error => console.error(error));           
    }

    // console.log('oldFile -->', oldFile);
    

    return (
        <div>
            <Form.Control 
            type="file"
            onChange={(e)=>{handleFileUpload(e)}}
            />

        </div>
    );
    
}



