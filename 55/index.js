//템플레이팅    기본 html틀에 매개변수 정보를 넣어서 루프로 여러번 템플릿을 반복하는것
//예를들어 인스타에서 다른 틀은 그대로이고 사진과 문자만 바뀐다 그게 템플레이팅
// 이를 수행하는 데 도움이 되는 도구들이 아주 많이 있고
// 우리가 사용할 것은 EJS인데 Embedded JavaScript의 약자이다
//  다른 인기 있는 것 중 Handlebars가 있다 Jade, Pug, Nunjucks 등
// 이들은 Express로 사용할 수 있는 JavaScript 템플레이팅 엔진이다
// EJS의 경우 템플릿 안에 실제 JavaScript를 넣는거다 따라서 더 쉽게 배울 수 있다

//ejs용 express 구성하기
//ejs를 배우기전에 ejs를 사용할 express 환경을 만들어놔야함
//새폴더를 만들고 npm init -y 로 package.json도 만들고 npm i express 설치하고 index.js 파일까지 만들면
//셋팅끝  이제 앱에 EJS를 사용한다고 알린다 app.set을 이용해서.

// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs');  //viewengine으로 ejs를 쓰겠다는 선언이다 여기까지 쓰고 npm i ejs 설치
// app.get('/', (req, res) =>
//     res.render('home'))  //파일이름

//다음은 디폴트 디렉토리 /views 를 만들어야한다.  다른이름으로도 설정할수 있지만 디폴트는 /views 이다
//views폴더 안에 파일을 하나 만든다  home.ejs 라고 만들었다.

//home.ejs에 HTML 내용을 추가한다.  ejs파일에서 HTML을 쓸 수있다 이는 확장된것이다
//app.get에  응답으로 문자열을 보내는 대신에 파일을 보낼수 있다
//이때 쓰는 메서드로 render 가있다
//res.render('파일이름')
// .ejs를 추가할 수 있지만 필요하지않다  ('view engine', 'ejs');로 설정해서이다
// views/ 역시 할 필요가 없는데 res.render를 호출할 때마다 디폴트 위치가 views라고 가정하고 있기때문.
// EJS를 사용하면 이 템플릿을 렌더링할 때 템플릿을 가져와서 JavaScript가 보이는 곳을 HTML로 변환한다
// 하지만 이번 템플릿은 이미 순수 HTML이므로 변환할것이 없다

// app.listen(3000, () =>
//     console.log('LISTENING ON PORT 3000'));

//res.render('home') 쓰면  파일로 응답을 보낼수 있다
//nodemon index.js 입력 후 localhost:3000 가보면 html로 만든 문서가 있다


// view디렉토리 설정하기  다른경로에서 서버실행하기
//위 처럼 파일을 응답으로 보내는데 index.js와 같은 폴더에 있는 디렉토리 (예를 들어 지금은 55 디렉토리)
//에 있을때 node index.js 실행했을때 localhost:3000에서 파일이 응답으로 나온다.
//하지만 cd .. 를해서 상위디렉토리에서 node 55/index.js 실행하면 콘솔에는 코딩한대로 출력되지만
//localhost:3000을 보면 오류가 뜬다.  어디서든 views의 디렉토리를 참조해서 정상적으로 작동하게 하려면
// Node의 내장된 path 모듈을 사용해서 해결할 수 있다. 
//지금 원하는 디렉토리는 파일이 위치한 index.js 뒤에 /views가 붙는 형태이다.
const express = require('express');
const app1 = express();
const path = require('path');  //노드에 내장된 모듈인 path가 필요하다

app1.set('view engine', 'ejs');
app1.set('views', path.join(__dirname, '/views')) //app1.set을 쓰고  path에 join이라는 메서드를 쓴다
//그다음 path.join 인수에 __dirname 을 쓰고 , 'views' 를 쓴다.
//그러니까 이 index.js라는 파일이 있는 현재디렉토리를 가져와서 /views 를 붙여주는거다
//아직 이해가 안되니 그냥 외우는걸로..
app1.get('/', (req, res) => {
    res.render('home')  //viwe엔진을 ejs로 설정하면 .ejs파일을 찾고있다는걸 알아서 'home.ejs' 쓸필요없다
})
app1.listen(4000, () =>
    console.log('LISTENING ON PORT 4000'));

// 이제 상위 디렉토리에서도 node 55/index.js 실행하면 localhost:3000에 응답 보낼수있다.
// path라는 모듈은 파일과 디렉토리 경로에 관한 메서드를 제공.
// path.join은 여러경로를 하나의 경로로 만듦.
// __dirname은 index.js 가 있는 디렉토리의 이름을 말함.



// ejs 태그 <%= LION %>  태그사이의 값이 출력됨 LION 
// ejs 사이트를 보면 Tags 라는 설명섹션이있다 <%  <%_ <%= 이런 태그들이 있고
//HTML이 아니니 HTML로 취급하지 말라는 뜻의 태그들이다
// 처음 배울 태그는 <%=  %>  태그사이에 코드를 넣으면 그안의 값은 템플릿으로 출력됨

//Node.js 에서는 템플릿이란 어떤 의미일까 ?  HTML 태그로 이루어진 기초 문서를 의미한다.
//그 중 일부를 필요한 정보로 채워넣는 것.

//<h1>the home page <%= 4+5+1 %>  </h1 >    home.ejs HTML파일에 ejs태그를 썼다
// 여기 4+5+1 은 js로 취급되고 계산해서 10이 돼서 출력된다
// localhost:4000 을 보면  the home page 10  출력
// <h1>the home page <%= 'helloworld' .toUpperCase() %> </h1>
// the home page HELLOWORLD 출력

//ejs language support 확장자 설치
// ejs파일에서 <%= ejs태그를 썼을때 구문에 하이라이트가 들어가서 js라고 표시해준다



//템플릿에 변수 전달하기
const app2 = express(); //위에const express = require('express') 썼으니 또쓰면안됨

app2.set('view engine', 'ejs');
app2.get('/rand', (req, res) => // localhost:5000/rand 입력하면 
    res.render('random'));   // random.ejs 페이지로 응답
app2.listen(5000, () =>
    console.log('LISTENING TO PORT 5000'));

// <h1><%= Math.floor(Math.random() * 10) + 1 %></h1 >  random.ejs 내용
// localhost:5000 입력하면  h1크기로 랜덤숫자 나옴

//하지만. 템플릿에서 로직을 최대한 제거해서 쓰는게좋다. 숫자를 먼저 만들어 변수에 저장한뒤 템플릿에게
//전달하는거다.
const app3 = express();
app3.set('view engine', 'ejs');
app3.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;  //랜덤숫자를 먼저만들고 num변수에 저장
    res.render('random', { rand: num })  //두번째 인수에 키-값 객체를 넣는다. rand키,num값
})  //두번째인수에 { num: num }키와값을 동일하게 { num } 이렇게써도됨

//res.render 첫번째인수=파일이름 , 두번째인수={사용할변수이름:값}  이렇게쓰면 연결된 random.ejs파일에서
//rand를 변수로 사용할수있다.  <%= rand %>       
//localhost:8080 보면 랜덤숫자 출력.

app3.listen(8080, () => {        //포트번호 조심 .. 6000쓰지말기 8080은 잘작동
    console.log('LISTENING TO PORT 8080')
})

// 포트에대해서..※   구글이 가끔 특정포트를 막아놓는경우가 있다고한다  6000포트 막혀있어서 한참 애먹었다


//subreddit 템플릿 데모
//const express=require('express')
const app4 = express();
// const path = require('path');

app4.set('view engine', 'ejs');
app4.set('views', path.join(__dirname, '/views')); //상위디렉토리에서도 파일에 접근할수있게 경로를만듦

app4.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})
//const { subreddit } = req.params;     :subreddit이 매개변수이고 그값이 req.params에 저장됨
//그래서 구조분해를 통해 {subreddit:req.params } subreddit을 키로, 매개변수 값을 사용할수있음  
app4.listen(2000, () =>
    console.log('LISTENING TO PORT 2000'))

//그리고 subreddit.ejs파일에  <h1>Browsing The <%= subreddit %> subreddit </h1>  랜더링함
//localhost:2000/r/dully  엔터치면 Browsing The dully subreddit 응답



//ejs 태그 <% %> 태그 사이 코드 출력되지않고 js 로직으로 취급 / 템플릿에 추가하지않는 구문.
//     < h1 >  <%= rand %>  </h1 >      rand값 출력
//     <% if (rand % 2 === 0) { %>    이 태그는 출력되지않고 js 로직으로 취급
//         <h2>That is an even number!</h2>    얘는 HTML이라 태그 필요없음
//         <% } else { %>              js로직을 한줄한줄 <%   %> 태그로 감싸줘야함
//             <h2>That is an odd number!</h2>
//             <% } %>
//     <h3> That number is : <%= rand%2===0 ? 'even' : 'odd' %></h3>     출력되니까 <%= 이태그씀
//    삼항연산자 rand가 짝수가 true면 첫번째 출력 'even'  , false면 두번째 출력 'odd'
 

//삼항연산자  rand%2===0 ? 'even' : 'odd'
// 불리언이 true면 첫번째 문자열 출력, false면 두번째 문자열 출력. 불리언뒤에 ? 물음표 필요


//if (rand%2 ==0){       ejs태그 쓸때, 일반 js구문이라고 생각하고 양옆에 <% %> 태그로 감싸주기만하면됨
//    }


