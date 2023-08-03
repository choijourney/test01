// parseInt
// parseInt('fdf')
// NaN
// parseInt(09d);
// error
// parseInt('099e')
// 99
// parseInt('555');
// 555;
// 문자열과 있어도 정수가 포함된 입력값이면 숫자만 골라서 처리해줌 ''꼭쓰기
//parseInt를 넣어서 파싱을 하는데 같은줄에 하면됨 /파싱이란 구문분석
// 예를든것처럼 문장을 이루고있는 구성을 분해하고 분석해서 원하는 형태로 빼냄. 

//예에서 parseInt를 쓰는이유는 유저가 숫자가아닌 문자도 같이 쓸경우를 대비해 쓴다
let maximum = parseInt(prompt('원하는 최대 숫자를 골라주세요'));
while (!maximum) {
    maximum = parseInt(prompt('숫자를 쳐주시기 바랍니다'));
}
// 사용자입력값을 문자를치거나 안쳤을때 prompt다시뜨게만드는데 제대로 숫자를 칠때까지
//팝업이 되야하니까  while루프 써줌
const targetNum = Math.floor(Math.random() * maximum) + 1;
//Math.random()*10 이렇게만쓰면 소숫점이니까 앞에 Math.floor로 전체를 내림해주고
//맨뒤에 1을 더한다 그럼 정수 탄생.! 이건 1~10사이의 수인데
//*10자리를 변수이름인 maximum으로 바꾸면 최대숫자가 1이된다
// 암튼 이줄이 정답이고
console.log(targetNum);
let guess = prompt('첫번째 숫자를 찍습니다! 관두고싶으시면 → q');
let attempts = 1;
// ↑여기서 guess변수값이 저장되고. 
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') { break; }
    guess = parseInt(guess);
    // ↑guess를 정수로 바꿔주는 작업을 해야하니까 다시적어준다
    if (guess > targetNum) {
        guess = (prompt('너무높습니다 다시 도전해보세요!'));
        attempts++;
    } else if (guess < targetNum) {
        guess = (prompt('너무낮습니다 다시 도전해볼까요?'));
        attempts++;
    } else {
        guess = (prompt('재입력해주십시오'))
    }
}
if (guess === 'q') {
    console.log('네 관두셔도 됩니다')
} else {
    console.log('컹그레츄')
    console.log(`딩동댕 !~!!~!' ${attempts}번만에 맞추셨네요._.`)
}
// 여기서생기는 문제는 guess값이 문자열일텐데(왜냐면 prompt함수는 숫자를 입력했을때도 
// 항상문자열로변환.) 추측값과 비교하는 targetNum은 숫자. 두값은 절대 일치할수없고 
// 서로 비교할때도 문제가 생김. 그래서 parseInt를 씀 
// guess가 q인지 확인한다음 문자열을 정수로 변환하는작업은 while문에서 수행한다
// 몇번만에 맞췄는지 알려주기 위해 변수에 let attempts를 추가한다 1번은 꼭 타이핑을 할
//테니 let attemps=1 / 숫자를입력했을때만 도전한횟수가 늘어나게 while구문의 if와 else if
//안에 1씩증감으로 attempts++; / 리터럴에 ${attempts}
//if(guess==='q') break; 여기서 문제는 'q'가 parseInt되면 문자열이 아닌 NaN 로 보기
//때문에 'q'를문자열로 보게하기위해, 추측값을 정답과 비교할때 그 시점에
//parsInt 되게 한다
// NaN 는 targetNum보다 크지도 작지도 않으니까 즉, 비교불가니 if ,else if 를 건너뛰고
// else 구문을 실행한다


// for of / ie인터넷익스플로러에선 기능안함 
const subreddits = ['books', 'funny', 'pics', 'soccer', 'cringe']

for (let i = 0; i < subreddits.length; i++) {
    console.log(`visit reddit.com/r/${subreddits[i]}`)
}
// ↑ for루프    /  ↓for of루프 쓰기 더 간편하지만 for루프가 필요할때도있다
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


//객체루프  for in   (for of 안됨)
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
//testScores같은 객체를 전달하면 키배열이나온다. 값도 가능해서
Object.values(testScores)
    - [80, 67, 89, 91, 72, 77, 83, 97, 81, 60]
//.values를 붙이면 해당객체에서 가져온 값이 나온다 
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
    //이 Object메서드는 배열로 답을주기때문에 배열로 받아서 for of로 반복을 만들면 된다
  

//testScores의 평균값내기
let total = 0;
let scores = Object.values(testScores)     //Object.values 객체를 배열로 만든다
for (let score of scores) {                //배열을 for of로 반복시킨다
    total += score;                        //total과 반복시킨 score를 더한다 
}
console.log(total / scores.length)
//total += scores;점수합계/ 평균값을 구하려면 객체안에 몇개의 아이템이있는지 알아야한다
// 객체에는 .length가 없다 그래서 Object.values(testScores) 모든값이 들어가있는
//배열을 가져다가 이배열의 길이를 이용한다 scores라는변수를 붙여주고 scores에서
// 배열이었는데 루프를 써서 숫자로 바뀐 score로 합계를 낸 총합 total을 가져다가
//scores라는 배열의 총길이로 나눈다. total/scores.length = 평균값 

