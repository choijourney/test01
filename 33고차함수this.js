//고차함수 higher order function- 함수를 인수로 받는 함수. 다른함수를 인수로
//받아서 그 인수로 어떤작업을 하는 함수,함수를 반환할수 있는 함수
let greet = function () { console.log('hiii') }
//이 함수를 변수에 저장했으니 함수를 인수로 쓸수있음

function callTwice(func) {
    func();
    func();
}
//여기서는 func을 2번 실행하려고 괄호를 2번 추가했음

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}
callTwice(rollDie)
//숫자나 문자를 적는것처럼 callTwice()인수자리에 함수rollDie를 써보았다
//(rollDie())이렇게 쓰면 아예다른작업이 되는게 함수를 바로 실행해서 5같은 임의의숫자
//를 나오게 한다음 바로 그숫자를 callTwice(5) 이렇게 쓴다
//우리가 할작업은 rollDie 함수식을 전달해서 callTwice 함수식에서 두번 실행하게 만드는거다
//콘솔에서 실행해보면 1,3 /2,5/ 이렇게 func() 2번이 잘실행된다(첫째줄함수) 
function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}
//이번엔 10번실행시키기위해 for루프를 만든다 그다음 함수f가 전달하는 값을 실행시키게한다
// 콘솔에 callTenTimes(rollDie)를 입력하면 주사위 10번굴린 결과가 나온다.

//반환함수 
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
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
//랜덤숫자가 0.5보다 큰지 확인.그다음에 return이 오고 함수를 반환하는데, 방법은 몇가지가
//있지만 제일 쉬운건 return과 한줄에서 선언하는것.그다음 이전시간에 배웠던 함수표현식 
//즉 값이다. 이 값을 캡쳐해서 변수에 넣거나 또는 반환할수 있다. 임의의 숫자에따라서
//두 함수중 하나를 반환하게됨 콘솔에서 makeMysteryFunc()을 입력해보니 반환이 잘된다. 
//저장해서 쓰려고 const mystery= makeMysteryFunc() 
// mystery()
// CONGRATS, I AM A GOOD FUNCTION
// YOU WIN A MILLION DOLLARS!     콘솔에써보니작동

function isBetween(num) {
    return num >= 50 && num <= 100
}
//전달된 입력값이 50~100 사이인지 알려주는 isBetween이라는 함수/이 함수는 50,100으로 
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
isChile(40)
false
const isAdult = makeMysteryFunc(19, 50)

const isSenior = makeMysteryFunc(51, 120)
//이 3개의 const는 makeMysteryFunc라는 팩토리함수를 씀

//메서드 정의하기 / 
[1, 2, 3, 4, 5].indexOf(5)
4
//5의 indexOf위치는 4
//모든메서드는 함수이기도하다. 
//특성이나 객체값(value)으로 함수를 사용할수 있다. ↓처럼
//const math={multiply:function(x,y){return x*y;}} 여기서 객체는 오른쪽중괄호
//콘솔에 Math를 입력해서 화살표를 열면 왼쪽특성,오른쪽함수로 저장이되있다.

const MyMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3
    }
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
//콜론과 함수대신에 add나 multiply와같은 특성이름을쓰고 괄호와 중괄호를 쓴다
const MyMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3
    }
}
//콜론과 fucntion만 지우면됨. 객체안에 있으니 쉼표는 있어야함.

// this 키워드
//메서드에 있는 객체를 가리킬때 this키워드를 사용함 
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log('THIS IS:', this)
        console.log(`${this.name} says MEOW~~`);
    }
}
const meow2 = cat.meow;
//console.log(color) 혹은 name은 오류난다 (cat.meow()를 실행하면 색은정의할수없다고
// 나옴)  color혹은 name특성에 접근할수있도록 앞에 this.를 넣는다
// console.log(this.color);
// cat.meow()
// - grey

//this키워드는 보통 객체를 가리키는데 항상그렇진않는다 함수를 호출하는 방법에따라다름
//위예시들에서 this는 객체를(중괄호) 가리키는데, 이상하지만 다른 예가 있다.
// const meow2= cat.meow;
// meow2()
// says MEOW~~
//cat.meow를 const 저장했는데 답이 sasys MEOW~~가 나옴. 
//meow2앞에 window. 가생략된건데 window에서 name을 찾지못하니 ${}값은못찾고
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

//const meow2 = cat.meow(); 또하나궁금했던게 cat.meow뒤에()가 안붙어서
//작동이 안됐나 생각해봤었는데 실행해보니 괄호붙이면 아예 const로 선언이안됨.

//alert같은객체도 윈도우 안에있다.
function scream() {
    console.log('Ahhh')
}
scream()
    - Ahhh
window.scream()
    - Ahhh

window.alert('really?')
// alert대신 window.alert 을써도 경고창나타남 아무도이렇게하진않지만


//Try/Catch 사용하기 -항상 함께일하고 오류및 예외를 처리한다
//오류를 잡아내서 코드실행이 중단되지 않게하는 역할. 떄로는 코드가 잘못되어 오류가날수있다
//그 오휴가 외부로 퍼져나가 모든것을 망치기 전에 잡아내서 멈춰야한다
try {
    hello.toUpperCase()
}
catch {
    console.log('error!!')
}
console.log('after')
//hello는 저장되지않았고 ''문자열도 아니니 오류가난다
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
        console.log(e);
        console.log('pleas pass a string next time!')
    }
}
//yell(135)숫자를 넣으면 toUpperCase땜에 오류가난다 이럴때 try와 catch를사용한다
//msg가 문자열이 아닌 상황을 처리하기위한 방법중 하나이다.
//colt쌤은 뭔가 잘못되면 catch에 오류뜬내용을 엑세스한다 그리고 console.log로 출력.
//'문자열을넣으세요'라고 출력하는게 최선의방법은아니다 사실 앞뒤가 안맞지만 그냥 예시이다.