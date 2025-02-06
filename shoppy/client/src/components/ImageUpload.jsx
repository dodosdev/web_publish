import React from 'react'
import Form  from "react-bootstrap/Form";
import axios from "axios";

export default function imageUpload({getFileName}) {
    const formData = new FormData();

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]);

        //서버전송
        axios
            .post('http://localhost:9000/uploads', formData)
            .then(res => {
                console.log('res-->', res.data);
                getFileName(res.data);
            })
            .catch(error => console.error(error));           
    }

    return (
        <div>
            <Form.Control 
            type="file"
            onChange={(e)=>{handleFileUpload(e)}}
            />

        </div>
    )
}














































// import axios from "axios";
// import React from "react";
// import Form from 'react-bootstrap/Form';

// export default function ImageUpload() {
//     const formData = new FormData();   //FormData--> 오브젝트타입

//     //파일업로드 이벤트 함수
//     const handleFileUpload = (e) => {
//         // console.log(e.target.files[0]); 
//         formData.append("file", e.target.files[0]); 
//         //files[0] --> 0번째에 있는파일만 받겠음  0:File
        
//         for(const [key, value] of formData.entries()) {
//             console.log(`key--->>> ${JSON.stringify(key)}` );
//             console.log(`value--->>>`, value);
//         }
        
//         // 서버 전송
//         axios
//             .post('http://localhost:9000/uploads ', formData)
//             .then(res => console.log('res.date ->', res.data))
//             .catch(error => console.log(error));
            
//     }
//     // console.log('formData-->', formData);

//     return (
//         <div>
//             <Form.Control 
//                     type="file"
//                     onChange={(e) => {handleFileUpload(e)}} />
//         </div>
//     );
// }

// //(e) 이름은 동일하게 맞춘다
// //accept="'image/*"   --> type:image/webd





