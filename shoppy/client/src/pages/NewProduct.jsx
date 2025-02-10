import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ImageUploadMultiple from '../components/ImageUploadMultiple.jsx';

export default function NewProduct() {
    const navigate = useNavigate();
    const productNameRef = useState(null);
    const [fname, setFnames ] = useState({});
    const [preview, setPreview] = useState('');
    let [formData, setFormData] = useState({});
    const [previewList, setPreviewList] = useState([]);



    const getFileName = (fileNames) => {
        setFnames(fileNames);
        setPreviewList(fileNames.uploadFileName);
        // console.log('fileNames-->', fileNames );
        // console.log('New');
        
        // setPreview(`http://localhost:9000/${fileNames.uploadFileName}`);
        //새로운이미지가 등록될마다 이미지 자동 업데이트 //multer사용
        //여러개 이미지를 등록해도 싱글파일만 등록되고 기존파일은 삭제되고 (싱글파일)새로운파일이 업로드됨
    }

    //폼 입력시 값을 formData로 추가하는 이벤트 처리
    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name, value);
        setFormData({...formData, [name]:value});
        
    }


    //등록 이벤트 처리
    const handleSubmit = (e) => {
        e.preventDefault();

        if(productNameRef.current.value === '') {
            alert('상품명 입력해주세요');
            productNameRef.current.focus();
            return false;
        } else {
            //서버 연동
            formData = {...formData, 
                            "uploadFile": fname.uploadFileName,
                            "sourceFile" : fname.sourceFileName};
            console.log('formData -->', formData);


            axios
                .post('http://localhost:9000/product/new', formData)
                .then(res => {
                    if(res.data.result_rows === 1) {
                        alert("상품이 등록 되었습니다");
                        navigate('/all');
                    } else {
                        alert("상품 등록 실패!");
                    }
                    // console.log('res.data--->', res.data);
                    
                })
                .catch(error =>  {
                    alert("상품등록 실패!");
                console.log(error);
                })

        }

    }
    


    return (
        <div className="content">
            <h1>상품 등록</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>상품명</label>
                        <input type="text" 
                                name="productName" 
                                ref={productNameRef}
                                onChange={handleChange}
                                placeholder='상품명 입력'/>
                    </li>
                    <li>
                        <label>가격</label>
                        <input type="text" 
                                name="price" 
                                onChange={handleChange}
                                placeholder='상품명 입력'/>
                    </li>
                    <li>
                        <label>상품정보</label>
                        <input type="text" 
                                name="description"
                                onChange={handleChange}
                                placeholder='상품명 입력'/>
                    </li>
                    <li>
                        <label>파일업로드(다중)</label>
                        <ImageUploadMultiple getFileName={getFileName} />
                        {/* 다중파일 priview */}
                        {
                            previewList && previewList.map((preview)=>
                                <img src={`http://localhost:9000/${preview}`}  alt="preview image" 
                                style={{width:'100px', height:'100px', margin:'5px'}} />
                            )
                        }
                    </li>
                    {/* <li>
                        <label>파일업로드</label>
                        <ImageUpload getFileName={getFileName} />
                        {preview && 
                        <img src={preview}  
                            alt="preview image" 
                            style={{width:'100px', height:'100px'}} />}
                        
                    </li> */}
                    <li>
                        <input type="hidden" name="upload" value={fname.uploadFileName} />
                        <input type="hidden" name="source" value={fname.sourceFileName} />
                    </li>
                    <li>
                        <button type="submit">등록</button>
                        <button type="reset">취소</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}
