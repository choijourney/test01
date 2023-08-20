// function 함수★  코드를 재사용 가능하게 언제든 사용할 수 있도록 이름을 붙여놓은것.
//코드의중복을 줄이는데 무척유용하고 더읽기 쉽고 이해하기 쉽게 만듦 언제나,모든곳에 사용
function singSong() {
    console.log('DO');
    console.log('RE');
    console.log('MI');
}
//함수를 만들었다고해서 바로 실행되진않고 singSong()을 입력하면 답이나온다
//함수를 정의하고 그다음에 실행.
singSong()
singSong()

//인수 :전달하는입력값  함수의 ()안에 변수이름을 넣는데 이게 바로 인수
function greet(firstName) {
    console.log(`firstName is: ${firstName}`)
    console.log(`Hey, there~! ${firstName}`)
}
// greet('barry')          콘솔에서 인수자리에 ('barry') 를 넣어보았다
// firstName is: barry     (firstName)은 매개변수, 플레이스홀더와같다
//매개변수를 무엇으로든 정할수 있다 콘솔에서 인수를 정의할때 효과가있다 
//만약 greet() 인수가 정해지지않으면 디폴트를 undefined으로 한다

//colt test 36:Rant Exercise 
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
rant('i hate beets')   //rant의 인수를 대문자로 3번출력하고 한번 실행해보라



//인수가 여러개
function greet(firstName, lastName) {
    console.log(`Hey there,${firstName} ${lastName[0]}.`)
}
greet('George', 'Clooney')
// - Hey there,George C.    
//${firrstName,lastName}은 작동이안됐다 $()$()따로써줘야한다

//문자열만 나란히 쓰는게 아니고 문자열이나 숫자,불리언도 같이 사용할수있다
function count(count, fruits) {                  //이 (count,fruits)인수순서와
    console.log(`I got ${count} ${fruits}.`)  //템플릿리터럴 순서가 같아야하는건 아니지만 다를경우 헷갈릴수있다
}
// count(5, 'tomatos')


function repeat(str, repTimes) {
    for (let i = 0; i < repTimes; i++) {
        console.log('Hi')
    }
}
// repeat('hey',5)    -(5) Hi     hey라고입력해도 console.log에 'hi'라고이미 쳤더니     
//답을 'Hi'로준다 


function repe(str, repTimes) {
    for (let i = 0; i < repTimes; i++) {
        console.log(str)
    }
}
//repe('hey',5)     -(5)hey   5번출력되지만 hey가 펼쳐지지않고 출력됨

function rep(str, repTimes) {
    let result = '';             //빈문자열
    for (let i = 0; i < repTimes; i++) {
        result += str;
    } console.log(result);
}
-rep('$', 3)
    - $$$   // 펼쳐져서 반복됨


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

// function을 사용할때 console.log('hey there') 이 괄호안 내용은 캡쳐
// 하거나 재사용할수있는 출력값이 아님.
// toUpperCase나 indexOf같은 메서드는  const happy ='i am happy'.toUpperCase();
//happy;   // 'I AM HAPPY'    이런식으로 변수에 저장해 쓸수있다.

function add(x, y) {
    console.log(x + y)
}
//add(3,3) - 6  여기서 6은 저장되는게 아니라 console.log를할뿐.
//콘솔에 let r=add(3,3) 이렇게 저장을해봐도 r은 undefined가 뜬다.
//출력값을 출력하는데 그치지않고 저장하기위해서는 반환 키워드가 필요한데 return 이라고쓰면된다.

function addd(x, y) {
    let sum = x + y;
    return sum;
}
//return을 쓴뒤 콘솔에 const(let) sum=addd(9,4)를 입력하면 저장되어 sum을 입력했을때 13이 뜸.
//이렇게 함수밖으로 값을 내보낼수있다. 하지만 이 과정없이 let변수인 sum을 바로치면 not defined뜸
// 왜냐면  함수안에서 변수가 저장됐기때문에 함수안에만 있는 변수이기떄문.


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
//두값을 얻고싶다면 배열안에 넣을수밖에없다. 하나의 배열이어야한다
function adddd(x) {
    return x
}
//adddd([1,3])  - [1,3]   
//요약하면 return을 사용하면 함수의값을 얻을수있고 그값을 저장하고 캡쳐할수있다 응용해서

let total = addd(addd(2, 2), 4)
undefined
total
8
// addd(2,2) =4 인데 ,4 를 하면 8이고 여기에 변수를 total로 저장하면 
//사라지지않고 저장된값은 다시사용할수있다 console.log랑 다르다.

//colt test 38 Return Value Practice
function multiply(num, numb) {
    return num * numb
}

//colt test 40: Last Element Exercise
function LastElement(arr) {
    if (arr.length === 0) {
        return null
    } else {
        return arr[arr.length - 1]
    }
}
//arr중 마지막글자만 빼낼거니까 arr.length-1 해준값이 마지막 index이니까 대괄호에 써줌

// colt test 41: Capitalize Exercise
function capitalize(egg) {
    return egg[0].toUpperCase() + egg.slice(1)
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
//let sum=0 은 for 구문 안에 넣으려고 하면안된다. 변수를 for구문에 넣는건 그냥 당연히안되는거다. 
//return 자리는 for구문끝난 } 중괄호 다음줄에 쓴다. return을 for구문 안에 넣어 sum+=arr[i] 아랫줄에 쓰면
// return sum을 한번 실행하고 끝난다. 더이상 반복되지않아 한번만 더하고 끝난다.
//for of로 시도해봤는데 for of는 인덱스가없어서 안되다가 블로그에서 인덱스를 .keys()를 이용해
//얻는걸 보았지만 복잡해서 for구문을 쓰는게 낫다는걸 배웠다.



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
    //returnDay(1) // "Monday" / returnDay(2) // "Tuesday 화요일이나오게
    // .. 일요일까지만들고, 0이나 7일 초과는 null이 뜨게끔.

    //문제에 배열아니면 객체리터럴을 쓰라고 써있는데 숫자를 키로 쓰려면
    // 객체리터럴이 편하니까 객체리터럴을 써서 키값을 정함
    // 객체리터럴 특성상 days[3] 이렇게 써야 값인 'Wednesday'가 나오니까
    //returnDay(day) 인수를 만들고 days[day] 엮어주면 returnDay(1)입력하면   days[1] 작동함