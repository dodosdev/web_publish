import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";

export default function ImageUploadMultiple({getFileName}){
    const [oldFile, setOldFile] = useState([]);

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;


        // if(files.length < 6){
            
            //formDta에 append - fike 개별로 append 되어야함!
            for( const file of files) formData.append("files", file);
            formData.append("oldFile", oldFile);

            // for (let i=0; i<files.length; i++) formData.append("files", files[i]);
            // files.forEach((file)=>formData.append("files", file)); //iteralbe 호출로 인해 사용불가

            // for (const [key,value] of formData) console.log(key, value);
            



            // 서버전송
            //파일업로드 제한없이 사용자가 선택한 갯수 만큼 전송--> ?maxFiles=${files.length}
            axios 
                .post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData, {
                    headers : { "Content-Type" : "multiPart/form-data"},
                })
                .then(res => {
                    getFileName(res.data); //NewPfoduct 컴포넌트로 전송
                    setOldFile(res.data.oldFile);
                })
                .catch(error => console.log(error));
                
        // } else {
        //     alert("파일은 최다 5개까지 가능합니다.");
        //}

    }

    return(
        <div>
            <Form.Control
                type="file"
                onChange={(e)=>{handleFileUploadMultiple(e)}}
                multiple />
        </div>
    );
}

