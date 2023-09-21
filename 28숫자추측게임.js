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



