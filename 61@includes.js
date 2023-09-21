//describe로 테스트하기

//validation.js
module.exports = {
  isEmail: (value) => {
    const email = value || "";
    const [localPart, domain, ...etc] = email.split("@");

    if (!localPart || !domain || etc.length) {
      return false;
    } else if (email.includes(" ")) {
      return false;
    } else if (email[0] === "-") {
      return false;
    } else if (!/^[a-z0-9+_-]+$/gi.test(localPart)) {
      return false;
    } else if (!/^[a-z0-9.-]+$/gi.test(domain)) {
      return false;
    }
    return true;
  },
};


//validation.spec.js
const { isEmail } = require('./validation');

test('입력한이메일주소에는 @가 하나만 있어야 이메일 형식이다.', () => {
  expect(isEmail("my-email@domain.com")).toEqual(true);
  expect(isEmail("my-email@@@@@@@domain.com")).toEqual(false);
  expect(isEmail("my-emaildomain.com")).toEqual(false);
});
test('입력한 이메일 주소에 공백이 존재하면 이메일 형식이 아니다', () => {
  expect(isEmail("my-email@domain.com")).toEqual(true);
  expect(isEmail("my email@domain.com")).toEqual(false);

});
test('입력한이메일주소 맨 앞에 하이픈이 있으면 이메일형식이 아니다.', () => {
  expect(isEmail("my-email@domain.com")).toEqual(true);
  expect(isEmail("-my-email@@@@@@@domain.com")).toEqual(false);

});
test('입력한 이메일 주소중 로컬 파트 에는 영문 대소문자와 숫자, 특수문자는 덧셈기호 하이픈 언더바 3개외에 다른값이 존재하면 이메일 형식이 아니다.', () => {
  expect(isEmail("my-email99+-_@domain.com")).toEqual(true);
  expect(isEmail("my!!!mail@domain.com")).toEqual(false);
  expect(isEmail("이메일@domain.com")).toEqual(false);
});


//inclueds 메서드  배열에 요소를 포함하고 있는지 확인하는 메서드
const array1 = [1, 2, 3];           //대소문자 구분
console.log(array1.includes(2));    //  true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));    //  true
console.log(pets.includes('at'));    //  false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true


//do ~ while 문
// while문은 루트에 진입하기 전에 먼저 조건식부터 검사를 한다
// 하지만 do ~while문은 먼저 루프를 한 번 실행 한 후에 조건식을 검사한다
// while문은 조건식이 처음부터 false이면 반복문을 아예 실행하지 않는다. 
// 'use strict';
let i = 1, j = 1;
// while (i > 3) {
//   console.log(`i : ${i++}`);
// } // false라서 돌지 않는다.

do {
  console.log(`j : ${j++}`);
} while (j > 3);      //출력부터 먼저하고 while 조건식을 보기 때문에 1이 출력된다. 원래는 1>3이니까 false다



//for문의 값i를 배열에 넣기
let k = [];
for (let i = 0; i < 10; i += 1) {
  k = k + i;

} console.log([k])


//continue   조건문에 일치하는값만 건너뛰고 진행
let text = '';
for (let i = 0; i < 10; i += 1) {  // 0~9까지 출력인데 
  if (i === 3) {                 // 3에 컨티뉴를 써서 3은 출력안하고
    continue;                    // 012456789 출력
  }
  text = text + i;
}
console.log(text);

//while문에서 continue 
let e = 0;
let d = 0;
while (e < 5) {   //0 1 2 3 4 가 e에 들어감
  e++;     //+1이니까 1 2 3 4 5  됨
  if (e === 3) {   // 3은 제외시킴 1 2 4 5남음
    continue;
  }  //d+1 = 1, d+3 = 3, d+7= 7, d+12= 12 
  console.log(d += e)
}


let a = 0;
let b = 0;
while (a < 3) {
  a++;
  console.log(b += a)
} // 1 3 6 출력

for (let q = 0; q < 10; q += 1) {
  if (q % 2 === 0)  //짝수
    continue;   //컨티뉴니까 짝수를 제외시킴 1,3,5,7,9 출력
  console.log(q)
}



//for문 breatk  조건문에 일치하는 값 전까지만 실행
let empty = '';
for (let j = 0; j < 10; j += 1) {  //0~9까지 출력인데
  if (j === 3) {                 //3에 break를 써서 012출력
    break;
  } empty = empty + j
} console.log(empty)


//