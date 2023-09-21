// const app = new App();
// app.play();


let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2')
let form = document.querySelector('form');
let input = document.querySelector('input');
let ul = document.querySelector('ul')
let section = document.querySelector('section')
btn2.style.display = 'none';

let num = [];

while (num.length < 3) {
  const computerPick = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!num == num.includes(computerPick)) { num.push(computerPick) }
}
let comPick = num.join('');
console.log(comPick)



const app = form.addEventListener('submit', function (e) {
  e.preventDefault();

  let guess = input.value;
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
    if (comPick[i] !== guess[j]) {
      continue;
    }

    if (i === j) {
      strikes++;
    } else {
      balls++;
    }
  }
  if (isNaN(guess)) {
    alert(`숫자를 입력해주세요~!`)
  }
  else if (guess.length > 2) {
    alert(`3자리 숫자 부탁드립니다.!`)
  }

  else if (balls && strikes) {
    const li = document.createElement('li');
    li.innerText = `${balls}볼, ${strikes}스트라이크 입니다~.`
    ul.append(li)
  }
  else if (balls) {
    const li = document.createElement('li');
    li.innerText = `${balls}볼 입니다~.`
    ul.append(li)

  }
  else if (strikes) {
    const li = document.createElement('li');
    li.innerText = `${strikes} 스트라이크 입니다!!`
    ul.append(li)
    if (strikes === 3) {
      li.innerText = `${3}스트라잌!! 게임종료!! 한판더하시겠습니까?`
      input = this.ariaDisabled
      btn2.style.display = 'block';
      btn2.addEventListener('click',
        () => location.reload()
      )
    }
  } else {
    const li = document.createElement('li');
    li.innerText = `낫싱`
    ul.append(li)

  }
  //input.value = '';



})









// value[0] == !pc[0] && value[1] == !pc[1] && value[2] == !pc[2] &&
//     [0] in pc || [1] in pc || [2] in pc









// 자바스크립트 컨벤션 부분
// else if는 if로! else를 지양하자(얼리 리턴)
// for문 대신 forEach() 사용하기(가독성 부분)
// 마지막 코드 끝에 한 줄 띄워야 함(프리티어 등을 쓰자)
// ++, — 는 컨벤션에서 지양함. += 1 등으로 쓰는게 좋음
// 객체 안에 마지막도, 를 쓰는 것이 좋다





//includes메서드  대소문자구분  배열이특정요소를 포함하고있는지 판별
// [1, 2, 3].includes(2); // true
// [1, 2, 3].includes(4); // false
// [1, 2, 3].includes(3, 3); // false
// [1, 2, 3].includes(3, -1); // true
// [1, 2, NaN].includes(NaN); // true
// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));   //true
// console.log(pets.includes('at'));    //false



// join메서드  배열의 모든 요소를 연결해 하나의 문자열로 만듦 배열빼고 ''문자열로만출력
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());      //"Fire,Air,Water"
// console.log(elements.join(''));    //"FireAirWater"
// console.log(elements.join('-'));   //"Fire-Air-Water"



// while (num.length < 3) {     라이브러리없이 3자리숫자를 겹치는숫자없이만듦
//     let random = Math.floor(Math.random() * 9) + 1;
//     if (!num == num.includes(random)
//     ) { num.push(random) }
// }
// let computerPick = num.join('');
// console.log(computerPick)

// const span = function () {
//     document.createElement('span');
//     section.append('span')
// }



// location.reload()  페이지를 새로고침