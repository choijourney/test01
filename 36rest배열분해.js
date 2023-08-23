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
//중괄호 안에는 개별 특성을 넣어줘야함  배열과는 달리 순서는 상관없다
//한번에 변수 네개를 만들었다. user객체는 그대로있고 따로 새변수를 만든것.
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
// function fullName(user2) {
//     return `${user2.성} ${user2.이름}`
// }
// - fullName(user2)  콘솔입력작동
// 'Stacy Gonzalez'   구조분해를 이용해 같은결과를 만들수있음
function fullName(user2) {
    const { 성, 이름 } = user2;
    return `${성} ${이름}`
}
//처음작성이 더짧지만 매개변수를 자주쓸때는 이게낫다.
//사용자정보를 사용할 계획이 없는경우에 도시,주,태어난해 등 다른정보는 출력하지않고
//이름정보만 필요하다면 매개변수에서 구조분해를 할수있다.
function fullName1({ 성, 이름, 동 = '토당동' }) {
    return `${성} ${이름}`
}
//매개변수자리에 성,이름을 적어주고 리턴도 똑같다 성,이름만 적어주면됨.
//user2 도 필요없다. 콘솔에 입력할때만 fullName1(user2) 쓰면됨 
//동 = '토당동' 객체에 값이없을때 디폴트값설정할수 있다고했는데 안된다 이유가뭘까?


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
movie.filter((movies) => movies.score >= 90)  //콘솔에 복붙입력
//이렇게해도 아마데우스,기생충.. 작동하지만 매개변수 자리에 구조분해를 이용해도됨
movie.filter(({ score }) => score >= 90)
//{}중괄호안에 매개변수score를 써서 더짧게만듦
movie.map(movie1 => {
    return `${movie1.title} (${movie1.year}) is rated ${movie1.score}`
})
//예전에 배운대로 map을써도 되지만 매개변수를 이용하면
movie.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})
//title,score,year을 중괄호에 한번에 쓰고 movie1은 지움. 그러면 같은결과.
//movei1을 작성하지않아도 되니 더 낫다


//DOM 이란 ?   문서오브젝트  DOCUMENT
//최상위 가장 중요한 요소이자 가장 중요한 객체는 document 이다.
//콘솔에 document 를 입력하면 소스를 볼수있다
//console.dir 을 입력하면 더 자세한 소스를 볼수있다 디렉토리의 dir로
//문서객체구조를 출력할수있다.열어보면 어마어마한 js객체가 있는데 건드리지않아야될
//내용도 있으니 되도록 안건드는게 낫다.
//consoe.dir(document)를 입력하면 웹페이지의 모든콘텐츠를 객체로 나타낸다.


//GetElementById  document에 쓰이며 뒤에 (문자열)을 입력하면 일치하는 Id를가진 요소를
//찾아낸다 일치하는 Id가있으면 찾아내고 없으면 null로 나타냄
//id를 써야하고 클래스이름으로는 안됨
document.getElementById('banner')
//<img id=​"banner" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​commons/​thumb/​e/​e2/​Silky_bantam.jpg/​440px-Silky_bantam.jpg" alt>​
//콘솔에 'banner'라는 Id를 입력하니 그안에 있는 img주소를 출력   HTML같아도 아님
const banner = document.getElementById('banner')   //const banner로저장 
banner        //콘솔 banner 입력하니 img주소 출력
//<img id=​"banner" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​commons/​thumb/​e/​e2/​Silky_bantam.jpg/​440px-Silky_bantam.jpg" alt>​
console.dir(banner)
//- img#banner
//console.dir(banner) //일치하는 id를 가진 요소를 페이지에서 찾아서 객체로 가져옴.
//그안에 모든 특성이 포함돼있다
//currentSrc: "http://images.unsplash.." 이런특성이 있는데 img소스. unsplash에서가져옴
//tagName:"IMG" 중요하고 이미지 요소이거나 <img>태그를 말함.
// children   을열어보면 자식요소에 대한 정보를 알수있다.
// HTMLCollection(3)
// 0 input#toctogglecheckbox.toctogglecheckbox
// 1 div.toctitle
// 2 ul


//getElemetsByTagName / getElementsByClassName      Elements 복수형.
//복수형인 이유는 한개이상을 선택하기땜
document.getElementsByTagName('img')  //'IMG'대소문자구분없음
// HTMLCollection(4) [img#banner, img.square, img.square, img.square, banner: img#banner]
//배열처럼 생겼지만 배열이아님   대괄호랑 인덱스등의 배열구문을 쓸수있다.
const allImg = document.getElementsByTagName('img') //const allImg 로 저장
//allImg      콘솔입력하면 배열같이생긴 애들이나오고 인덱스로 각요소를 출력할수있음
//HTMLCollection(4)[img#banner, img.square, img.square, img.square, banner: img#banner]0: img#banner1: img.square2: img.square3: img.squarebanner: img#bannerlength: 4[[Prototype]]: HTMLCollection
//allImg[0]
//<img id=​"banner" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​commons/​thumb/​e/​e2/​Silky_bantam.jpg/​440px-Silky_bantam.jpg" alt>​
// ↑ 텍스트가아닌 객체.
console.dir(allImg[1])
//▶ img.square    삼각형누르면 객체들이나옴.  
//HTMLCollection은 배열이 아니기때문에 map같은거는 적용할수없다.
//인덱스사용가능하고,  .length가능 , for of를 써서 반복가능하지만 배열은 아님

//const allImg=document.getElementsByTagName('img') 위에썼으니 주석처리하고
for (let img of allImg) {
    console.log(img.src)   //src는특성이름 
}
//vscode에 이렇게 입력하고 콘솔보면 방금출력시킨 네개 img의 출처가 나오고 변경가능하다.
for (let img of allImg) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/silky_bantam.jpg/440px-silky_bantam.jpg'
}
//다른 주소를 src''안에 넣어주면 이미지와 소스 변경. allImg였으니 모든이미지가 다바뀐다
// document.getElementsByTagName('p')     
// HTMLCollection(2) [p, p]               이런식으로 전체 p,b,div
// document.getElementsByTagName('b')     가 몇개인지 알려주고
// HTMLCollection(3) [b, b, b]            클릭해보면 index도 포함돼있다
// document.getElementsByTagName('div')   (p는 2개의 element(요소)로 돼있음)

//getElementsByClassName
document.getElementsByClassName('square')
HTMLCollection(3)[img.square, img.square, img.square]
//('')안에 class이름을 넣어주면됨  그러면 해당 클래스 요소들 출력. 배열같지만 배열아님
const squareImage = document.getElementsByClassName('square');
for (let img1 of squareImage) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/silky_bantam.jpg/440px-silky_bantam.jpg'
}
//for of를 써서 img소스를 바꿀수있다.
//만약 ('ㄹㅇㄴㄹ')클래스이름 써야할곳에 없는 클래스를 쓰면 빈배열같은 [] 빈집합이 출력.
//getElementsByTagName 처럼 인덱스 , .length , for of 로반복 가능. 
