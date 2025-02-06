import multer from "multer";

//multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'upload_files/') //실제로 저장되는폴더
        },
        filename: function (req, file, cb) {
            // cb(null, file.fieldname + '-' + Date.now())
                  // cb(null, file.fieldname + '-' + Date.now())
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);          
            cb(null, uniqueSuffix + "-" + file.originalname); 
            // console.log(uniqueSuffix);
            
            
            cb(null, file.originalname); //사용자가 올린파일명 으로올라감
        }
    })

const upload = multer({ storage: storage }).single("file");



export const fileUpload = (req, res) => {
    upload(req, res, (err)=>{
        if(err){
            console.log(err);
        } else {
            res.json({
                "uploadFileName": res.req.file.path,
                "sourceFileName": req.file.originalname,
                
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
































// import multer from "multer";




// const storage = multer.diskStorage({
// destination: function (req, file, cb) {
//     cb(null, "upload_files/");
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * le9);
//         cb(null, uniqueSuffix + '-' + file.originalname());
//     },
// });

// const fupload = multer({ storage: storage}).single("file");


// /**
//  * 파일 업로드 : 파일을  /upload_files 폴더에 저장하는 작업
//  * DiskStorage :디스크 스토리지 엔진은 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
//  */

// export function fileUpload(req, res) {
//     fupload(req, res, (err) => {
//         if (err) {
//             console.log(err);            
//         } else {
//             res.json ({
//                 uploadImage: res.req.file.path,
//                 orgImage: req.file.originalname,
//             });
//         }
//     });
//     // console.log(`${JSON.stringify(req,res)}`); 
// }

// //multer 정보
// //https://github.com/expressjs/multer/blob/master/doc/README-ko.md