//포맷과 JSON      포맷은 형식에따라 배열하다,만들다. 라는뜻 (resetcss같은 개념인것같다) 
//우리가 배울 API들은 모두 JSON 포맷을 이용한다.
//API가 데이터를 전송할때 쓰는 비밀스러운 포맷인데 html,css,js보다 경량화된 다양한 포맷이 있다.
//데이터만을 제공하기 위해 존재한다 스타일,js이벤트,마크업(태크)도 없고 오직 데이터만 있다
//흔히 쓰는건 두가지인데 시간이 지나며 바뀌었다 초기에 유명했던 포맷은 XML인데
//ASYNCHRONOUS , JAVASCRIPT , AND , XML 의 줄임말로 AJAX 라고도 한다.
//요즘 개발자들이 쓰는 포맷은 JSON 으로  AJAJ 이다. 입에 달라붙지않아서 계속 AJAX라고 부르는데
//실제론 XML이 아닌 JSON을 의미한다. 
//JSON 은 JAVA SCRIPT OBJECT NOTATION 의줄임말로 JS객체문법을 뜻한다
//이름에 JAVASCRIPT가 있어서 JS와 관련있어 보이지만 전혀 아니다
//JSON은 계속해서 데이터와 정보를 전송하는 포맷일뿐이다
//js와 비슷하고 js객체 구문을 기반으로 하며 중괄호와 키-값을 갖는게 유사하다
//차이점은 키에 큰따옴표를 쓴다는 것이다. 
// {"Name":"Super hero squad",    
// "formed": 2016,
// "active": true
// }
//js에선 키에 큰따옴표를 쓰지않고 만약 쓰더라도 JSON에서 유효하지않다. 
//json 값으로 문자열,숫자나 객체,배열,불리언,null을 쓸 수있다.
//undefined가 없다. undefined를 쓰면 문자열로 인식해서 큰따옴표를 붙여 반환한다.
//API에서 데이터를 가져오면 처음엔 Json객체라서 키가 문자열이다. 그 상태로 값에 접근하기가 힘드니
//js객체로 변환을 시킨다.

//json.parse  라는 메서드를쓴다. 문자열을 전달하면 파싱되어 js객체로 변환된다
//json.stringify 는 반대로 js객체를 json객체로 바꾼다
//json 객체의 데이터를 받는 API도 있는데 그때 이메서드를 써서 정보를 보내면 된다.
//이때 js에 undefined가 있으면 null로 변환된다.


//postman ,Hoppscotch   HTTP 요청을 해서  API들을 테스트하고 요청을 저장하는 도구
//개발자가 API 요청을 테스트하는데 쓰인다 두개다 비슷한데 postman을 주로 쓰는것같다.

//API사이트에 직접 들어가서 데이터를 받을수있는데 postman을 사용하는게 더낫다.
//postman에 get으로 설정한후 url에 주소를 넣고 send를 누르면 html을 보내온다.
//일반적으로 html이아닌 json응답을 받는 요청을 보낼거다
//https://swapi.dev/api/ 베이스url을 뒤에 /people/1 엔드포인트를 붙여쓴다음
//send를 누르면 json객체가 나온다. 
// {"name": "Luke Skywalker",
// "height": "172"}
// 요청을 보내고 데이터를 받고 확인한다


//프록시서버- 고객이 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할수 있게 하는 컴퓨터시스템


// HTTP verbs동사   요청할때 쓰는 동사들
//postman에 url창옆에 드롭다운을 펼쳐보면 GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS 같은 동사가있다
//https://catfact.ninja/#/ 이API사이트 목록을 보면 고양이Breeds(품종)에대한 데이터를 받을수있는데 
//GET이라고 써있고 GET요청밖에 못한다. POST요청을 하면 404오류가 뜬다.
//GET요청은 정보를 가져올때 사용한다.
//POST요청은 데이터를 어딘가로 보낼때 사용한다. post단어 뜻을 생각해보면 된다. 데이터를 보내서 
//데이터베이스와 같은 특정공간에 저장한다.
//DELETE요청은 API를 통해 뭔가를 삭제할때 사용.


//HTTP Status 상태코드 
//200번대 상태코드는 문제가 없다는 뜻. 200 ,201,202  ..
//300번대는 리디렉션을 했을때 뜬다. 예를들어 google.co 으로 입력해도 google.com 으로 이동한다.이게 리디렉션.
//4로 시작하는 400번대 코드는 클라이언트쪽 오류이다 
//404 존재하지않는 url로 요청을했을때(스펠링을틀릴때 등..) 찾을수없음 이 뜬다.
//405 메서드가 허용되지않음  url은제대로요청했지만 GET이아닌 POST요청은 지원하지않을때 뜬다.
//500번대는 서버쪽 오류이다 우리가 뭔가를 잘못해서 API에 문제가 발생한거다
//200번대가 제일 좋고 그중 200이 제일좋다


//엔드포인트
// 베이스url https://swapi.dev/api    
//엔드포인트 /people/:id/     /people뒤에 숫자인id 가 들어간다   콜론은 변수를 표시하는방법중하나이다.   
//        /people/{{id}}    //people/<id>  모두 id로 대체하라는 표현방식이다.
//https://swapi.dev/api/people/5/  이런식으로 id자리에 숫자를 넣고 입력하면
//5번째 인물의 정보가 나온다.

//쿼리문자열 
//url에 추가정보를 적기위에 물음표를(쿼리문자열) 쓸수도있다.
//굳이 쿼리문자열에 추가한 값이 필요하지않는 이상 웹사이트,서버나 API는 쿼리 문자열을 무시한다
//https://swapi.dev/api/people/5?color=green&age=23 
//?물음표다음은 키-값 &앰퍼샌드로 구분 키-값    이렇게쓴후 send를 누르면
//https://swapi.dev/api/people/5/ 이url을 요청했을때와 같은 정보가 나온다. 쿼리 문자열을 무시함
//베이스url은 오타하나만 나도 API가 오류를 띄우지만 ?물음표뒤부턴 어떤것을 적어도 신경을 안쓴다

// 쿼리문자열이 필요한 API가 있다 
// https://www.tvmaze.com/api  tv프로그램 데이터를 받을수있는 API가있다
//   /search/shows?q=:query     :query 변수에 검색어를 넣어야한다.
// https://api.tvmaze.com/search/shows?q=dragon  dragon을 넣어서 요청했더니 dragon을 포함한 정보를준다

// schedule 이라는 쿼리의 경우 특정국가의 특정날짜에 방영하는 에피소드 목록을 띄운다 
// /schedule?country=:countrycode&date=:date  국가와 날짜를 입력한다
//https://api.tvmaze.com/schedule?country=US&date=2022-12-01 이날 방송한 목록이 뜬다.
// 일부 엔드포인트에는 쿼리문자열을 여러개 넣어야하는데 그럴땐 &앰퍼샌드로 구분하면된다


//postman에 베이스url만 https://api.tvmaze.com/schedule 입력하고
//그 아래 네모박스를 보면 parameter 라는 key와 value를 쓰는 칸이 있다.  key에 contry , value에 us, 
//또 key에 date, value에 2022-12-01 를 입력하고 send를 누르면 
//https://api.tvmaze.com/schedule?country=US&date=2022-12-01 주소로 요청했을때와 똑같이 나온다.
//네모박스 왼쪽에 체크박스가 있는데 체크를 하면 쿼리문자열에 추가돼고 체크를 없애면 삭제된다.


// HTTP Header
//특정 API에선 헤더를 보내야한다.
//예를들어 icanhazdadjoke.com 아재개그를 랜덤으로 주는 사이트가 있다.
// icanhazdadjoke.com 이게 엔드포인트이고  
// json으로 정보를 받고싶으면 헤더가 필요하다
//헤더가 필요한지는 API사이트마다 다르기때문에 읽어봐야 알수 있다 
//Accept라는 헤더를 지정해야하고 application/json 으로 설정해야 한다고 써있다.
//postman에 headers를 클릭하고 key에 Accept , value에 application/json 를 입력한후 send를 누르면
//아재개그를 보내준다.


// 생성자와 new키워드   함수 앞에 new를 붙이면 그 return 값은 객체가 된다. 
const person1 = {
    'name': '도날드 트럼프',
    'introduce': function () {
        return 'My name is ' + this.name;
    }
}

const person2 = {
    'name': '조 바이든',
    'introduce': function () {
        return 'My name is ' + this.name;
    }
}
//조 바이든이 아닌 다른이름을 담고싶으면 객체를 이런방식으로 찍어낼수도 있지만 변경할 경우가 생긴다면
//객체마다 하나하나 찾아서 바꿔줘야 하기때문에 유지보수가 어렵다. 그리고 코드의양이 너무많다.
//이런 코드 중복을 피하기 위해 나온것이 생성자와 new 이다.
// let p = new person();     여기선 함수를 정의한게 없어서 작동하진않는다
// console.log(p);
// 위와 같이 new를 앞에 붙이고, 함수를 호출하면, 이 함수를 그냥 함수라고 하지 않고, 생성자라고 부른다.
// 더 정확하게는 객체의 생성자이다. 새로운 객체를 만들게 된다.
// 예제에서 생성자는 person() 베이스로 만든 객체를 return한다.
// 함수 앞에 new를 붙이면 그 return 값은 객체가 된다.

function Person(name) {               //생성자함수는 함수이름 첫글자를 대문자로쓴다
    this.name = name;         //this.name은 키  , name은 값
    this.introduce = function () {   //this.introduce는 키, 함수는 값
        return 'My name is ' + this.name;
    }
}
let p1 = new Person('조은길');  // new를 써서 객체를 생성한다  
console.log(p1.introduce());     //p1객체에서 introduce값 출력    My name is 조은길

let p2 = new Person('트럼프');
console.log(p2.introduce());


//fetch  js에서 코드로요청하기  GET요청이 자동으로 실행됨   
//예전엔 XML HTTP request방법으로 js에서 요청을 했는데 구문이 어렵고 promise나 비동기함수를 지원하지않는다
//fetch함수는 promise를 지원한다
fetch("https://swapi.dev/api/people/1")       //fetch함수를 호출하면 promise반환됨
    .then((res) => {
        console.log('RESOLVED!', res)
        return res.json();   //people1객체정보를 얻으려면 res.json()를 써야하고 res.json()는
    })                       //promise를 반환해야해서 
    .then((data) => {           //then이 필요하다
        console.log(data)
        return fetch("https://swapi.dev/api/people/2") //people2 정보를 반환한다
    })
    .then((res) => {                       //fetch는 promise를반환하니까 then을 쓴다
        console.log('SECOND RESOLVED!', res)
        return res.json();
    })
    .then((data) => {           //res.json()을써서 then이 필요하다
        console.log(data)
    })
    .catch((e) => {           //오류가 나면 출력
        console.log('ERROR', e);
    });
// RESOLVED!  와 people1 인물정보가 출력된다
// {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
//만약 people1이 처리가 안되면 2도 안된다 

//만약 res.json() 을 안적고 요청을 보내면 반환된객체에 people1인물에대한 정보가 없다  body:ReadableStream
//이렇게만 적혀있다. 응답객체의 본문이 자동으로 구문분석되지 않아 .json() 을 호출해야한다
//res객체를 가져오는 fetch함수의 메서드이다. promise를 반환해야돼서 then을 써야한다

//비동기함수로 재작성
const loadStarWarsPeople = async () => {
    try {
        const res3 = await fetch("https://swapi.dev/api/people/3");
        const data3 = await res3.json();
        console.log(data3);
        const res4 = await fetch("https://swapi.dev/api/people/4");
        const data4 = await res4.json();
        console.log(data4);
    } catch (e) {
        console.log('ERROR!!', e)
    }
}
loadStarWarsPeople();


// Axios  더편한게 js로요청하는방법  타사 라이브러리로 js에서 제공되는 함수가 아니라 추가로 빌드해야함
//https://github.com/axios/axios#installing 여기에 접속해서 CDN을보면 using jsDeliver 
// <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>  
// ↑ import해서 코드에 추가하면 연결된 js파일에서 axios를 쓸수있다
//axios.get 을 쓰면 GET요청을 보낸다.
axios.get("https://swapi.dev/api/people/5")
    .then((res) => {
        console.log('response', res)
    })
    .catch((e) => {            //catch 로 오류를 잡아줘서 오류가있어도 다음코드를 실행한다
        console.log('ERRORR!', e)
    })

//한번에 people5정보가 담긴 객체가 나온다 .json으로 구문분석을 할필요도 없다
//객체안에 data: {name: 'Leia Organa', height: '150'}  data에 정보가 있다

// 비동기함수로 리팩토링
const getStarWarsPerson = async (id) => {
    const resid = await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log(resid.data);   //data특성을 출력할거니까 .data 씀
}
getStarWarsPerson(6);  //data객체 출력 {name: 'Owen Lars', height: '178'}
getStarWarsPerson(7);
