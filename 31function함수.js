// function 함수★  코드를 재사용 가능하게 언제든 사용할 수 있도록 이름을 붙여놓은것.
//코드의중복을 줄이는데 무척유용하고 더읽기 쉽고 이해하기 쉽게 만듦 언제나,모든곳에 사용
function singSong() {
    console.log('DO');
    console.log('RE');
    console.log('MI');
}
//함수를 만들었다고해서 바로 실행되진않고 singSong()을 입력하면 답이나온다
//함수를 정의하고 그다음에 실행. 끝
singSong()
singSong()

//인수 :전달하는입력값  함수의 ()안에 변수이름을 넣는데 이게 바로 인수
function greet(firstName) {
    console.log(`firstName is: ${firstName}`)
    console.log(`Hey, there~! ${firstName}`)
}
// greet('barry')          콘솔에서 인수자리에 ('barry') 를 넣어보았다
// firstName is: barry    그러니 greet(firstName)은 매개변수, 플레이스홀더와같다
//매개변수를 무엇으로든 정할수 있다 콘솔에서 인수를 정의할때 효과가있다 
//만약 greet() 인수가 정해지지않으면 디폴트를 undefined으로 한다
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
rant('i hate beets')
//colt test 36:Rant Exercise / console.log(message)괄호안에 message만 넣어도 
//콘솔에서 rant() 괄호안에 내용만넣으면 작동한다 

//인수가 여러개
function greet(firstName, lastName) {
    console.log(`Hey there,${firstName} ${lastName[0]}.`)
}
greet('George', 'Clooney')
// - Hey there,George C.    
//${firrstName,lastName}은 작동이안됐다 $()$()따로써줘야한다

//문자열만 나란히 쓰는게 아니고 문자열이나 숫자,불리언도 같이 사용할수있다
function count(count, fruits) {
    console.log(`I got ${count} ${fruits}.`)
}
// count(5, 'tomatos')
// function(,)인수의 순서와 템플릿리터럴${}값순서와 콘솔에 적는순서는 같아야한다 

function repeat(str, repTimes) {
    for (let i = 0; i < repTimes; i++) {
        console.log('Hi')
    }
}
// repeat('hey',5)    -(5) Hi     hey라고입력해도 console.log에 'hi'라고이미 쳤더니     
//답을 'Hi'로준다 
//<저위에 코드들이랑 겹쳐서그런지몰라도 코드가안먹혀서 콘솔에서 쳐봤더니 작동>

function repe(str, repTimes) {
    for (let i = 0; i < repTimes; i++) {
        console.log(str)
    }
}
//repe('hey',5)     -(5)hey

function rep(str, repTimes) {
    let result = '';
    for (let i = 0; i < repTimes; i++) {
        result += str;
    } console.log(result);
}
-rep('$', 3)
    - $$$
// result += str; 문자열을 for루프를 써서 반복시켜줄거니까. 순서바뀌면 작동안함
//인수가 둘인데 콘솔에 하나만 적으면 undefined뜸
function cou(count, fruits) {
    console.log(count, fruits)
}
//cou(3)   -3 undefined

//colt test 37:Multiple Args(인수) Exercise
function isSnakeEyes(arg1, arg2) {
    if (arg1 === 1 && arg2 === 1) {
        console.log('Snake Eyes!')
    } else {
        console.log('Not Snake Eyes!')
    }
}

//colt test 37: Multiple Args Exercise
function isSnakeEyes(arg1, arg2) {
    if (arg1 === 1 && arg2 === 1) {
        console.log('Snake Eyes!')
    } else { console.log('Not Snake Eyes!') }
}
// 마지막 }중괄호 닫기 항상까먹음 주의!!!  

// function을 사용할때 console.log('hey there') 이 괄호안 내용은 캡쳐
// 하거나 재사용할수있는 출력값이 아님.
// toUpperCase나 indexOf같은 메서드는 변수내의 값을 캡처해서 출력한다

function add(x, y) {
    console.log(x + y)
}
//add(3,3) - 6  여기서 6은 저장되는게 아니라 console.log를할뿐.
//콘솔에 let r=add(3,3) 이렇게 저장을해봐도 r은 undefined가 뜬다.
//저장하기위해서는 반환 키워드가 필요한데 그것은 바로 'return'

function addd(x, y) {
    let sum = x + y;
    return sum;
}
//13이라는 답은주지만 let변수인 sum을 치면 not defined뜸 왜냐면 함수안에 let은 함수안에
//만 존재하기때문. let으로 저장된게 아니라 함수안에서만 let으로 거품처럼 존재하기때문.
//하지만 콘솔에 const(let) sum=addd(9,4)를 입력하면 저장되어 sum을 입력했을때 13이 뜸.
//이렇게 함수밖으로 값을 내보낼수있다.

//return특성 : return을 쓰면 함수가멈춘다 return다음줄에 무엇을 적어도 (console.log도
function addd(x, y) {
    let sum = x + y;
    return sum;
    console.log('end do function')
}
//)절대 실행되지않는다 가끔 return을 조건블록에 넣을때도 있는데 
function adddd(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y
}
//하나의값만 얻을수있다 x+y는 하나의숫자니까 답을얻을수있는데 값이 두개면 하나만얻을수있다
//두값을 얻고싶다면 배열안에 넣을수밖에없다. 그러나 하나의 배열이어야한다
function adddd(x) {
    return x
}
//adddd([1,3])  - [1,3]   
//요약하면 return을 사용하면 함수의값을 얻을수있고 그값을 저장하고 캡쳐할수있다 응용해서

let total = addd(addd(2, 2), 4)
undefined
total
8
// addd(2,2) =4 인데 ,4 를 하면 8이고 여기에 변수를 total로 정하면 console.log에서처럼
//사라지지않고 저장된다 저장된값은 다시사용할수있다 console.log랑 다르다.

//colt test 38 Return Value Practice
// function multiply(num, numb) {
//     console.log(num * numb)
//     console.log(num * numb)
//     return (num * numb)
// }
// 문제에 return을 사용하라고 해서 return은 함수를 멈추니까 맨마지막에 썼다.
// ↑ 이렇게 안해도 됨  ↓이 식에다가 multiply(2,3) / multiply(9,9) 이렇게쓰면되니깐.
function multiply(num,numb){
    return num*numb
}

//colt test 40: Last Element Exercise
function LastElement(arr){
    if (arr.length===0){
        return null
    } else {
        return arr[arr.length-1]
    }
}
//arr중 마지막글자만 빼낼거니까 arr.length-1 해준값이 마지막 index이니까 대괄호에 써줌

// colt test 41: Capitalize Exercise
function capitalize(egg){
    return egg[0].toUpperCase()+egg.slice(1)
}
//.toUpperCase(0)을 넣으면 0부터 마지막글자까지 대문자로 바뀐다 첫글자만 바꾸고싶다면
//egg[0]에서 0번째글자를 꺼내서 첫글자만 바꿔주고 .slice로 나머지글자추가

//colt test 42 : Sum Array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
// sumArray([1,2,3]) //6 이렇게 배열의 총합계가 나오도록 식을 쓰는게 문제
//arr[i] => [i]의자리가 index자리이다. sumArray([2,2,2]) 했을때    sum + 
//arr[0],arr[1],arr[2]  이니까 2+2+2=8 이된다
//for of루프를 써봤는데 실패
//let total=0;위치를 for루프 다음줄에 넣었더니 원하는답이 아닌 답을줬다 for루프 전줄에
//넣었더니 원하는합계인 6이나왔다. sumArray([2,2,2])를 콘솔에 입력했는데 for루프 담줄에
//서는 2가나왔다. 변수 let total은 독립되게 for구문에서 빼서 변수를 주어야하니 그런거라
//고 추측. for구문에서 i쓸때 let 꼭쓰기!


// colt test 43 Days of the week 
function returnDay(day) {
    const days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }
    if (day > 7 || day < 1) {
        return null
    } return days[day]
}
    //returnDay(1) // "Monday" / returnDay(2) "Tuesday// returnday(3)을 입력하면
    //수요일이 나오게 .. 일요일까지만들고, 0이나 7일 초과는 null이 뜨게끔.
    //returnDay(7)을 입력하면 'Sunday'가 나온다. 그렇다면 returnDay()괄호안이 키로
    //되는건가. return할때 [day]를빼고 day만 입력했더니 ['monday,tuesday'...]배열이
    //나타났다. []대괄호니까 index같기도한데 :이걸쓰는거보니 키같기도하고 아직모르겠다
    // 객체리터럴을 다시 공부하고오니 보인다..! 확실하지않음 객체리터럴 특성이
    //days[1] 1이 키고 변수뒤괄호에 넣어주면 값으로 'Monday'를 내놓는다
    // 그런데 함수안에 있으니 바로실행되지않고 return에서 days[day] 이렇게 묶어주면
    //실행된다

    //↑는 너무 복잡한설명. 문제에 배열아니면 객체리터럴을 쓰라고 써있는데 숫자를 키로 쓰
    //려면 객체리터럴이 편하니까 객체리터럴을 써서 키값을 정함 else {return ?? } 무엇을
    //어떻게 리턴할것인지 잘생각해보기 'Monday'를 리턴하고싶은데 객체리터럴 특성상 
    //week[3] 이렇게 써야 값인 'Wednesday'가 나온다