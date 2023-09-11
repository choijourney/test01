// express 패키지
// 새폴더를 만들고 그 디렉토리에서 git을 작동시키고  npm init -y 을 써서 package.json 을 만든다
// npm init -y 를쓰면 엔터를 칠 필요 없이 package.json이 바로생긴다
//앱이름에는 대문자를 쓰면 안된다. 혹시 package.json의 name에 대문자가 들어갔다면 소문자로 수정한다
//그다음 npm i express 를 써서 다운받는다 

const express = require('express');
const app = express()      //express사이트에서 가져온 코드

app.listen(3000, () => {    //listen 서버를 실행하는 메서드
    //3000은 포트번호 / localhost:3000  주소창에 가져다쓴다  /원래는 첫째인수에 url을 넣어야한다
    console.log('LISTENING ON PORT 3000!')
})
//node index.js 로 실행시켜보면 콘솔에 LISTENING ON PORT 3000! 출력되고
//google에 요청을 하려면 google의 url을 첫번째 인수에 쓸텐데
// url이 없는 상태라서 내 컴퓨터의 로컬 서버로만 작동을 한다. 그래서 주소창에 localhost:3000
//이렇게 적고 테스트를한다.  서버는 있지만 응답을 못받으니까 Cannot GET /  이 뜬다.
//google에 존재하지 않는 페이지를 요청했을때와 같다. 이때 개발자도구의 네트워크 탭에서 페이지를 새로고침하면
//상태코드 404가 뜬다. 요청을 받고있고 실행하는 서버가 있지만 응답할 콘텐츠가 없는상태이다.
//참고로 다른 포트로 가면 4000으로 테스트를 하면
//완전히 다른 오류 메시지가 뜨는데 요청할수있는 서버가 없다는 의미이다
//다른 포트번호도 쓸수있긴하다 8080을 listen 인수에쓰고 local:8080 하면 서버가 실행된다

app.use(() => {
    console.log('we got a new request!!')
})
// 목표는 요청을 받고 응답을 내보내는 것이다
// 이제 app.use 코드를 추가하고 콜백을 입력한다
// 이 app.use 메서드의 작동방식은 요청이 들어오면 콜백이 실행되는거다
// 요청이 어디서 오든 상관없이 요청이라면 모두 작동한다
// / home이든 / dog나 / contact이든 간에, get 요청이든 post 요청이든 뭐든 상관없다

// 커서가 멈춰있는 git을 ctrl+c로 나가기한후 node index.js를 쓰고  localhost:3000을 주소창에입력한다
//서버에 요청을 보낼때마다 (엔터를 치거나 새로고침할때)
//"WE GOT A NEW REQUEST!!" 가 출력된다


//단일응답 use
// 콘텐츠로 응답하기 위해서는 중요한 두 가지 객체를 알아야 한다
// Express에 만들어져 있고 들어오는 모든 요청은 이 함수에서 자동으로 전달되는 두 개의 매개변수에 접근한다
const app1 = express();
app1.use((req, res) => {  // 첫번째는 들어오는 요청을 의미하는 객체 request 이고
    console.log('We GOT A NEW REQUEST~')     // 두 번째는 응답을 의미하는 객체이다 response
    // 이름은 원하는 대로 지어도 되지만, req와 res를 보편적으로 사용한다
    // res.send('HELLO,WE GOT YOUR REQUEST!!')   이문구로 응답해준다
    //res.send({ color: 'red' })                
    res.send('<h1>THIS IS MY WEB PAGE!</h1>')  //h1글자크기로 응답이 나타난다
})

app1.listen(8080, () => {
    console.log('LISTENING ON PORT 8080!')
})
// 이 객체는 Express로 만들어져 콜백에 전달된다
// HTTP 요청은 JavaScript 객체가 아니고 텍스트 정보이다 어떠한 프로그래밍 언어도 아니다
// 하지만 Express는 그텍스트를 변환한다 파싱해서 전달할 객체로 변환하는 거다
// 이 경우는 app.use의 콜백 함수에 전달된다
// console.dir(req) 를써서 객체를 보면 많은 정보객체가 나온다 그중 경로인 pathname:'/' 도 있고.
// 헤더도있고 내용이 많지만 기억할것은  HTTP 요청 정보를 파싱해 JavaScript 객체를 만들고
//그걸 콜백의 첫 번째 인수로 전달한다는 것이다


//응답객체
// Express 참고서를 보면 요청, 응답에 관한 모든 게 있다
// 요청객체에 사용할수있는 메서드 , 응답 객체에 사용하는 메서드들이 있는데
// res.send로 응답을 할수있다. reponse도 되고 보통은 res라고 한다
// 위처럼 app1.use(req,res)함수에 res.send('HELLO,WE GOT YOUR REQUEST!!') 를 쓰고
// 주소창에 localhost:8080 엔터치면  // HELLO, WE GOT YOUR REQUEST!! 을 응답한다!
// Postman에서 localhost: 8080을 적고 Send를 누르면 똑같은 메시지로 응답을 준다
// 헤더를 살펴보면 Express가 자동으로 콘텐츠 타입을 HTML로 설정했다
// 날짜도 있고 콘텐츠 길이는 48이다.

//이번엔 js객체를 send에 넣어본다
//res.send({ color: 'red' }) 코드를 변경하면 서버를 재실행해야한다 node index.js 한후에
//localhost:8080 엔터치면  { color: 'red' } 이객체로 응답을 준다.
//이때 postman 헤더를 보면 contenttype이 application/json; 으로돼있다

//res.send('<h1>THIS IS MY WEB PAGE!</h1>') 코드변경후 서버재실행 후 localhost:8080을 새로고침하면
//THIS IS MY WEB PAGE!   h1글씨크기로 글자가출력된다


//express 라우팅 기초  요청에 맞는 응답 보내기
// 라우팅은 요청과 요청된 경로를 가져와서 응답을 어떠한 코드에 맞추는것을 말한다.
// 예를 들어 /dog 이라는 요청을 보내면 'woof' 라는 응답을 보내게 하는것을 라우팅 이라한다.

//get요청
const app2 = express();
app2.get('/cats', (req, res) => {     //node index.js 실행하고 local:4000/cats 엔터치면 
    res.send('meow~')             //meow~ 응답줌
})
app2.get('/dogs', (req, res) => {
    res.send('mung mung!')
})
app2.get('/', (req, res) => { //일반적으로 / 는 루트 라우트를 의미함. 경로 이름 없이 베이스url일때. 
    res.send('this is the home page!')
})
app2.listen(4000, () => {       //local:4000 서버만듦
    console.log('LISTENING ON PORT 4000!')
})

// req는 들어온 HTTP 요청을 기반으로 Express가 생성한 객체이다
// res도 Express가 생성한 객체로 둘 다 콜백에 전달된다
// 다양한 응답 메서드에는 res.send이 포함되어 있는데 응답하는 콘텐츠를 내보낼 때 쓴다


//post요청  get요청과 같은방식이다
app2.post('/cats', (req, res) => {
    res.send('post cat !')
})
//브라우저에선 get요청을 받으니까 'meow'응답이 나오지만
//postman에서 post요청을 보내면 'post cat!' 응답이 나온다.



//제네릭응답
//존재하지 않는 라우트를 요청하면 Express로부터 Cannot get 응답을 받는다. 상태 코드 404인 경우이다.
//제네릭 응답을 만들어서 만든 라우트와 일치하지 않을 때 응답하도록 할 수있다

// app2.get('*', (req, res) => {    //  /cats,/dogs,/ 말고 다른경로를 쓰면
//     res.send(`I don't know that path!`)   //출력
// })

//이 코드가 끝에 오는 게 중요. 가장 위에 작성하면 아래 코드는 모두 무시
//왜냐면 *뜻이 모든 인데 맨위에 있으면 순서대로 코드가 실행되니까 모든 요청과 맞는 이 코드가 응답한다



//express 경로 매개 변수

app2.get('/r/:subreddit', (req, res) => { //문자열 앞에 콜론을 쓰면 변수로 쓸수있다 subreddit은 매개변수
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`)
}) //  req객체에 subreddit은 매개변수특성으로 저장되고 그값을 구조분해로저장

// reddit을 똑같이 만든다면 app2.get('/r/ dogs'), ('/r/puppies')를 일일이 적지 않을 거다
// 대신 제네릭 패턴을 정의할 거다. 문자열 앞에 콜론을 쓰면 변수로 쓸수있다. :subreddit
//subreddit변수는 경로이다 경로에 엑세스하려면 req객체를 통해 가능하다.
//express가 req 객체를 생성하고 params라는 특성을 추가한다. 
//const { subreddit } =req.params 를 쓰고 구조분해를 해서 값을 subreddit에 저장한다
//값은 cats 이런형태로 매개변수,경로이다.   params는 매개변수를 뜻한다.

//localhost:4000/r/bread  주소창에 요청하니 Browsing the bread subreddit 응답


// 경로 매개변수를 여러개 설정할 수 있다
app2.get('/r/:subreddit/:postId', (req, res) => {  //subreddit과 postId는 매개변수
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post Id:${postId} on the ${subreddit} subreddit </h1>`)
})


//쿼리 문자열 작업하기
app2.get('/search', (req, res) => {  //경로에 쿼리를 추가하지않는다
    const { q } = req.query;   //구조분해해서 q=값 으로 객체에 저장
    const { color } = req.query;
    if (!q || !color) {    //q나 color 둘중 하나라도 없으면  
        res.send(`there's not path sorry`)
    }
    res.send(`Hi i found a ${color} ${q}`);
})
//쿼리란 URL의 일부로 물음표 뒤에 위치하며, 키 - 값 쌍으로 정보를 담는다
// 라우트를 정의할 때 경로에 '/r/:subreddit' 쿼리 문자열을 추가하지 않는다
// 대신 Express가 구축하고 콜백으로 전달되는 req 객체가 있다. req 객체에는 쿼리라는 특성이 있고
// 그 특성에서 쿼리 문자열을 기반으로 만들어진 키 - 값 쌍을 찾게 될 거다  req.query

//localhost:4000/search?q=cat&color=green   q를 키로,cat을 값으로 객체에저장
//주소창에 요청하면 hi i found a green cat 응답
//앰퍼샌드로 여러 키-값 쌍을 쓸수있다


// nodemon패키지를 이용한 자동 서버재시작
//여태는 코드를 변경하면 git에서 node index.js 를 써서 서버를 재시작 해야했었다
//하지만 자동 서버재시작 해주는 패키지가 있다
// nodemon패키지를 다운받으면 된다  npm i -g nodemon   글로벌로 다운받는걸 추천
// nodemon index.js 를 한번 입력하면,  코드를 변경하고 저장만 하면
// 서버가 자동으로 재시작 된다.