//고차함수 higher order function- 함수를 인수로 받는 함수. 다른함수를 인수로
//받아서 그 인수로 어떤작업을 하는 함수,함수를 반환할수 있는 함수
let greet = function () { console.log('hiii') }
//이 함수를 변수에 저장했으니 함수를 인수로 쓸수있음

function callTwice(func) {  //(func)에는 함수가들어올것이라고 가정함
    func();
    func();
}
// func에 들어온 함수를 2번 실행하려고 괄호를 2번 추가했음 

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}
callTwice(rollDie)
//숫자나 문자를 적는것처럼 callTwice()인수자리에 함수rollDie를 써보았다
//(rollDie())이렇게 쓰면 rollDie()를 실행해서 5같은 임의의숫자가 나오고
// 그숫자가 callTwice(5) 인수자리에 가서 func은 함수가 아니라는 오류가 뜬다.
//callTwice(rollDie) 적으면 func()을 적어놨기때문에 rollDie() 알아서 중괄호가 붙어서 rollDie()함수가 실행된다.
//1,3 숫자 두개가 출력된다.
function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}
//이번엔 10번실행시키기위해 for루프를 만든다 그다음 함수f가 전달하는 값을 실행시키게한다
// callTenTimes(rollDie)를 입력하면  주사위 10번굴린 결과가 나온다.

//반환함수 
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {           //랜덤숫자가 0.5보다 큰지확인
        return function () {      //함수반환 (숫자,문자,값을반환하듯 함수를반환)
            console.log('CONGRATS, I AM A GOOD FUNCTION')
            console.log('YOU WIN A MILLION DOLLARS!')

        }
    } else {
        return function () {
            alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
        }
    }
}
// 콘솔에서 makeMysteryFunc()을 입력하면 0.5보다 값이 큰지 비교후 함수반환
//저장해서 쓰려고 const mystery= makeMysteryFunc() 
// mystery()
// CONGRATS, I AM A GOOD FUNCTION
// YOU WIN A MILLION DOLLARS!     콘솔에써보니작동

function isBetween(num) {
    return num >= 50 && num <= 100   //불리언 출력
}
isBetween(50)  //true 
isBetween(10)  //false
//전달된 입력값이 50~100 사이인지 불리언으로 알려주는 isBetween이라는 함수/이 함수는 50,100으로 
//정해놔서 다른숫자를 쓰고싶을때마다 식을 다시써야하는데 그럴필요없이 팩토리함수를 쓸수있다
//팩토리함수는 함수를 만들어주는 함수이다
function makeMysteryFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// makeMysteryFunc(1,10)
// ƒ (num) {
//         return num >= min && num <= max;
//     }
//1과10을 입력했더니 함수를 반환. 이 것을 이용하려면 ↓처럼 const와 숫자를 저장해서
//이용하면됨.

const isChild = makeBetweenFunc(0, 10)
// ƒ (num) {
//         return num >= 0 && num <= 10;
//     }                  makeBetweenFunc에 0,10 min,max를 입력해서 isChild 변수에 저장.             
isChild(40)   // isChild(40)을 해보면 false 출력.
false
const isAdult = makeMysteryFunc(19, 50)
isAdult(30)
ture
const isSenior = makeMysteryFunc(51, 120)
//이 3개의 const는 makeMysteryFunc라는 팩토리함수를 씀


//함수객체와 메서드 / 
[1, 2, 3, 4, 5].indexOf(5)
4
//5의 indexOf위치는 4
//모든메서드는 함수이기도하다. 
//특성이나 객체값(value)으로 함수를 사용할수 있다. ↓처럼

const MyMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3
    },
    multiply: function (x, y) { return x * y; }
}

//MyMath 라는 객체리터럴을 만들었다 콘솔에서   
MyMath.PI
3.14159
MyMath.square(5)
25
MyMath.cube(5)
125
//이렇게쓰니 작동이잘됨 객체를 메서드로 사용한다.★★★★★
MyMath['cube'](4)
64
//이렇게도 쓸수있지만 이상한구문이다 보통은 메서드로 실행한다.
//자주써서 js에서 단축키,속기법을 만들었다.
//콜론과 function만 지우면된다
const MyMath1 = {
    PI: 3.14159,
    square(num) {     //콜론과 function지운 속기법
        return num * num;
    },
    cube(num) {
        return num ** 3
    }
}
// 객체안에 있으니 쉼표는 있어야함.


// this 키워드
//메서드에 있는 객체를 가리킬때 this키워드를 사용함 
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {                //속기법으로 쓴 키값 함수객체
        console.log(this.color)      //콘솔보면 grey 출력
        console.log('THIS IS:', this)  //THIS IS: {name: 'Blue Steele', color: 'grey', breed: 'scottish fold', meow: ƒ}
        console.log(`${this.name} says MEOW~~`); //Blue Steele says MEOW~~  
    }
}
const meow2 = cat.meow;
//console.log(color) this를 안붙이고 color만 쓰면 오류남. 값을 출력하려면 특성앞에 this 를 꼭붙여야함 

//this키워드는 보통 객체를 가리키는데 항상그렇진않는다 함수를 호출하는 방법에따라다름
//위예시들에서 this는 객체를(중괄호) 가리키는데, 이상하지만 다른 예가 있다.
// const meow2= cat.meow;
// meow2()
// says MEOW~~
//cat.meow를 const 저장했는데 답이 sasys MEOW~~가 나옴. 
//meow2앞에 window 가생략된건데 window에서 .name을 찾지못하니 ${}값은못찾고
//says MEOW~~만 나온것

//cat.meow()
// THIS IS: {name: 'Blue Steele', color: 'grey', breed:..} 
// Blue Steele says MEOW~~
// meow2()
// THIS IS: Window {window: Window, self: Window, document: document, name..}
// says MEOW~~
//cat.meow()는 THIS IS에 cat의객체가 나왔는데 meow2()는 window객체가 나옴?!!?
//window는 js의 내장객체. window는주요객체,최상위객체 window안에 모든게 다있다 
//cat.meow()에서 객체는 .왼쪽인 cat을 가리키고 meow2()에는 .이 없는데 그앞에
//window가 있는데 생략됐다고 보면 window가 왜나왔는지 이해가된다. 디폴트값이다.


//alert같은객체도 윈도우 안에있다.
function scream() {    //속기법 함수객체
    console.log('Ahhh')
}
scream()
    - Ahhh
window.scream()   // 방금만든 함수객체 scream도 윈도우안에 객체로 있다
    - Ahhh

window.alert('really?')
// alert대신 window.alert 을써도 경고창나타남 아무도이렇게하진않지만


//Try/Catch 사용하기 -항상 함께일하고 오류및 예외를 처리한다
//오류를 잡아내서 코드실행이 중단되지 않게하는 역할. 
try {
    hello.toUpperCase()
}
catch {
    console.log('error!!')
}
console.log('after')
//hello는  문자열인데''을안써서  오류가난다
//오류가 날것같으면 try문과 catch문으로 감싸주면된다 try하나만으론 안됨
//catch란 뭔가 잘못되어 try문에서 오류나면 실행하는 코드문이다
//try,catch를 안썼을때 마지막줄 console.log를 실행하면 hello.toUpperCase 에서 
//오류가 나고 그다음줄로 넘어가질않는다. 이럴때 try,catch를 쓰면
//코드를 실행시키고 오류를 처리할수 있게된다.

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    }
    catch (e) {
        console.log(e);    //콘솔보면 TypeError가뜸
        console.log('pleas pass a string next time!')
    }
}
//yell(135)숫자를 넣으면 toUpperCase땜에 오류가난다 이럴때 try와 catch를사용한다
//msg가 문자열이 아닌 상황을 처리하기위한 방법중 하나이다.
//colt쌤은 뭔가 잘못되면 catch에 오류뜬내용을 엑세스한다 그리고 console.log로 출력.
//'문자열을넣으세요'라고 출력하는게 최선의방법은아니다 사실 앞뒤가 안맞지만 그냥 예시.