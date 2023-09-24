// const MissionUtils = require('@woowacourse/mission-utils');
//import * as MissionUtils from "@woowacourse/mission-utils";
import { someFunction } from 'mission-utils';

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const ul = document.querySelector('ul')
//  const newNum = input.value / 1000
while (!input.value) {
  alert('1000원단위로 숫자를 입력해주세요')
}


form.addEventListener('submit', function (e) {
  e.preventDefault();
  let newNum = input.value;


  let random = [];

  while (random.length < 7) {
    const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)

    if (!random.includes(randomNum)) {
      random.push(randomNum)
    }
  }
  let randomSort = random.sort((a, b) => a - b)
  console.log(randomSort)



  for (let i = 0; i < 50000; i += 1) {
    if (input.value === i) {
      const li = document.createElement('li');
      li.innerText = `당첨번호는 ${repeat(pl)} 입니다.~`;
      ul.append(li);
    }
  }

})



//MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)