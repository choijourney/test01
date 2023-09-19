// 루프 loops 어떤기능을 반복하는방법 ★★★ 같은일이 연속으로 열번 반복되길 원할때 
//코드를 열번쓰는대신 루프로 반복할수 있다  ie(인터넷익스플로러)에선 작동안됨
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
//    i++  =  i+=1   두개는 1을더하겠다는뜻으로 같다      
for (let i = 1; i <= 10; i++) {
  console.log(i);
  console.log("나는루프다")
}
// console.log로 10번쓸일을 for루프로 2줄. i는 루프를 쓸때 많이쓰는 변수이름이다.
// i다음 j다음 k를쓴다. let i=1 이말은 i는1부터시작하고, i<=10; 불리언으로, 참이면
//루프는계속해서 실행된다 10보다 작거나같아야하니 1~10까지가 true다.
// i++는 1인 i한테 계속 1씩 +를 해준다는말이다
//리밋인 10까지 1씩 더해준다. 그래서 나오는값은 1 2 3 4 5 6 7 8 9 10 세로정렬모양이다.
// 이 세가지는 항상있고 주로 i라는 변수가 있다. 변수이름이 같은지 확인하자
// let j =1; i<10; i++  이렇게 실수하기가 쉽다
// 세가지부분을 나눠주는 ; 세미클론   i++자리에 곱하거나 빼기도 가능하다
for (let num = 0; num <= 20; num += 2) {
  console.log(num);
}
// 짝수
for (let num = 1; num <= 20; num += 2) {
  console.log(num);
}
// 홀수
for (let num = 100; num >= 0; num -= 10) {
  console.log(num);
}
//  num>=0 100에서 0까지 10씩 마이너스  or  num>0  0보다커야하니 100에서 10까지만 출력
for (let num = 10; num <= 1000; num *= 10) {
  console.log(num);
}
// 가운데값이 거짓일때 멈춘다 그렇지않으면 루프는 끝나지않는다 무한루프조심하기..
//   for (let i=20; i>=0; I++) {
//     console.log(i);   이 식은 절대 거짓일수없다 20+1이계속되기때문    망... 
//   } 루프쓸때 항상 이 식이 거짓이 될수있는가를 생각하기


//배열루프
const 동물 = [
  '다람쥐',
  '사자',
  '얼룩말',
  '고양이',
  '강아쥐',
  '앵무새',
  '원숭이',
  '수달',
  '코끼리',
  '하이에나',
  '표범']
for (let i = 0; i < 동물.length; i++) {
  console.log(i, 동물[i])
}
// i<동물.length;  인덱스가 length보다 1작으니까 i<동물 해야 숫자가맞는다
// or  i<= 동물.length-1;  이렇게써도된다
// (i,동물[i]) ->  i는 앞에 0 1 2 3숫자를 적어주고 동물이름을 적어준다
// 0'다람쥐'   []는 인덱스로 동물[10] 치면 10'표범' 이나온다
//만약 1'다람쥐'  1부터 시작하고싶다면 console.log(i+1,동물[i])  이렇게 i에 1만 더해주면된다

for (let i = 동물.length - 1; i >= 0; i -= 1) {
  console.log(i + 1, 동물[i])
}
// 거꾸로 10부터 0까지
// 앞숫자에 0을빼고 11~1까지로 정하고싶을때 console.log(i+1) 

//colt test iterating arrays 
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
// 대문자로바꾸는자리 (people[].toUpperCase())


//중첩for루프   대체로 중첩된 배열을 반복해야할때 사용된다
for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`)
  for (let j = 1; j < 4; j++) {
    console.log(`      j is ${j}`)
  }
}
// i는 1~10 1씩더함 `${i}`리터럴 그다음for 중첩루프 
// j는 1~3 1씩더함 `  ${j}`리터럴.   i1에 j123 중첩, i2에 j123 중첩, i3에 j123중첩..
1
1
2
3
2
1
2
3
//   이런식으로 중첩루프 10까지진행 . i가 10번 j가 3씩10번이니 30번 합은 40번중첩

for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`)
}

for (let j = 1; j < 4; j++) {
  console.log(`      j is ${j}`)
}
// 루프가 나란히 있는것과 전혀다르다 나란히있으면 12345678910 123 세로정렬 끝

const seatingChart = [              //중첩배열
  ['kris', 'erik', 'nami'],
  ['geo', 'juan', 'anto', 'kev'],
  ['yumi', 'saku', 'jack', 'eri']
]
for (let i = 0; i < seatingChart.length; i++) {
  console.log(seatingChart[i])
}
// (3)['kris', 'erik', 'nami']
// (4)['geo', 'juan', 'anto', 'kev']
// (4)['yumi', 'saku', 'jack', 'eri']  배열 한개만 벗겨지고 하위배열세개가 출력된다 

//for (let i = 0; i < seatingChart.length; i++) {
//     const row= seatingChart[i]        
// }
// row 변수에 seatingChart[i]를 저장하고 루프해서 하위배열도 벗기고 출력
// kris
// erik
// nami

//위두식을 합쳐서 중첩for루프를 쓰면
for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];         //바깥배열 하나 벗기고 변수저장 
  console.log(`Row #${i + 1}`)         // Row #1  출력    
  for (let j = 0; j < row.length; j++) {
    console.log(row[j])
  }
}
//Row #1
// kris
// erik
// nami
//Row #2    .. Row #3 학생들까지 쭉 배열이 반복된다 



// while 루프    (i<10) 이 참이면 {}중괄호를 무한대로 실행한다  
let i = 0;
while (i < 10) {
  console.log(i);
  i++
}
//console.log가 먼저오면 0부터 출력해서 0~9까지 출력

// i++
// console.log(i);    
//i++가먼저오면 1을 더하고 시작하기 때문에 1부터 10까지출력.


for (let k = 1; k < 10; k += 1);
// 위에 while루프랑 이 for루프랑 같은 답이다
//보통 while은 잘안쓰고 for를 많이쓴다

// const secret = 'Hippo';
// let guess = prompt('enter the secret code')
// while (guess !== secret) {              사용자입력값과 변수가 다르면
//     guess = prompt('enter the secret code')      다시입력하세요 출력  
// }                                          변수를 맞출때까지 반복문 출력
// console.log('congrats!!!')         반복문이 끝나면 콘솔로그실행          



// break키워드   while에서 주로많이씀 다른루프에서도 쓰이지만 자주쓰진않는다
//break조건에 맞으면 멈춘다

let input = prompt('hey, say something!')
while (true) {                  //무한반복 
  input = prompt(input);      //@ 아래설명
  if (input.toLowerCase() === 'stop copying me')
    break;
} console.log('ok you win!')
//@ prompt에 사용자입력값이 뜨게 인수input을 넣고 이걸 다시 변수 input으로 저장한다
//변수input이 실행된다 prompt사용자입력값을 출력하며 true를 받고 무한으로 실행된다 
//if조건에 맞으면 break가 실행되고 콘솔로그 실행.

//input.toLowerCase()믿고 prompt창에'sTop copying me' 입력하면 소문자로 바꿔서 break 
//실행할줄 알았는데 아님 why? 그럼 .toLowerCase를 왜씀? 
//무튼 stop copying me 소문자로 입력하면 break 됨

//또 하나 stop copying me를 처음에 치면 한번 따라하고 브레이크된다

if (input.toLowerCase() === 'stop copying me') {
  break;
}
// {break;} 를 중괄호로 따로쓸수도 있고 위처럼 중괄호 없이 쓸수도 있다 



// for of / ie인터넷익스플로러에선 기능안함 
const subreddits = ['books', 'funny', 'pics', 'soccer', 'cringe']

for (let i = 0; i < subreddits.length; i++) {
  console.log(`visit reddit.com/r/${subreddits[i]}`)
}
// ↑ for루프    /  ↓for of루프 쓰기 더 간편하지만 인덱스구하기가 어려워서 for루프가 필요할때도있다 
for (let sub of subreddits) {
  console.log(`visit reddit.com/r/${sub}`)
}

const seatingChart = [
  ['kris', 'erik', 'nami'],
  ['geo', 'juan', 'anto', 'kev'],
  ['yumi', 'saku', 'jack', 'eri']
]
for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j])
  }
}
// ↑ for루프중첩    /  ↓for of루프중첩   결과는같다
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}

for (let char of '안녕하세요 언년아~') {
  console.log(char)
}//콘솔에 안녕하세요 언년아~ 세로정렬 출력   배열이 아닌 다른것에서 반복을 적용한 예시

// colt test 34 for of  - 넘버와 for of 를 사용하여 1~9 숫자의 제곱수를 구하라
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i of numbers) {
  console.log(i * i);
}
// for (let j of numbers){
// console.log(j**2);}   유데미프로그램이 ** 제곱이 먹히질않아서
// (i*i)로 바꾸었더니 정답!~!


//객체루프 반복할땐 for in   
//키-값 쌍의 객체 리터럴은 반복가능한 객체로 인식되지 않는다 
//for of루프를 쓰면 반복가능하지않다고 에러난다 그러나
// for in루프를 쓰면 가능하다. js에서 오래전부터쓰였던 루프이다
// 요즘엔 for of를 많이쓰고 for in 은 잘 안쓴다고한다
const testScores = {
  keen: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvi: 97,
  diedre: 81,
  vonni: 60
}
for (let person in testScores) {
  console.log(person);
}
// ↑ person은 키.   ↓ testScores[person] 키를 이용해 값을(점수) 출력
for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}


// Object.keys 메서드 / 대문자 O를 쓴다 객체 반복시키는방법중하나. 
Object.keys(testScores)
  - ['keen', 'damon', 'kim', 'shawn', 'marlon', 'dwayne', 'nadia', 'elvi', 'diedre', 'vonni']
//testScores같은 객체를 전달하면 키배열이나온다.
Object.values(testScores)
  - [80, 67, 89, 91, 72, 77, 83, 97, 81, 60]
//.values를 붙이면 값이 나온다 
Object.entries(testScores)
  -
  // (2)['keen', 80]
  //     (2)['damon', 67]
  //     (2)['kim', 89]
  //     (2)['shawn', 91]
  //     (2)['marlon', 72]
  //     (2)['dwayne', 77]
  //     (2)['nadia', 83]
  //     (2)['elvi', 97]
  //     (2)['diedre', 81]
  //     (2)['vonni', 60]
  //.entries 는 키-값 쌍으로 된 중첩배열을 띄운다
  //이 Object메서드는 배열로 답을받아서 for of로 반복을 만들면 된다

  //for of로 Object.entries를 반복했는데 안된다   
  // for (let testS of Object.entries(testScores)) {
  //     for (let tes of tests){
  //     console.log(tes)
  //     }
  // }     오류뜸

  //Object.entries를 반복하는 방법들
  // for (const [key, value] of Object.entries(testScores)) {
  //     console.log(`${key} ${value}`); 
  //   }

  //   Object.entries(testScores).forEach(([key, value]) => {
  //     console.log(`${key} ${value}`);})


  //testScores의 평균값내기
  let total = 0;
let scores = Object.values(testScores)     //Object.values  값을 배열로 만든다
for (let score of scores) {                //배열을 for of로 반복시킨다
  total += score;                        //total과 반복시킨 score를 더한다 
}
console.log(total / scores.length)
//total += scores;점수합계/ 평균값을 구하려면 객체안에 몇개의 아이템이있는지 알아야한다
// 객체에는 .length가 없다 그래서 배열의 길이를 이용한다 scores.length
//  total/scores.length = 평균값


// let total=0;
// for (let score of  Object.values(testScores)  ) {
//     total += score;
// }                                                      이렇게해도 되지만 위 방법이 더깔끔
// console.log(total / Object.values(testScores).length)