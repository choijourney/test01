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



// ejs 태그 <%= EJS %>
// ejs 사이트를 보면 Tags 라는 설명섹션이있다 <%  <%_ <%= 이런 태그들이 있고
//HTML이 아니니 HTML로 취급하지 말라는 뜻의 태그들이다
// 처음 배울 태그는 <%=  %>  태그사이에 코드를 넣으면 그안의 값은 템플릿으로 출력됨

//Node.js 에서는 템플릿이란 어떤 의미일까 ? 그건 바로 HTML 태그로 이루어진 기초 문서를 의미한다.
//그 중 일부를 필요한 정보로 채워넣는 것.
