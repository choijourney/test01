//비동기 키워드    비동기는 특정 코드의 처리가 완료되기 전에 아래로 내려가면서 수행하는 것.
console.log('123')         //예를들어 123이 출력되고
setTimeout(function () {     //3초를 기다리는동안 
    console.log('789');
}, 3000)
console.log('456')        //456이 먼저 출력된다   3초후 789출력
//비동기처리가 필요한 이유는 서버로 데이터 요청을 했을때 서버가 언제 요청을 받고 수행할지 모르기 때문

//async  함수를 비동기 함수로 선언하는 키워드.  함수앞에 async를 쓰면 promise를 따로 쓰지않아도 
//자동으로 promise를 반환.  async를 쓰면 기본값은 resolve된다.reject 상황을 만드려면 오류를 던지면된다.
//async함수와 일반함수로 나뉘어진다는걸보면 async가 비동기함수 자체라고 봐도 무방하다?.? 
const sing = async () => {
    throw new Error('UH OH')   //throw 오류던져 reject만듦
    return 'LA LA LA LA'   //오류를 던져서 실패한 promise라 return은 실행되지않는다
}

sing().then((data) => {    //promise를 쓰지않아도 async를 썼기때문에 then을 쓸수있다
    console.log('PROMISE RESOLVERD WITH:', data)
})
    .catch(err => {
        console.log('OH NO, PROMISE REJECTED')  //throw때문에 reject되어 'OH NO, PROMISE REJECTED'
        console.log(err)                       //출력되고   UH OH 가 출력된다 
    })

//throw만 써도되고  그러면 'UH OH' 만 출력.
//throw에 new Error를 붙여서 쓰는 경우가많은데 콘솔을보면
//'UH OH' at sing(47.js:12) 에러위치까지 알려준다

const login = async (username, password) => {   //username이나 password둘중 하나라도 없으면 
    if (!username || !password) throw 'Missing Credentrials'  //에러메시지 출력 
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'  //패스워드 틀릴경우 'Invalid Password'출력
}
login('fdfdf', 'corgifeetarecute')
    .then(msg => {
        console.log('Logged in!')
        console.log(msg)
    })
    .catch(err => {
        console.log('ERROR!')
        console.log(err)
    })
//login('fdfdf')만입력했을때 인수를 두개 입력해야하는데 한개만 입력했으니 'Missing Credentrials' 에러뜸.


//await 키워드   비동기코드를 쓰면서 동기적으로 보이게해줌. 비동기함수를 일시정지시킨다.
//혼자 개별로도 사용은가능하지만 비동기함수에서 쓰기 때문에 async와 await은 한쌍이다.
const delayedColorChange = (color, delay) => {
    return new Promise((resolve) => {    //reject는안쓸거여서 지움
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
async function rainbow() {
    delayedColorChange('red', 1000)  //await없이쓰면 red도 1초기다렸다가 나타나고 orange도 1초기다렸다가
    delayedColorChange('orange', 1000)//나타나서 red는출력되지않고 orange만 출력된다
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    console.log('hey')                 //green이 출력된뒤 1초있다가 'hey'출력
    await delayedColorChange('blue', 1000) //await을 쓰면 1초동안 기다려준다. yellow가 나타나고 
}       //1초기다리고 green이 나타나고 1초기다리고 blue가 나타난다
rainbow() //await을 안쓴 줄과 await쓴줄을 섞어쓰니까 'red','orange'는 나타나지않고 yellow부터 나타난다

async function printRainbow() {
    await rainbow();    //rainbow함수를 실행할때까지 기다렸다가
    console.log('end of rainbow!')  //출력
}
printRainbow();

//try , catch   에러를 발생시키지않고 에러를 다룬다.
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {  //새async함수 makeTwoRequests에 fakeRequestPromise를
    let data1 = await fakeRequestPromise('/page1') //let변수로 저장할수있고 await을 써서 
    console.log('hellooo!');  //함수가끝나길 기다렸다가 콘솔에 'hellooo'를 출력하게했다
}   // 그러나 reject이 되면 'hellooo'가 출력되지않는 오류가생긴다. 이럴때 try,catch문을 쓴다.

//try문에 오류가 될 코드를 적으면 catch에서 오류를 잡아서 어떻게 처리할지 정의한다. 
//인수(e)는 reject메시지를 나타낸다. 

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('/page1')
        console.log(data1);
        let data2 = await fakeRequestPromise('/page2')
        console.log(data2);
    } catch (e) {
        console.log('CAUGHT AN ERROR!')
        console.log('error is:', e) //error is: Connection Timeout :( 
    } console.log('hellooo!')  //이제 'hellooo'까지 출력된다
}


// throw 문
// throw 문은 사용자가 정의한 '예외'를 발생시킬 수 있다.
//'예외'가 발생하면 함수가 중지되고 catch문으로 전달된다. catch문이 없다면 프로그램이 종료된다.
// '예외'를  설명하자면, js에서는 에러라고 인식하지 않는것을
//내가 생성한 함수의 규칙과 어긋나서 에러 처리를 하고 싶은 경우를 말한다.

// 예제
// 두 숫자를 더해주는 함수를 만들었다고 가정. '숫자와 숫자를 더한 값이 출력됨'을 규칙으로 정한 함수이다.
//그런데 js는 동적 타입이기 때문에 아래와 같이 문자로 된 매개변수를 대입해도 에러가 발생하지 않는다.

// function sum (x, y) {
//   return x + y;      // "abc1"
// }
// console.log(sum("abc", 1))

// 위 코드는 에러는 아니지만, 우리가 정해놓은 규칙에 벗어난 결괏값이 나온다.
//이런 경우에 숫자가 아니라면 '예외'로 지정하고 에러를 발생시킬 수 있다.

// function sum (x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw "숫자를 입력하세요"
//   }
//   return x + y;
// }
// console.log(sum("abc", 1))

// 숫자가 아닐 경우 throw 키워드를 통해 '예외'로 지정한 에러가 발생한다.
// Uncaught 숫자를 입력하세요
// 보통은 throw 뒤에 문자열을 바로 적지않고 Error 객체를 사용한다.

// function sum (x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error("숫자를 입력하세요");
//   }
//   return x + y;
// }
// console.log(sum("abc", 1))

// Error 객체를 사용하면 해당 콜스택 정보가 같이 출력되기 때문에 어디에서 에러가 발생했는지 정보를 얻을수있다.
// Uncaught Error: 숫자를 입력하세요 App.tsx:17
// 에러 핸들링    에러가 발생하면 다음 코드는 실행되지 않는다.에러를 발생시키지않고 에러를 다루려면
// try-catch 문을 사용하면 된다. catch는 에러를 잡아서 어떻게 처리할지 정의한다.

// function sum (x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw "숫자를 입력하세요"
//   }
//   return x + y;
// }

// try {
//   sum("abc", 1)
// } catch (e) {
//   console.log(e); // "숫자를 입력하세요 "
// }
// 에러가 발생하는 대신 콘솔창에 '숫자를 입력하세요' 텍스트가 출력 되었다.


//Ajax
//자바스크립트를 통해서 서버에 데이터를 비동기 방식으로 요청하는 것이다
//HTML, CSS, 자바스크립트, DOM, XML 등 기존에 사용되던 여러 기술을 함께 사용하는 새로운 개발 기법
//빠르게 동작하는 동적인 웹 페이지를 만들기 위한 개발 기법의 하나이다.

//Ajax란 Asynchronous JavaScript and XML의 약자
// Ajax는 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있다.
// 즉 Ajax를 이용하면 백그라운드 영역에서 서버와 통신하여, 그 결과를 웹 페이지의 일부분에만 표시할 수 있다.
// 이때 서버와는 다음과 같은 다양한 형태의 데이터를 주고받을 수 있다. JSON XML HTML 텍스트 파일 등
// Ajax 장점
// 1. 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있음 웹페이지 속도향상
// 2. 웹 페이지가 로드된 후에 서버로 데이터 요청을 보낼 수 있음
// 3. 웹 페이지가 로드된 후에 서버로부터 데이터를 받을 수 있음
// 4. 백그라운드 영역에서 서버로 데이터를 보낼 수 있음
// Ajax의 한계
// 1. Ajax는 클라이언트가 서버에 데이터를 요청하는 클라이언트 풀링 방식을 사용하므로,
//    서버 푸시 방식의 실시간 서비스는 만들 수 없음
// 2. AJAX를 쓸 수 없는 브라우저에 대한 문제 이슈가 있다
// 3. Ajax 스크립트가 포함된 서버가 아닌 다른 서버로 Ajax 요청을 보낼 수는 없음
// 4. 클라이언트의 PC로 Ajax 요청을 보낼 수는 없음
// 5. 히스토리 관리가 되지 않는다.
// 6. 페이지 이동없는 통신으로 인한 보안상의 문제가 있다.
//Ajax 프레임워크
// Ajax를 이용해 개발을 손쉽게 할 수 있도록 미리 여러 기능을 포함해 놓은 개발 환경을 Ajax 프레임워크라고한다
// 이러한 Ajax 프레임워크 중에서도 가장 많이 사용되는 프레임워크는 다음과 같다.
//  - Prototype - script.aculo.us - dojo - jQuery

// AJAX가 쓰이는 방법
// XMLHttpRequest 객체를 얻은 뒤, url을 통해 요청하고 응답을 받으면 응답 결과에 맞는 함수를 실행하는 구조로
// 되어 있다. Ajax가 효율적이라고는 해도 이렇게 하게 될 경우, 코드가 길어지기 때문에
// jQuery에서 그 문제를 해결해주고 있다.

//request  링크를 클릭하거나 엔터를쳐서 페이지에 요청을 하는 방법 말고
//예를들어 페이스북 스크롤을 내릴때 무한으로 스크롤이 내려지는데 이때도 사진,글,동영상같은 정보를 달라고
//페이지에 계속 요청을 하고있는중이다  이런 요청을 js가 한다.


// API는 점원과 같은 역할을 한다.
// API는 손님(프로그램)이 주문할 수 있게 메뉴(명령 목록)를 정리하고, 주문(명령)을 받으면
// 요리사(응용프로그램)와 상호작용하여 요청된 메뉴(명령에 대한 값)를 전달한다.
// 쉽게 말해, API는 프로그램들이 서로 상호작용하는 것을 도와주는 매개체이다.
// 예를들어 우체국의 우편번호 API, 구글과 네이버의 지도 API 등 유용한 API들이 많으므로,
// 요즘은 홈페이지 구축이나 추가 개편 시 따로 추가로 개발하지 않고 이런 오픈 API를 가져와 사용하는 추세다
// 인스타그램,페이스북에도 API가있고 이용할수있다.

//  API는 서버와 데이터베이스에 대한 출입구 역할을 한다.
// : 데이터베이스에는 소중한 정보들이 저장되는데. 모든 사람들이 이 데이터베이스에 접근할 수 있으면 안되겠다.
// API는 이를 방지하기 위해 여러분이 가진 서버와 데이터베이스에 대한 출입구 역할을 하며,
// 허용된 사람들에게만 접근성을 부여해준다.
// API는 어플과 기기가 원활하게 통신할 수 있도록 한다.
// API는 모든 접속을 표준화한다.
// 때문에 기계/ 운영체제 등과 상관없이 누구나 동일한 액세스를 얻을 수 있다.
// 범용 플러그처럼 작동한다고 볼 수 있다


//엔드포인트
// 베이스url https://swapi.dev/api    엔드포인트 /people/1

//URI 와 URL 차이
// elancer.co.kr > URI   식별자=이름
// https://www.elancer.co.kr > URL,URI  URL은식별자+위치   URI가 더 포괄적인 개념이며 URL은 이 안에 포함
// /blog/view?seq=40  >  URN   웹문서의 위치와 상관없이 각 자원에 이름을 부여한것.
// “Charles” 는 내 이름이며 식별자(Identifier)다. 이는 URI와 비슷하지만
// 내 위치나 연락처에 대한 정보가 없으므로 URL은 될 수 없다.
// “경기도 성남시 분당구 정자동 불정로 6”는 주소다. 주소는 특정 위치를 가르킨다.
// URL 및 URI와 비슷하며 내가 있는 장소로 본다.

