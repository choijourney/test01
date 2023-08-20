//switch 조건문    switch와 case -
//일치비교로 조건을 확인한다 비교하려는 인수값과  case문의 값의 
//형이 같아야한다.  break를 쓰지않으면 멈추지않고 case가 계속 작동한다.
// 값을찾다가 못찾으면 default답을 출력한다 default를 대개는 쓰지만 필수는아님 
// case6,7 처럼 답을 같게 하고싶으면 연속으로 묶어서 콘솔로그를 써도된다
//switch문은 동등연산자(==)가 아닌, 일치연산자(===)로 비교한다
const day = 2;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
    case 7:
        console.log("Weekend!!")
        break;
    default:
        console.log("I don't know that.")
}


// if (day === 1) {             위에 switch문을 if문으로 바꿈
//     console.log("monday")
// }
// else if (day === 2) {
//     console.log("tuesday")
// }
// else if (day === 3) {
//     console.log("wednesday")
// }
// else if (day === 4) {
//     console.log("thursday")
// }
// else if (day === 5) {
//     console.log("friday")
// }
// else { console.log("I don't know that.") }



// case 3:    두 case문을 묶음
// case 5:
//   alert('계산이 틀립니다!');
//   alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
//   break;


// case '2':
//     alert( '2를 입력하셨습니다.' );
//     break;

//   case 3:    prompt함수는 사용자가 입력필드에 기재한값을 문자열로 변환하기때문에
//     alert    숫자3과 비교하면 형 자체가 달라서 이 코드는 절대 실행되지 않는다
//     break;    대신 default문이 실행된다
// default:
//     alert( '알 수 없는 값을 입력하셨습니다.' );
// }


//switch문과 case문은 모든 형태의 표현식을 인수로 받는다.
// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     alert("표현식 +a는 1, 표현식 b+1는 1이므로 이 코드가 실행됩니다.");
//     break;

//   default:
//     alert("이 코드는 실행되지 않습니다.");
// }

// 표현식 +a를 평가하면 1이다. 이 값은 첫 번째 case문의 표현식 b + 1을 
// 평가한 값(1)과 일치한다 따라서 첫 번째 case문 아래의 코드가 실행된다.


switch (browser) {
    case 'Edge':
        alert("Edge를 사용하고 계시네요!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
        break;

    default:
        alert('현재 페이지가 괜찮아 보이길 바랍니다!');
}
//switch문을 if문으로 바꾸기  switch문이 가독성이더좋다.

if (browser === 'Edge') {
    alert('Edge를 사용하고 계시네요!');
} else if (browser === 'Chrom' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
} else {
    alert('현재 페이지가 괜찮아 보이길 바랍니다!');
}


//if를 swich로 변경 과제    
// let a = +prompt('a?', '');

// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }

// if (a == 2 || a == 3) {
//     alert('2,3');
// }  


//prompt 
let a = +prompt('a?', '숫자를입력해주세요');
//첫번째인수는 프롬프트상자에 표시되는 레이블이고 두번째인수는 텍스트박스에 표시되는문자열
//두개의 인수는 생략가능.  prompt는 사용자가 입력한 값 모두를(숫자까지) 문자열로 반환해서
// 사용자 입력 값을 숫자로 얻고 싶은 경우 타입을 변환해야한다.
switch (a) {
    case 0: alert(0);
        break;
    case 1: alert(1)
        break;
    case 2:
    case 3:
        alert('2,3')
}//prompt 앞에 +를 입력해야 alert이 출력된다. +없으면 프롬프트창이 그냥 사라짐
//아니면 Number(prompt()) 도 작동

let agePrompt = prompt('나이를 입력하세요.');

let age = Number(agePrompt);  // Number를 함수로 사용하여 숫자 값으로 변환한다.

if (age >= 20) {
    console.log('통과');
}
//Number를 없애고 +prompt로 바꿔도 작동
//만약에 Number를 없애고 agePrompt만 남겨도 이식은 작동한다 왜냐면
//if에서는 == , ===를 내가 선택해서 쓸수있다 여기서는 >=이니 '20'>=20 은 같게본다



// 배열[] Arrays - 값의 순서가 있는 집합 (배열엔 인덱스가 있다)   
let days = ['monday', 'tuesday', 'wednesday']
days.length
3
[].length
0
// days.length 배열의갯수 3개.  [].length는 빈배열이니  0.
let kitch = [true, undefined, 12, false, 'hiii']
// 다른프로그램은 배열에 숫자만 있거나 문자만 있어야한다 그러나 JS는 섞어도 가능
// let students=[]; 빈배열가능, 대괄호 안의 값들은 쉼표로 구분. 문자면 ''쓰기
// days.length 3 이지만 indexof는 [0]부터 시작하기땜에 indexOf[2]='wednesday'
// days[1][0] 'T' tuesday의 0번째글자 'T' 

// indexOf를 이용한 배열수정  
let middlename = "cort";
middlename[0]
'c'
middlename[0] = 'P'
middlename
"cort"
// 원래는 ↑이렇게 바뀐값이 저장되지않는데 배열을 쓰면 바뀌어서 저장된다
// 배열의 요소를 index로 수정해보자
let colors = ['rad', 'orange', 'yellow'];
colors[0] = 'red'
colors - ["red", "orange", "yellow"]
// 바뀐값으로 저장.
colors[10] = 'indigo'
// colors[10]에 인디고를 지정해보았다
colors - ["red", "orange", "yellow", emptyx7, "indigo"]
// 중간에 empty*7로 메워서 답을내놓았다
colors[9] - undefined
// colors[9]을 쳐보니 undefined를내놓는다
//index를 이용해서 추가,변경가능하지만 인덱스를 찾는게 번거로울때 
//아래 메서드를 이용하는방법이 있다


//push 와 pop 메서드    - 배열의끝에 추가나 제거
let movieline = ['tom', 'nancy']
movieline.push('oliver')      //push- 배열의 끝에 항목을 추가
movieline - ['tom', 'nancy', 'oliver']
// movieline을 쳤을때 배열에'oliver'까지 추가저장돼서 답을줌
let cat = "blue";
cat.toUpperCase()
"BLUE"
cat
"blue"
// ↑ 배열을 안쓰고 .메서드를 썼을땐 저장이 안된다
movieline.push('harry', 'eva')
movieline - ['tom', 'nancy', 'oliver', 'harry', 'eva']
// push에 여러값을 추가할수도있다
movieline.pop()          //.pop 배열의 맨끝제거
"eva"
movieline - ['tom', 'nancy', 'oliver', 'harry']
// .pop은 ()에 아무것도적지않는다 그럼 맨끝 이름을 지운다 이것을 변수로 이용할수도있다
let person = movieline.pop()
person
"harry"
movieline - ['tom', 'nancy', 'oliver']


// shift는 맨앞 제거 , unshift는 맨앞추가
movieline.shift()
"tom"
let nextPatron = movieline.shift()
nextPatron
"nancy"
movieline - ['oliver']
movieline.unshift('vip')
movieline - ['vip', 'oliver']

// concat 접합. 배열을 합치되 기존의배열을 수정하지않음 let으로 지정해줄수있다
let cats = ['blue', 'kitty']
let dogs = ['rusty', 'wyatt']
cats.concat(dogs)
    - ["blue", "kitty", "rusty", "wyatt"]
cats
["blue", "kitty"]
dogs.concat(cats)
    - ["rusty", "wyatt", "blue", "kitty"]
let comboparty = dogs.concat(cats)
comboparty
    - ["rusty", "wyatt", "blue", "kitty"]

//  includes 불리언 메서드의 예시로 true나 false로 응답.
cats.includes('blue')
true
cats.includes('Blue')
false
// 대소문자가 일치되지않으면 false가된다

// 배열의 indexOf / 어떤요소가 배열에 있는지 없는지를 쉽게 알아낸다
"Blue".indexOf('e')
3
"Blue".indexOf('0')
    - 1    //없는 문자면 -1을 출력
comboparty["rusty", "wyatt", "blue", "kitty"]
comboparty.indexOf('rusty')
0
comboparty.indexOf('kitty')
3
comboparty.indexOf('uetett')
    - 1
// 어느위치에 있는지 알려주고 없는값이면 -1 을 내놓는다
// 만약 같은이름이 두개가 있을때 맨앞에 1개만 알려준다 블루가 두개라면
// 2개라는건 알려주지않는다


// reverse 배열의 앞뒤를 뒤집는다 ()빈괄호가 꼭필요하다
comboparty.reverse()
    - ["kitty", "blue", "wyatt", "rusty"]
comboparty
    - ["kitty", "blue", "wyatt", "rusty"]
// reverse  원본을 깨고 저장된다


// .slice 원본은깨지않고 복사해줌  start만 정하면 배열의끝까지 다 표시됨 괄호필요
//colors.slice()했을때 오른쪽위에 f(?start,?end)이렇게 뜨는데 이 물음표는 
//필수가 아니라는뜻
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colors.slice()
    (7)['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
let coolColors = colors.slice(3)
undefined
coolColors     //3의 green부터 끝까지 출력
['green', 'blue', 'indigo', 'violet']
colors
    - ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
colors.slice(2, 4)
    (2)['yellow', 'green']
// 2의 yellow 와 4인 blue 전인 green에서 끝난다
let warmColors = colors.slice(0, 3)
undefined
warmColors
    (3)['red', 'orange', 'yellow']
colors
    (7)['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
colors.slice(-2)
    (2)['indigo', 'violet']
// -2 를 쓰면 마지막 2개가 나온다 "indigo","violet"


// .splice 
//어느위치인지 숫자, 얼마나많이 삭제할지 숫자를 씀, 뭘넣을지 이름적기.
// 바뀐배열을 저장한다
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
undefined
colors.splice(5, 1)
['indigo']
colors
    (6)['red', 'orange', 'yellow', 'green', 'blue', 'violet']
// indexOf 5 자리에있던 indigo가 1개 사라짐
colors.splice(1, 0, 'red-orange')    //1번자리에 'red-orange'추가
colors
    (7)['red', 'red-orange', 'orange', 'yellow', 'green', 'blue', 'violet']
colors.splice(4, 0, 'yellow-green', 'forestgreen')
colors
    (9)['red', 'red-orange', 'orange', 'yellow', 'yellow-green', 'forestgreen', 'green', 'blue', 'violet']
colors.splice(2, 2, 'deleted!!')
    (2)['orange', 'yellow']
colors
    (8)['red', 'red-orange', 'deleted!!', 'yellow-green', 'forestgreen', 'green', 'blue', 'violet']
// 2위치의 2개인 orange, yellow 사라지고 'deleted'생김

let days = ['monday', 'tuesday', 'wednesday']
undefined
days.splice(1, 2)
    (2)['tuesday', 'wednesday']
days
['monday']
// 1자리에 tuesday부터 2개가 사라짐 monday만남음

// 배열중간값을 바꾸는건 효율적이지않다 


// .sort  배열의 항목을 적절한 위치에 정렬하고 저장. 
// 실무에서 자주사용하는데 배열의 sort는 아님  정렬의 방법때문인데 
//  작은숫자에서 큰숫자 순서로 정렬이아닌 첫번째자리숫자크기 순서대로 
// 정렬한다 함수를 사용해서 배열방법을 오름차순, 내림차순으로 바꿀수있다.(나중에배움) 
// .sort() 괄호안에 아무것도 안넣고 호출하면 모두 문자열로 반환
//그리고 각문자열의 UTF 16코드 유닛값을 비교한다 이기초 코드넘버는 각문자열마다 주어짐

let scores = [1, 70, 100, 2500, 9, -12, 9, 34]
undefined
scores.sort()
    (8)[-12, 1, 100, 2500, 34, 70, 9, 9]


//toString 메서드  - 배열을 문자열로 변환
const array1 = [1, 2, 'a', 'la'];
console.log(array1.toString());
- '1,2,a,la'


// 배열에서 삼중등호연산자와 이중등호연산자     참조타입과 동일성테스트
1 === 1 true
[1] === [1] false
[] === []false
//같은내용인데 false가뜬다 배열은 고유한 메모리를 갖기때문에 두개는 다른 메모리를 갖는다
//js는 배열안의 내용엔 관심이 없고 다른메모리의 배열이니까 false를 출력한다
[1, 2, 3] === [1, 2, 3] false

let nums = [1, 2, 3]
undefined
let numsCopy = nums;
undefined
numsCopy
    (3)[1, 2, 3]
nums.push(4)
4
nums
    (4)[1, 2, 3, 4]
numsCopy
    (4)[1, 2, 3, 4]
nums === numsCopy
true
// 같은메모리에서 참조하게 let으로 연결해서 이제는 true가뜬다
// 배열을 쓸때는 같은 참조를 따르는 배열인지 확인해야한다
// 0.9999999는 15갠가쓰면 1로바뀌지만 배열은 1만개도 쓸수있다


// const와배열    --원래 const는변하지않는다 바꾸려하면 오류뜨고난리난다
// 그러나 배열과 함께라면 바꿀수있다.  그래도 변수자체가 재할당되진 않는다
const nums = [1, 2, 3]
// 안에 콘텐츠는 메서드를 이용해 추가,제거 할수있다
nums.push(4)
4
nums
    - [1, 2, 3, 4]
nums = 1
error
nums = [1, 2, 3, 4]   //같은숫자같아보여도 재지정은 안된다 다른메모리의배열로 보기때문
error
// const특성상 재지정은안된다


// 배열의중첩   배열안에 배열을 대괄호를 이용해 중첩할수있다
const gameBoard = [['X', 'O', 'X'], ['0', null, 'X'], ['0', '0', 'X']]
undefined
gameBoard
    (3)[Array(3), Array(3), Array(3)]0: (3)['X', 'O', 'X']1: (3)['0', null, 'X']2: (3)['0', '0', 'X']length: 3[[Prototype]]: Array(0)
gameBoard[1][1]
null
// indexOf 를이용해 대괄호 1의 1위치인 null

