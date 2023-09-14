//Get 요청과 Post 요청
// Get 요청은 정보를 가져오고 페이지를 가져와서 화면에 띄우는 것이고
// 기본적으로 백 엔드에 영향을 주지 않는다 Post 요청과 비교했을 때 생성, 삭제, 업데이트를 안한다
// Post 요청은 회원 가입 같이 계정을 등록해 생성하거나
// 블로그에 댓글을 쓰기 위해 데이터를 보낼 때 쓴다
// Post 요청을 보낼 때 크기나 포맷에 있어 유연성을 갖는다


// post 요청 
const express = require('express');
const app = express();

app.use(express.json()); //postman에서 post요청시 json을 전송해서 요청하기.
app.use(express.urlencoded({ extended: true })) //post는 요청한값을 req.body에 저장하는데
//기본값이 undefined임. 그래서 위코드를쓰면 req.body에저장.
//request body를 URL 암호화 데이터로 분석할 이 미들웨어를 사용하라고함
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} taco._.`)
})

app.listen(3000, () => {
    console.log('ON PORT 3000!')
})
// /tacos로 모든요청을 받는게 아니라 get요청과 post요청을 구분해서 받는다.

//getpost.html 파일을 만들고 텍스트폼을 만들어서 localhost:3000/tacos 로 submit하도록 연결했다

//     < form action = "http://localhost:3000/tacos" method = "post" >
//                 앞에 http:// 꼭 붙여야함 안그럼 오류.
//     <input type="text" name="meat">
//     <input type="number" name="qty">
//         <button type="submit">submit</button>
//     </form>

// getpost사이트에서 입력창 입력하고 제출하면  POST /tacos response  응답

//postman에서도 post요청해서 요청값을 req.body에 저장할수 있다 (키-값 객체로 저장)
//git에서 nodemon index.js 로 서버실행후 postman에서 send눌러야 작동함
//postman의 Body 클릭,  x-www-form-urlencoded 클릭 후 키값 작성 후 제출.
//console.log(req.body)쓰면 { meat: 'd', qty: '1' }  객체출력

//postman에서 json을 전송해서 요청하기.
//app.use(express.json()); 이코드를 써야 postman에서 json을 전송해도 작동이된다
//postman에서 body클릭- raw 클릭 - 맨오른쪽 text드롭다운해서 json으로변경후 json데이터작성후 제출.