/** */
export const getMain = (req, res) => {  
    //req: 요청정보(클라이언트 --> 서버), res : 응답정보(서버---> 클라이언트)}); 
    //(req, res) req에 저장됨
    res.send('Welcome to Hello~');  //MVC 패던
    res.end();
}