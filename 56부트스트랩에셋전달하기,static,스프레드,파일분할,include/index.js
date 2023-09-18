// subreddit.ejs파일에 부트스트랩 전달해서 사용하기

const express = require('express');
const path = require('path');
const app5 = express();
const redditData = require('./data.json')  //data.json 불러오면 js객체로로 변환됨

app5.use(express.static(path.join(__dirname, 'public'))); //public폴더에 css,js포맷파일있음
// 부트스트랩 css,js 전달.  상위디렉토리에서도 nodemon 55/index.js 써서 실행할수있게 경로를 설정함 
app5.set('view engine', 'ejs');
app5.set('views', path.join(__dirname, '/views'));

app5.get('/', (req, res) => {  // 베이스주소 localhost:8000/  엔터치면 home.ejs파일 랜더링
    res.render('home', { name: 'home' })
})   //head.ejs로 헤드부분파일을 따로 만들었는데 <title> <%=name%> </title> 이렇게 변수때문에
//name을 찾을수 없다고 오류가나서 render에 {name:'home'} 객체를 추가제공.
app5.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num, name: 'random' })
})
app5.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;     //  /chickens /soccer 같은값을 키-값으로 저장 
    //예를들어 {chickens:chickens} 
    const data = redditData[subreddit];  //redditData객체의 키로subreddit을써서 값얻음 
    if (data) {
        res.render('subreddit', { ...data })  // ...스프레드구문 객체를복사해서 새객체를만듦
    } else {
        res.render('notfound', { subreddit, name: 'NOT FOUND' })
    }
})
//{...data}  name , subscribers 같은 각특성에 접근할수 있다.  {name:soccer, subscribers: 800000} 
app5.listen(8000, () =>
    console.log('LISTENING TO PORT 8000'))

//부트스트랩 사이트에서 컴파일된 css와 js를 다운로드.매우작은파일이고 소스파일을 건드리지않을거라 다운받아도
//괜찮음     public폴더를 만들고 그안에 css,js폴더도 만들고 css폴더에 bootstrap.min.css를 붙여넣기함
//js폴더에 bootstrap.min.js를 붙여넣기함.  그리고
//app5.use(express.static(path.join(__dirname, 'public'))); //public디렉토리를 제공함
//views폴더에 subreddit을 열어  <head>에  <link rel="stylesheet" href="/css/bootstrap.min.css">
//<script src="/js/bootstrap.min.js"></script>    < script src = "/js/jquery.js" ></script >
//링크를 한다  public을 제공했으니 그다음 디렉토리인 /css를 쓰고 파일이름 bootstrap.min.css 를 쓰면된다
//j쿼리 사이트에 가서 압축된버전을 다운받는다 download the compressed 클릭하고 ctrl+s 눌러
//아까만든 public폴더안의 js폴더에 저장한다. 파일명을 바꿔서 저장해도된다.
//부트스트랩 링크 순서가 중요하다 css,j쿼리,js 순이어야한다. j쿼리가 js보다 먼저.!



//ejs와 파일분할 include
//<%- include('partials/head') %> ejs파일 헤드에 붙여넣기하면 부트스트랩링크 등을 계속쓰지않아도 됨
//<!DOCTYPE html> 부터 시작해서 부트스트랩 링크들을 포함 </head> 부분까지,
//따로 파일만들어서 저장함 이번엔 partials라는 폴더에 head.ejs를 만들어 저장함
//다른 ejs파일을 작성할때 맨위 헤드부분에  <%- include('partials/head') %> 이한줄을 쓰면됨
// ejs태그 <%- 를쓰고 include쓰고 경로/파일이름쓰면됨
// 그다음 <body>부터 코드적기시작하면됨

//<%- include('partials/navbar') %> 네브바코드를 따로파일만듦
//네브바코드를 partials/head에 넣어서써도됨

// <%- %>   태그사이 내용을 html로 취급함. 주로 include와 같이 사용됨.

