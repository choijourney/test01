//콜스택 강의 277번 - 스택은 컴퓨터과학의 기본 데이터구조이고 후입선출(Lifo 라스트인퍼스트아웃) 구조이다 
//콜스택은 js가 사용하는 메카니즘으로 여러함수를 호출하는 스크립트에서 해당위치를 추적한다

const multiply = (x, y) => x * y;
const square = x => multiply(x, x);
const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
isRightTriangle(3, 4, 5)

//loupe라는 콜스택을 시각화해서 보여주는 사이트가 있다. 더 흔히 쓰이는 도구는 디버거라고 크롬에 내장돼있다.
//콘솔옆에 sources를 연다. 그다음 page에서 js파일을 연다 
//시작하고싶은 함수 옆에 숫자 왼쪽을 클릭하고 새로고침을 한 후 ↓화살표를 클릭하면서 사용하면된다 
//그럼 아래서부터 함수가 차례대로 콜스택에 들어가서 값을 구해온다. 

//isRightTriangle 먼저 콜스택에 추가된다 그다음 square함수, 그다음 multiply를 추가한후 a값인 3*3의 값을
//구한다. 9가 나오고 9를 지우면서 square한테 9를 넘겨준다. square가 지워지고 isRightTriangle한테 9를
//넘겨준다. 다음 b값을 구하기 위해 똑같은 과정을 거친다. multiply까지가서 4*4 답 16을 가져온다.
//c도 25를 가져온다 그래서 9+16===25 true 를 반환한다.

//콜스택과는 별개로 오류가 있을때 디버거로 확인해볼수있다. 


//WebAPI와 단일 스레드
//js는 단일 스레드이다. 한번에 코드 한줄을 실행한다. 그런데 혼자만 일하진 않고 브라우저에게 도움을 요청한다.
// setTimeout같은 기능 (function,3초) 적으면 3초후에 함수실행하는 기능. 을 쓸때 js가 직접하지않고
//브라우저에게 넘긴다. 브라우저가 3초를 세고 js에게 알려주고 js가 함수를 실행한다
//loupe사이트에서  setTimeout(function({console.log('hi')},3000)  
//console.log('last')   이렇게쓰면  call Stack에 console.log('last') 출력,
//3000이 web Apis 로가서 초를 센다. 3초를 다세면 call Stack에 console.log('hi')가 출력된다.
//이렇게 setTimeout처럼 js가 초를 세면서 콘솔로그출력도하고 여러 일을 동시에 하는것같이 보여도 
//브라우저에게 일을 넘기고 js는 코드를 한번에 한줄씩 실행한다



//콜백지옥   
//콜백이란 다른함수에 매개변수로 넘겨진 함수
// setTimeout(() => {  
//     document.body.style.backgroundColor = 'red';
// }, 1000)             이렇게쓰면 초를쓸때 코드를 덮어쓰지않기위해 1초,2초,3초  점점 늘어나게 써야한다
// setTimeout(() => {     레드도 1초,오렌지도 1초면  1초후에 오렌지색깔만 보인다 
//     document.body.style.backgroundColor = 'orange';
// }, 2000)  


// setTimeout(() => {   // 중첩하면 문제를 해결할수있다.    
//     document.body.style.backgroundColor = 'red';     /1초후 레드색깔로 바꾸고
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';  /그후 1초후 오렌지색깔로 바꾼다
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// 함수로 짧게 만들어본다
// const delayedColorChange = (newColor, delay) => {      괄호는 매개변수자리
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;   
//     }, delay)
// }
// delayedColorChange('olive', 1000)  //이렇게하면 1초후 teal색깔만 나온다 2초를 쓰던가 
// delayedColorChange('teal', 1000)  //중첩을 시키던가. 나는 콜백으로 할거다.


// const delayedColorChange = (newColor, delay, donext) => { //매개변수하나더추가 donext엔 함수가들어갈거다
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         donext();  //함수가들어갈건데 어떤함수가와도 되지만 여기선 delayedColorChange를 써서 
//     }, delay)       //색깔을 더추가할거다
// }

// delayedColorChange('red', 1000, () => {       //매개변수가 3개인..3번째매개변수는 함수인 중첩된 식.
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {

//                 })
//             })
//         })
//     })
// })

//콜백을 써서 중첩이 많이되고 가독성이 안좋을 수 있다.콜백지옥.. 다음에 promises와 비동기식으로
//깔끔하게 코드를 작성하는것을 배울거다

//promise를 써서 위식을 보기쉽게 써본다.

const delayedColorChange1 = (color, delay) => {     // 필요한 매개변수들을 적는다 
    return new Promise((resolve, reject) => {    //promise를 리턴한다 항상 resolve,reject 인수를갖는다
        setTimeout(() => {            //setTimeout(함수,몇초연기할지) 적는다
            document.body.style.backgroundColor = color;  //배경색을 바꾸는데 
            resolve();         //resolve시킨다 (성공시킨다는뜻. then과이어져있어서 then이 실행된다)
        }, delay)
    })
}

delayedColorChange1('black', 1000)   //color와 delay에 'black'과 1000을 대입시켜 promise를 실행시킨다
    .then(() => delayedColorChange1('pink', 1000))  //암시적반환으로 return을 지운상태
    .then(() => delayedColorChange1('skyblue', 1000))
    .then(() => delayedColorChange1('rgb(252, 252, 106)', 1000))
    .then(() => delayedColorChange1('hotpink', 1000))
    .then(() => delayedColorChange1('purple', 1000))
    //1초마다 색깔이 바뀐다