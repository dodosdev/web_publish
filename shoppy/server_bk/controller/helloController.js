
//일반 자바스크립트 함수로 생성
// function 컨트롤러함수명(req, res) { }
export const getHello = (req, res) => {
    console.log('helloController!!');
    res.send('server.js > helloRouter > helloController:getHello');
    res.end();
}

export const getHelloParam = (req, res) => {
    res.send(`서버로 요청된 파라미터 ===>> ${req.params.id}`);
    res.end();
    
}