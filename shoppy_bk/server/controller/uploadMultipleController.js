import multer from "multer";
import fs from 'fs';
import path from "path";
import { EOL } from "os";


//multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'upload_files/') //실제로 저장되는폴더
        },
        filename: function (req, file, cb) {
            // cb(null, file.fieldname + '-' + Date.now())
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);          
            cb(null, uniqueSuffix + "-" + file.originalname); 
            // 코드 + 원래이미지명
                    
            // cb(null, file.originalname); //사용자가 올린파일명 으로올라감
        }
    })


    
    
    
    export const fileUploadMultiple = (req, res) => {
        const maxFiles = parseInt(req.query.maxFiles);
        const upload = multer({ storage: storage }).array("files", maxFiles);  //5개까지 업로드

        upload(req, res, (err)=> {
            if(err){
                console.log(err);
            } else {

                const oldFileArray = req.body.oldFile.split(",");
                console.log(oldFileArray.length);
                
                
                
                
                // const oldFile = req.body.oldFile;
                // // console.log('file-->', res.file); //전달된 파일 --> multer 이용한 파일업로드
                // // console.log('oldFile-->', req.body.oldFile); //전달된 문자

                // // //이파일로 삭제진행
                for(const oldFile of oldFileArray ) {
                    
                    if(oldFile) {
                        //oldFile 존재시 업로드 폴더에서 삭제 (기존파일을 새로운파일로 교체)
                        const oldFilePath = path.join("upload_files/", oldFile);
                        if (fs.existsSync(oldFilePath)) {  //경로에 있는파일이 있으면 fs ->파일시스템(경로 찾아감)
                            try {
                                fs.unlinkSync(oldFilePath);
                                console.log("이전 파일 삭제 완료:", oldFilePath);   
                            } catch (error) {
                                console.log("이전 파일 삭제 실패", error);
                                
                            }
                        }
                    }
                }


                //res 객체를 이용한 전송객체 생성<-> uploadController 의 res 객체명과 동일하게 정의!
                let uploadFileName = [];
                let sourceFileName = [];
                let oldFile = [];

                //req.files 배열의 파일정보를 가져와서 위의 배열에 추가한다.
                for(const file of req.files) {
                    uploadFileName.push(file.path);
                    sourceFileName.push(file.originalname);
                    oldFile.push(file.filename)
                }


                res.json({
                    "uploadFileName": uploadFileName, //업로드한 파일
                    "sourceFileName": sourceFileName, //사용자가 선택한파일
                    "oldFile": oldFile   //upload가 성공이되어지면 res
                    //oldfile-> 폴더가 사라지고 기존파일 삭제되고 새로 업로드한파일이 올라감
                });
            }
        });
        
    }




// {
//     "uploadFileName": "upload_files\\3.webp",
//     "sourceFileName": "3.webp"
// }

//cb(null, file.fieldname + '-' + Date.now())
//파일이 업로드되면 코드가붙은 파일명으로 변경됨


//  **
//  * 파일 업로드 : 파일을  /upload_files 폴더에 저장하는 작업
//  * DiskStorage :디스크 스토리지 엔진은 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
//  */

//multer 정보
//https://github.com/expressjs/multer/blob/master/doc/README-ko.md