// const MissionUtils = require('@woowacourse/mission-utils');
import * as MissionUtils from "@woowacourse/mission-utils";

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const ul = document.querySelector('ul')

const newNum = input.value / 1000
let random = [];

while (random.length < 7) {
  const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)

  if (!random.includes(randomNum)) {
    random.push(randomNum)
  }
}
let randomSort = random.sort((a, b) => a - b)
console.log(randomSort)


// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   for (let i = 0; i < 100000; i += 1000) {
//     if (input.value === i) {
//       const li = document.createElement('li');
//       li.innerText = `당첨번호는 ${lottonum()}} 입니다.~`;
//       ul.append(li);
//     }
//   }
//  const price = input.value
// })

