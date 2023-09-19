let firstMent = document.querySelector('h1');
let btn = document.querySelector('#btn');
let form = document.querySelector('form');
let input = document.querySelector('input');
let section = document.querySelector('section')
firstMent.innerText = '숫자야구를 시작합니다 컴퓨터와의 대결!'
// const pc =  random[0] === random[1] || random[0] === random[2] || random[1] === random[2]
// let random = 
while (true) {
    let random = Math.floor(Math.random() * 900) + 100;
    if (random[0] !== random[1] && random[0] !== random[2] && random[1] !== random[2])
        break;
}


const computerPick = random.toString()
console.log(computerPick)

form.addEventListener('submit', function (e) {
    e.preventDefault();
    firstMent.innerText = `숫자를 골랐습니다 맞춰보세요.~`
    let guess = input.value;

    let strikes = 0;
    let balls = 0;



    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
        if (computerPick[i] !== guess[j]) {
            continue;
        }

        if (i === j) {
            strikes++;
        } else {
            balls++;
        }
    }
    if (balls && strikes) {
        console.log(`${balls}볼, ${strikes}스트라이크 입니다~.`)
    }
    else if (balls) {
        console.log(`${balls}볼 입니다~.`)
    }
    else if (strikes) {
        console.log(`${strikes} 스트라이크 입니다!!`)
    } else { console.log(`낫싱`) }
    input.value = '';


    // firstMent.innerHTML = '숫자를 골랐습니다 맞춰보세요.~'
})


// value[0] == !pc[0] && value[1] == !pc[1] && value[2] == !pc[2] &&
//     [0] in pc || [1] in pc || [2] in pc


// for (let i = 0; i < 3; i++){
//     i[0]==!pc[0] &&
// }

// let strikes = 0;
// let balls = 0;

// for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
//     if (computerPick[i] !== guess[j]) {
//         continue;
//     }

//     if (i === j) {
//         strikes++;
//     } else {
//         balls++;
//     }
// }

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


// join메서드  배열의 모든 요소를 연결해 하나의 문자열로 만듦
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());      //"Fire,Air,Water"
// console.log(elements.join(''));    //"FireAirWater"
// console.log(elements.join('-'));   //"Fire-Air-Water"



