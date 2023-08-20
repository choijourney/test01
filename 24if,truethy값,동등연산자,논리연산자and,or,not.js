let total = 1 + 3;
// 1+3 ; 숫자만쓰면 콘솔에 아무것도 안뜨고 let으로 변수이름을 저장해야 변수이름을 입력해
//서 4를 출력할수있다

// if문
console.log("BEFORE CONDITIONAL")
if (1 + 1 === 2) {
    console.log("MATH STILL WORKS!")
}
console.log('AFTER CONDITIONAL')
// if (괄호안계산이true일때) {console.log("조건문이 실행된다")}
//콘솔보면 console.log 3줄 출력됨

const dayOfWeek = 'Monday';   //Saturday,friday로 바꿀수있음
if (dayOfWeek === 'Monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'Saturday') {
    console.log("YAY I LOVE SATURDAYS!")
}
else if (dayOfWeek === 'Friday') {
    console.log("FRIDAYS ARE DECENT.")
} else {
    console.log("MEH")
}
// else => if와 else if로 지정한 단어들 
//(예를들어 friday)외에 다른모든단어를 변환해준다

const age = 99;
if (age < 5) {
    console.log("you are a baby. you get in for free!")
} else if (age < 10) {
    console.log("you are a child. you pay $10")
} else if (age < 65) {
    console.log("you are a adult. you pay $20")
} else {
    console.log("you are a senior. you pay $10")
}
// else는 항상마지막에씀


// Nesting 조건문 안에 조건문넣기 
// const password = prompt("비밀번호를 쳐주세요!");
// if (password.length >= 6) {
//     console.log("잘하셨습니다!")
// } else {
//     console.log("비밀번호는 최소 6글자 이상이어야 합니다")
// }
// if (password.indexOf('') === -1) {          공백이없을때
//     console.log("Good job! No space!")
// } else {
//     console.log("password cannot contain spaces!공백이 없어야합니다.")
// }   
//★★이렇게 식을 쓰면 비밀번호를 한글자만쓰고 공백이없을때 콘솔로그로 
//비밀번호는 최소 6글자이상이어야합니다 와 굿잡! 이 함께 뜬다. 그렇게 하지 않기위해선
//    아래 식처럼 네스팅해서 if안에 if를 넣으면 된다★

const password = prompt("비밀번호를 쳐주세요!");
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {     //이코드는 비번길이가 6이상일때만
        console.log("goodjob!");            //공백여부를 확인하고
    } else {                           //공백이 있다면 아래코드를 실행
        console.log("password cannot contain spaces!공백이 없어야합니다.")
    }
} else {                 //비번이 5이하일때 아래코드실행
    console.log("비밀번호는 최소 6글자 이상이어야 합니다")
}
//   콘솔에서 테스트하면 예를들어 'hi'.indexOf('') 는 -1 
//  hi에 공백이없기때문에 -1이뜸   따라서  공백이없을때 = -1   


//Truth-y값과 False-y값
const userInput = prompt("아이디입력부탁");
if (userInput) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}
// ↑경우 userInput에  아무거나 적어도 0,null을 적어도 TRUTHY로 나오게 돼있음 
// >등호 비교문을 안썼고 userInput을 쓰면 콘솔로그가 작동되게 했기때문에 문자열이 있다면
// Truthy , 아무것도안적을경우 FALSY 
//문자열이 있는지 빈문자열인지 확인할때 쓴다

if (0) {                     //const없이 if로 시작
    console.log("TRUTHY")    //인수자리에 0,null같은 부정적 단어를 쓰면 faulsy 출력 
} else {
    console.log("FALSY")
}
// ↑ 경우 0=truthy 인데 답은 falsy가 나온다 null,undefined,naN 모두. 이 부정적단어들
// 빼고는 모든 양수,-1음수,공백을 인수에 쓰면 truthy로나온다


//동등연산자 와 일치연산자 == /===
// !== 네거티브   1!=='1' true   숫자와 문자열을 구분한다    ===와비슷
// 1!='1' false 문자와숫자를 같은형으로 일치시킨후비교   ==와비슷  1=='1' true
// 가끔 심각한오류를 발생시킨다 null==undefined; 0==false; 는전혀다른데 true라고한다
// 그래서 !== , === 를 주로쓰라고한다


//논리연산자 논리함수 and &&
// const Id = prompt("Enter your Id");
// if (Id.length >= 6 && Id.indexOf(' ') === -1) {     Id글자글이가 6보다 크거나같거나, 공백이없을때
//     console.log("valid Id")
// } else {
//     console.log("Id를 다시정해주세요")
// }
// && =and 두명령을 하나의명령문으로 묶는다 명령모두 다 참이어야 true 

//colt test 24 logical and mystery
// const mystery = 'Pppppp7'
// if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1)
// {console.log ('you got it!)} 
//string.indexOf => 특정 문자의 위치를 찾기위해서 indexOf 함수를 사용한다
//문자열에서 특정 문자열(searchvalue)을 찾고, 
//검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴
// 찾는 문자열이 없으면 -1을 리턴. 문자열을 찾을 때 대소문자를 구분


//논리함수 or
// || = or  둘중하나만 참이면 true  0||undefined  false 둘다부정이니 false  
//false||false false 둘다거짓    false||true  true    1!==1 ||10===10 true


// const age = 65;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("free");
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("invalid age")
// }

// && and 가 ||or보다 먼저실행된다 우선순위가 높다 
// 먼저실행시키고싶은부분이있다면 () 괄호로 순서정해주면됨


//논리함수 not 
// not!  거짓인 표현식앞에 !붙이면 결과가 참으로 나온다 !null true  !(0===0) false
// !(3<=4) false !!null 두개를쓰면 참이됐다가 거짓됨. 

let firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("try again!");
}
// !firstName = 이름이없을경우 공백일경우 tryagain뜨게만들었음
//이작업 실행은 한번뿐. 반복되진않음
const age1 = 45;
if (!(age1 >= 0 && age1 < 5 || age1 >= 65)) {
    console.log("you are not a baby or a senior");
}
// 0~4세 나 65세 이상이 아니면! you are not a baby ~. 
// !not을 쓰면 긴문장 전체가 부정됨 혹은 반전됨  
