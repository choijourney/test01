//Get 요청과 Post 요청
// Get 요청은 정보를 가져오고 페이지를 가져와서 화면에 띄우는 것이고
// 기본적으로 백 엔드에 영향을 주지 않는다 Post 요청과 비교했을 때 생성, 삭제, 업데이트를 안한다
// Post 요청은 회원 가입 같이 계정을 등록해 생성하거나
// 블로그에 댓글을 쓰기 위해 데이터를 보낼 때 쓴다
// Post 요청을 보낼 때 크기나 포맷에 있어 유연성을 갖는다



// post 요청은 요청값을 req.body에 객체로 저장한다
//만약 입력창에 meat: beef  qty: 4 를 입력했다면 req.body에 {meat: beef , qty: 4 } 객체로저장되고
//const { meat, qty } = req.body;  구조분해해서 키,값으로 이용할수있다.
const express = require('express');
const app = express();

app.use(express.json()); // post요청시 json을 전송해서 요청하기.
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

// getpost사이트에서 입력창에 beef,4 입력하고 제출하면  OK, here are your 4 beef taco._.  응답

//postman에서도 post요청해서 요청값을 req.body에 저장할수 있다 (키-값 객체로 저장)
//git에서 nodemon index.js 로 서버실행후 postman에서 send눌러야 작동함
//postman의 Body 클릭,  x-www-form-urlencoded 클릭 후 키값 작성 후 제출.
//console.log(req.body)쓰면 { meat: 'd', qty: '1' }  객체출력

//postman에서 json을 전송해서 요청하기.
//app.use(express.json()); 이코드를 써야 postman에서 json을 전송해도 작동이된다
//postman에서 body클릭- raw 클릭 - 맨오른쪽 text드롭다운해서 json으로변경후 json데이터작성후 제출.


//REST  representational state transfer 구상주의적 상태 이동..?
// 클라이언트와 서버가 어떻게 서로 소통해야하는가에 대한 가이드라인,원리이다. 웹,앱을 설계할때 따르는 원칙이다
//클라이언트 서버 커뮤니케이션을 위한 일련의 규칙이다.
//자원을 이름으로 구분해 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미(블로그에서가져옴)
//rest가 가이드라인이라면 restful은 rest규칙에 따르는 시스템이다.

//restful api
//REST의 설계 규칙을 잘 지켜서 설계된 API를 RESTful한 API라고 한다
// 설계 규칙에는 URI는 리소스를 표현해야 하며 명사를 사용하고, 슬래시로 계층 관계를 표현할 것,
// 소문자로만 구성할 것 등이 있고 HTTP Method로 표현해야하며 HTTP 응답 코드로
// 클라이언트에게 피드백을 해줘야 한다



//RESTful   index로 모든댓글 보기  맨아래 restful표 참조
//댓글 리소스의 restful 라우트를 구현해보자 ! restful방식으로 앱을 구조화하는 방법은 여러가지가있다
//getpost1.html 과 연결됨
//첫째로 ejs추가 npm i ejs  다음 app.set('viwe engine','ejs') 설정  다음 views디렉토리 만듦
const app1 = express();
const path = require('path');   // 그다음 views디렉토리를 절대경로로 쓸수있게 설정
const { v4: uuid } = require('uuid'); //uuid패키지 uuid를호출할때마다 범용고유식별자가생김(긴id)
const methodOverride = require('method-override');  //patch,delete,put요청을 가능케하는 패키지

app1.use(express.json());
app1.use(express.urlencoded({ extended: true }))
app1.set('views', path.join(__dirname, 'views'))
app1.set('view engine', 'ejs');

let comments = [      //그다음 댓글 목록을 만들고   
    {
        id: uuid(),          //uuid를 호출할때마다 새로운 범용고유식별자가 생김 (긴id로)
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: ' I like to gi birdwathching with my dog'
    },
    {
        id: uuid(),
        username: ' sk8erBoi',
        comment: 'Plz delete your account,Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]
//views디렉토리에 comments폴더를만들고 그안에 index.js를만듦
app1.get('/comments', (req, res) => {
    res.render('comments/index', { comments }) //위에 댓글객체를 index.ejs한테 전달
})

app1.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app1.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} taco._.`)
})

app1.listen(4000, () => {
    console.log('ON PORT 4000!')
})

// < ul >                              index.ejs에서 모든댓글에 루프를 씀
//     <% for (let comm of comments) { %>
//      <li>
//           <%= comm.comments %> - <%= comm.username %>     comments객체의 키를이용
//      </li>
//       <% } %>
// </ul >

//lol that is so funny! - Todd         localhost:4000/comments 엔터치면 댓글들 모두출력

//이것이 기본 index라우트이다  CRUD중 Read 모든댓글을 읽을수 있게함.



// RESTful   new로 get요청,새댓글만들기위해 폼만듦  /comments로 post요청 서버에 새댓글추가
// CRUD 중 create 새로운 댓글 생성하는 방법.       위 댓글객체내용 반복.
//new.ejs를 만든다. 보통 new를 쓴다. 
app1.get('/comments/new', (req, res) => {  // 경로 localhost:4000/comments/new 를 주소창에입력하면
    res.render('comments/new')        // comments디렉토리의 new.ejs를 제공함
})         //new.ejs엔  input form을 만들어 댓글을 입력하게끔 만들어놓음
app1.post('/comments', (req, res) => {
    const { username, comment } = req.body; //변수이름 comments, 객체키이름 comments 똑같았을때 오류남
    comments.push({ username, comment, id: uuid(), })  //그래서 객체키이름 comment로 바꿈
    res.redirect('/comments')   // /comments로 데려가라는 리다이렉트
})

//정리 ->  app1.get요청으로 localhost:4000/comments/new 에 접속하면
// username,text 쓸수있는 댓글입력창이 뜬다(new.ejs파일)
//댓글을 작성하고 submit하면 localhost:4000/comments로 자동위치되고 제출된다 (post요청)
// 새댓글은 push로 comments객체에 추가되게했고 리다이렉트로 새댓글이 추가된 /comments로 자동연결된다


//express 리다이렉트
//댓글을 작성하고 submit하면 localhost:4000/comments로 자동위치되고 제출된다(post요청)
// It WORKED! 출력되고 새로고침하기위해 엔터치면 댓글리스트와 입력한 댓글이 추가된것을 볼수있다.
//여기서 새로고침하면 댓글이 중복으로 /comments에 제출되는 오류가 있다. 그래서
//submit 하자마자  /comments 가 나타나게 redirect 하면된다.
//res.redirect('/comments')
// Chrome에서 Network 탭을 보게 되면 두 가지가 변경된 걸 알 수 있다
// 첫 번째 응답은 302 상태 코드가 나와서 리다이렉트됐고 또 /comments라는 헤더도 포함됐다
// 즉 브라우저가 이걸 보고 이 /comments 위치로 가야겠다고 판단해서 거기로 간다
//리디렉션 상태 코드가 포함되는데 기본 값은 302이고 따로 지정할 수도 있지만 기본은 302이다.


//index.ejs 댓글리스트파일 아래에
// <a href="/comments/new"> New Comment</a>
//new.ejs와 연결하는 링크. 댓글입력페이지로 연결.  사이트간 조금더 편리하게 이동할수있다



// show 라우트 (detail라우트)
//특정한 하나의 리소스에 대한 디테일을 주로 확장된 보기 형식으로 보여줌 (예를들어 목록페이지에서
// 디테일링크를 클릭하면 디테일한 페이지를 볼수있다)

app1.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    //경로에서 id를 가져다가 댓글객체(데이터베이스)에서 id를 찾아본다음 그 id를 이용해서 코드를쓸수있다    
    const comment1 = comments.find(co => co.id === id);  //parseInt를없애고 업데이트함
    //데이터객체에 uuid()를 사용해서 id를만들었고 uuid는 문자열을 반환한다 그래서 parseInt필요없이 id와비교함 

    //const comment1 = comments.find(co => co.id === parseInt(id)) parseInt지우기전
    //댓글배열에서 id를 비교해 그id에 해당하는 객체 하나만 찾을거다. 그러려면 배열메서드 find를쓰는게좋다.
    //co.id 는 comments의 id니까 숫자로 1 이 반환된다 그런데
    //req.params에 저장한 id객체를 이용하면 문자열로 반환되니까 parseInt를 써서 비교. 
    //find를 쓰면 비교값이 true라면 객체가 나온다. { id: 1 }        
    res.render('comments/show', { comment1 })
})

//배열메서드 find사용- 조건을 만족하는 첫번째 요소의 값을 반환.
//여기까지하면 localhost:4000/comments/1 (아이디)  접속하면 연결된 페이지가 나온다
//그런데 우리가 아이디를 먼저알고 페이지에 접속하는일은 별로없다 그래서

//index.ejs에 댓글옆에 detail이라는 링크를 만들었다
// < a href = "/comments/<%= c.id %>" > details</a >
//     링크누르면 /comments/1  이주소로이동  id를 숫자로설정함

//show.ejs에 댓글과 쓴사람이 나타나게함
// <%= comment1.comment %> - <%= comment1.username %>


// uuid패키지
// uuid참고서를보면 uuid.v1() uuid.v2() 등 각기 다른버전이 있는데 지금 필요한건 v4이다
//uuid.v4()를 쓰면 엄청 긴 ID가 나오는데 이 ID를 불러온 후에
//즉, 범용 고유 식별자를 가져올 함수를 호출하면 된다
//그러면 충돌이 생기지 않는다 예를 들어, 엄청 많은 댓글이 있더라도 각각 고유의 ID가 생기니까말이다
// npm i uuid 설치후 const { v4: uuid } = require('uuid'); 맨위 express요청 밑에 씀
// 데이터객체에 {id: uuid()}  로 저장하고 새댓글을 서버에올려주는 post요청에 id:uuid()를 랜더링한다
// uuid를호출할때마다 범용고유식별자가생김(긴id)
// localhost:4000/comments 엔터치면 Comment id: 1e6cb32b-38d1-4fff-9a14-8d5d29269d0b 이런id가생김


// Patch 요청  CRUD 중 Update에 해당함   댓글을 업데이트 해볼것이다
//put요청은 전체내용을 업데이트하고 patch는 부분적으로 수정한내용을 업데이트한다
app1.use(methodOverride('_method')); //patch요청을 쓸수있게 해주는 패키지 순서중요 먼저선언해야함
app1.patch('/comments/:id', (req, res) => {
    const { id } = req.params;   //url에서 id를 가져와 req.params객체에저장 (params는 :매개변수를저장)
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);  //id를 찾음    
    foundComment.comment = newCommentText; //id의댓글이필요하니까 id의댓글=req.body.comment를 정의해줘야함 
    res.redirect('/comments') // patch요청끝나면 리다이렉트
    // console.log(req.body.comment);
    // res.send('all good')
})
//postman에서 localhost:4000/comments/23 id로아무숫자나적고 body클릭해서 키에 comment , value에 heyman
//입력한후 send누름  콘솔에 heyman 출력 , 페이지응답으로 all good
//여기서 키에 데이터객체에서 사용하는 특성을 써야한다 (comment같은)

//댓글하나를 골라 postman에 url을 갖다붙이고 body클릭 키는 comment, value를 변경하고 patch요청을하면
//댓글이 바뀐다

//patch요청도 post처럼 req.body를 사용할수있다

// 지금배운 댓글을 업데이트하는 방식이 권장하지 않는 방식이다
// 배열에 있는 객체를 변형한 것인데 요즘의 웹 개발은 특히 JavaScript의 경우에는
// 객체를 변형하지 않는 불변성을 강조하는 추세이다


//method-override패키지를 이용해 patch요청 마무리하기  /edit 편집페이지
// /comments 페이지 댓글옆에 링크를 만들어서 댓글을 편집할 수있는 폼으로 이동하게 만들거다
//그런데 html폼은 method를통해 get이나 post요청만 전송할수있다  대신 patch인척 하는 방법이있다
//편집할거니까 파일이름을 edit으로 할거고 get요청을 쓴다
app1.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;   //id를 객체에 추가
    const fcomment = comments.find(c => c.id === id);
    //해당 id객체를 찾기 id,username,comment정보가들어있음
    res.render('comments/edit', { fcomment }) //연결될 편집페이지 폼에 미리 기존댓글을 추가해놓는다
    // 빈폼도 괜찮지만 기존댓글 중 딱 한글자만 바꾸고싶을수도 있으니까
})
//이제 edit.ejs에서 편집 템플릿을 만든다
//<textarea name="comment" id="" cols="30" rows="10"> <%= fcomment.comment %> </textarea>
//textarea태그 사이에 댓글을 넣어서 편집페이지 기본값으로 기존댓글이 출력되게했다
//form action 에 method로 patch요청을 보낼수 없으니 method-override 패키지를 쓴다
//put,delete등 http동사를 쓸수있게 해주는 패키지이다. npm i method-override
//const methodOverride = require('method-override'); 맨윗줄에 선언하고
//html 헤드를 이용하는방법, 쿼리문자열을 이용하는방법이 있는데  쿼리문자열값을 이용할때는
// app1.use(methodOverride('_method'))  패키지를호출하는데 지금쓴 patch를위한 코드들 보다
//앞에서 호출해야한다.
//_method는 쿼리문자열에서 찾으려는 문자열을 담을 매개변수
//이제 formaction=post 로 설정해도 patch요청으로 취급한다
//<form method="POST" action="/comments/<%= fcomment.id %>?_method=PATCH">
//위에쓴 patch요청의 경로를 쓰고 그뒤에 ?_method=PATCH 를쓴다 (delete등 다른요청써도된다)
//위에쓴 app1.patch를 보면 patch대신 post를 써도되는데 patch가 더 많이쓰인다

// localhost:4000/comments페이지에서 댓글 detail을 클릭해서 자동으로 id가 추가된 url이 뜨면
// url뒤에 /edit 을 쓴다 그럼 편집페이지가 나오고  lol that is so funny! 기존댓글이 보인다
// 기존댓글을 수정하고 save누르면 /comments 페이지로이동하고 바뀐 댓글을 볼수있다

// /comments페이지에서 detail 클릭하면 나오는 댓글 상세페이지인 show.ejs에 편집페이지링크를 추가
//<a href="/comments/<%= comment1.id %>/edit">Edit to Comment</a>


//method-override 패키지
//put,delete,patch등 http동사를 브라우저form에서도 쓸수있게 해주는 패키지이다.


// DELETE요청  댓글을 삭제함
//method-override패키지로 폼액션에서 ?_method=DELETE  삭제요청을 할수있다
app1.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);  //comments를 재할당하니까 let을씀
    //comments.filter로 delete라우트에있는 id와 동일하지않는 댓글의 id만 찾아서 새로운배열에 추가
    //그럼으로써 delete라우트의 id는 자동삭제
    res.redirect('/comments')
})
// show.ejs(디테일페이지) 에 폼을만들어 post요청을하고 delete요청도함
// <form method="post" action="/comments/<%= comment1.id %>?_method=DELETE">
// method=post 를 써도 delete요청을 해준다길래 post는 아무기능을 안하는줄알고 지우니까 실행이안된다
// post요청을 쓰고 delete요청도 쓰기 일단 요청을 보내야하니까 post요청을 쓰는듯..?


// localhost:4000/comments 접속 - 아무댓글디테일 클릭 - delete 클릭 하면 /comments로 이동되고
// 해당 댓글이 삭제돼있음


//restful
// name      path                verb        purpose
// index   /comments             get     display all comments
// new     /comments/new         get    새댓글만들기위해 폼만들기
// Create  /comments             post    서버에 새댓글을 만들기
// show    /comments/:id         get      details for one comment
// edit    /comments/:id/edit    get     하나의 댓글을 편집하기위해 폼만들기
// update  /comments/:id         patch   부분적 수정 업데이트
// put                                    전체내용을 업데이트
// destroy /comments/:id         delete   deletes specific item on server