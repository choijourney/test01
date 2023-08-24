//rest  ... 점세개를 이용하는게 스프레드와 같지만 기능은 다르다.
//rest 를 알려면 arguments를 알아야한다 

function sum(a) {    //인수가 하나니까 
    return a;
}
sum(3)   //3     
sum(3, 5) //5   5는 무시되고 3만 출력
//인수자리에 딱한개의 숫자만 입력할수있다  그런데 어떤경우 인수로 (3,5,6,7,8)을 쓰고싶을때
//arguments를 사용할수있다

function sum() {    //인수갯수를 신경쓰지않고 많이써도됨
    console.log(arguments)  //여기 arguments는 내장키워드
}
// sum(1,2,3)     콘솔에 sum(1,2,3)입력하면 arguments[1,2,3]배열이나옴
// Arguments[1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 0: 1             
// 1: 2            펼쳐보면 인덱스와 함께 나온다
// 2: 3
// callee: ƒ sum()
// length: 3

//arguments는  인수자리에 개수상관없이 여러인수를 쓸수있다
//함수로 전달되는 인수들의 값을 가지고 있는 배열과 유사한 형태의 객체로 
//그 함수의 내부에서 접근할 수 있다.
//length 프로퍼티가(특성) 있어 배열과 유사하게 동작하지만 유사 배열 객체이므로 .map .reduce같은 
//배열 메서드를 사용할 수는 없다.  
console.log(arguments[0])  //인수에 접근하려면 인덱스를 쓰면된다
arguments[0] = 'K'  //재할당도가능하다

// 인수자리에 개수상관없이 여러인수를 쓸수있고, 인수모두를 배열객체에 담기때문에 
//rest처럼 남아있는 인수를 모을수없다.  rest아래참조
function sum() {
    return arguments.reduce((total, el) => total + el)
}
//arguments가 배열이아니여서 reduce가 작동을 안함 이럴때 나머지연산자(rest)가 필요
//나머지연산자(rest)는 점세개로 매개변수 목록에 들어간다
// 그리고 남아있는 인수를 모두 모으고 배열로 나타낸다.  

function sum0(...numb) {  //rest 나머지매개변수 (...)
    console.log(numb)
}
sum0(33, 44, 55) //콘솔에입력하면   
//[33,44,55]  numb배열이 생겼다  (...)으로 인수자리에 숫자 100개도쓸수있다. 

function sum1(...nums) {
    return nums.reduce((total, el) => total + el)
}
// sum1(3,4,8)  인수에 3,4,8을 넣어보면
// 15          더한값 15 출력   
//(...nums)를 나머지(rest) 매개변수라고 부른다. 나머지값을 모두 모아준다.

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
// raceResults('태미','토드','베리','시스코','나마스')
//GOLD MEDAL GOES TO: 태미
//SILVER MEDAL GOES TO: 토드
//AND THANKS TO EVERYONE ELSE: 베리,시스코,나마스

//골드와 실버 매개변수 두개를 호출했고 나머지는 모든참가자로 모았다.
//이게 바로 나머지연산자 rest
//여기서 골드는 인덱스 0 , 실버는 인덱스1, 모든참가자는 인덱스2
//arguments키워드는 화살표함수에서 사용할수 없다. 그래서 이때도 나머지매개변수가 필요하다
//스프레드와 모양은 같지만 다르다. 스프레드는 배열 안에 요소들을 펼쳐서 반환해준다.
//나머지매개변수는 나머지 매개변수를 모아서 반환해준다. 남아있는 인수를 모으는 역할을
//하므로 항상 마지막에 있어야한다.


//구조분해 중 개선된 새로운구문 배열분해 
const [] = 변수이름  //분해를 이용하는 짧은구문
//배열이나 객체를 해체해서 별개의 변수로 만들수 있다
const scores = [99, 98, 88, 96, 70, 86]
const highScore = scores[0];
const secondHighScore = scores[1];
//인덱스로 불러내서 저장할수도있지만
const [gold, silver, bronze, ...everyoneElse] = scores;
// gold
// 99      gold변수에 99 저장, everyoneElse변수에 [96,70,86]저장 
// scores
// [99, 98, 88, 96, 70, 86]    // scores는 바뀌지않음
//나머지연산자를 써서 나머지점수 96,70,86를 everyoneElse변수로 정했다.
//값의 순서대로 변수를 만들수 있다[gold,sliver,bronze..]


//객체의구조 분해   많이쓰임  순서를 따르지않기땜에 배열구조분해보다 실용적
//객체의 특성을 변수로 만든다
const user = {
    email: 'harvey@gmail.com',
    password: 'ssssss333',
    firstName: 'Harvey',
    lastName: 'milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician',
    city: 'San Francisco',
    state: 'California'

}
const firstName = user.firstName;
const lastName = user.lastName;
// const email=user.email;
//이렇게해도 잘작동하나 선정하고싶은 특성이 여러개가 있을때마다 일일이 작성하려면 귀찮다
//구조분해 구문을 이용하면된다.
const { email, city, state, password } = user;
//한번에 변수 네개를 만들었다. user객체는 그대로있고 따로 새변수를 만든것.
//중괄호 안에는 개별 특성을 넣어줘야함  배열과는 달리 순서는 상관없다

//값을 객체에서 꺼내서 새이름도 지을수 있다.
const { born: birthYear, died: deathYear } = user;
//born이름이 birthYear로 바뀜. 콘솔에서 born을치면 not defined나오고 birthYear은 작동.

const user2 = {
    이메일: 'Stacy@gmail.com',
    성: 'Stacy',
    이름: 'Gonzalez',
    태어난해: 1987,
    도시: 'Tulsa',
    주: 'Oklahoma'
}
const { 도시 = '서울', 주, 태어난달 = 1 } = user2
//콘솔에 태어난달을 입력하면 undefined뜨는데(객체에 값을 입력안했으니) 
//undefined는 오류가아님. 태어난달=디폴트 를 정해줌 디폴트 1을 정해주고 콘솔입력하면
//태어난달 1로 출력. 그러나 도시같이 이미 값을 갖고있는경우 디폴트를 '서울'로 
//정해도 'Tulsa' 로 출력.


//함수의 매개변수 분해
// function fullName(user2) {             일반함수로 풀네임만들기
//     return `${user2.성} ${user2.이름}`
// }
//  fullName(user2)  콘솔입력
// 'Stacy Gonzalez'   구조분해를 이용해 같은결과를 만들수있음
function fullName(user2) {
    const { 성, 이름 } = user2;       //객체구조분해를 해서 성,이름을 변수로만든다음
    return `${성} ${이름}`          //변수 성,이름 반환    'Stacy Gonzalez' 
}
//처음작성이 더짧지만 매개변수를 자주쓸때는 이게낫다.

//도시,주,태어난해 등 다른정보는 출력하지않고
//이름정보만 필요하다면 인수자리에서 구조분해를 할수있다.
function fullName1({ 성, 이름, 동 = '토당동' }) {   //동='토당동' 동을 추가해봤다
    return `${성} ${이름} ${동}`
}
//매개변수자리에 {}중괄호안에 성,이름같은 특성을 쓰면됨
//콘솔에 입력할때 fullName1(user2) 쓰면됨 
//이름같이 이미Gonzalez로 값이있는경우 말고, 새로운 특성을 추가할때 기본값을 정할수있다 동='토당동'

const movie = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2013
    }, {
        title: 'parasite',
        score: 95,
        year: 2019
    }

]
movie.filter((movies) => movies.score >= 90)  //콘솔에 입력
//이렇게해도 아마데우스,기생충.. 작동하지만 매개변수 자리에 구조분해를 이용해도됨
movie.filter(({ score }) => score >= 90)
//{}중괄호안에 매개변수score를 써서 더짧게만듦
// 0  score: 99        인덱스와함께 90점 이상인 영화의 배열객체출력
//  title: "Amadeus"
//  year: 1984
movie.map(movie1 => {
    return `${movie1.title} (${movie1.year}) is rated ${movie1.score}`
})
//예전에 배운대로 map을써도 되지만 매개변수분해를 이용하면
movie.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})
//title,score,year을 중괄호에서 구조분해함
//movei1을 작성하지않아도 되니 짧고 더 낫다


//DOM 이란 ? DOCUMENT Object Model  웹페이지를 구성하는 js 객체들의 집합.
//최상위 가장 중요한 요소이자 가장 중요한 객체는 document 이다. 
// li<ul<body<html<document 
//콘솔에 document 를 입력하면 html 코드를 볼수있다
//console.dir(document) 를 입력하면 js객체가 나옴.  디렉토리의 dir로 문서객체구조를 출력함
//열어보면 어마어마한 js객체가 있는데 건드리지않아야될 내용도 있으니 되도록 안건드는게 낫다.
// 웹페이지의 모든콘텐츠를 객체로 나타낸다.
//console.dir(document)를 입력해서 나온 js객체중에 all을 누르면 그 사이트를 구성하는 모든 요소들이 나온다
//body,h1 등..모두.  document.all 을 입력하면 사이트를 구성하는 요소들의 배열이 나온다.
//document.all[10] 인덱스를 이용해 10번째 요소 내용을 볼수있다 <b>Silkie</b>  
//document.all[10].innerText='SILKIE'   내용을 바꿀수도있다  사이트에서 'SILKIE' 로 바뀐다


//document.getElementById()  일치하는 id를 가진 요소를 페이지에서 찾아서 객체로 가져옴. 
// 일치하는 Id가있으면 해당 값이 나타나고 없으면 null로 나타냄
//id를 써야하고 클래스이름으로는 안됨
document.getElementById('banner') //콘솔에 'banner'라는 Id를 입력하니 해당 요소인 img 출력
//<img id=​"banner" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​commons/​thumb/​e/​e2/​Silky_bantam.jpg/​440px-Silky_bantam.jpg" alt>​
// ↑ HTML같아도 아님   html과 css는 js를만나면서 js객체로 들어가게된다 
//그래서 모양은  html같아도 js 문서객체인것이다.

const banner = document.getElementById('banner')   //const banner로저장 
banner        //콘솔 banner 입력하니 img 출력
//<img id=​"banner" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​commons/​thumb/​e/​e2/​Silky_bantam.jpg/​440px-Silky_bantam.jpg" alt>​
console.dir(banner)
//- img#banner
//그안에 모든 특성이 포함돼있다
//currentSrc: "http://images.unsplash.." 이런특성이 있는데 img소스. unsplash에서가져옴
//tagName:"IMG"    중요함 이미지 요소를말함
// children   을열어보면 자식요소에 대한 정보를 알수있다.
// HTMLCollection(3)         3개의 Elements로 이루어져있음
// 0 input#toctogglecheckbox.toctogglecheckbox
// 1 div.toctitle
// 2 ul


//getElemetsByTagName / getElementsByClassName      Elements 복수형.
//복수형인 이유는 한개이상을 선택하기땜
document.getElementsByTagName('img')  //'IMG'대소문자구분안함
// HTMLCollection(4) [img#banner, img.square, img.square, img.square, banner: img#banner]
//배열처럼 생겼지만 배열이아님  인덱스 가능,  .length 가능 ,for of를 써서 반복가능. 
const allImg = document.getElementsByTagName('img') //const allImg 로 저장
//allImg      콘솔입력하면 배열같이생긴 애들이나오고 인덱스로 각요소를 출력할수있음
//HTMLCollection(4)[img#banner, img.square, img.square, img.square, banner: img#banner]0: img#banner1: img.square2: img.square3: img.squarebanner: img#bannerlength: 4[[Prototype]]: HTMLCollection
//allImg[0]
//<img id=​"banner" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​commons/​thumb/​e/​e2/​Silky_bantam.jpg/​440px-Silky_bantam.jpg" alt>​
// ↑ 텍스트가아닌 객체.
console.dir(allImg[1])
//▶ img.square    삼각형누르면 객체들이나옴.  
//HTMLCollection은 배열이 아니기때문에 map같은 배열메서드는 적용할수없다.
//인덱스사용가능하고,  .length가능 , for of를 써서 반복가능하지만 배열은 아님

for (let img of allImg) {
    console.log(img.src)   //src는특성이름 
}
//vscode에 이렇게 입력하고 콘솔보면 방금출력시킨 네개 img의 출처가 나오고 변경가능하다.
for (let img of allImg) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/silky_bantam.jpg/440px-silky_bantam.jpg'
}
//다른 주소를 src에 쓰면 이미지와 소스 변경. img태그를 모두선택했으니  모든이미지가 다바뀐다
// document.getElementsByTagName('p')     
// HTMLCollection(2) [p, p]               이런식으로 전체 p,b
// document.getElementsByTagName('b')     가 몇개인지 알려주고
// HTMLCollection(3) [b, b, b]            클릭해보면 index도 포함돼있다


//getElementsByClassName
document.getElementsByClassName('square')
HTMLCollection(3)[img.square, img.square, img.square]  //3개의 Elements로 이루어져있음
//인수안에 class이름을 넣어주면됨  그러면 해당 클래스 요소들 출력. 배열같지만 배열아님
const squareImage = document.getElementsByClassName('square');
for (let img1 of squareImage) {
    img1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/silky_bantam.jpg/440px-silky_bantam.jpg'
}
//for of를 써서 img소스를 바꿀수있다.
//만약 인수자리에  없는 클래스를 쓰면 빈배열같은 [] 빈집합이 출력.
//getElementsByTagName 처럼 인덱스 , .length , for of 로반복 가능. 
