// const btn = document.querySelectorAll('button')
// for (let bbtn of btn) {      querySelectorAll이니 요소가많으니까 for of로 반복
//     bbtn.addEventListener('click', function () {    
//         bbtn.style.backgroundColor = rgbC();
//         bbtn.style.color = rgbC()      텍스트도 랜덤색깔로
//     }
//     )
// }
// const rgbC = function () {          랜덤색상만들기
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r},${g},${b})`;
// }

// const h1s = document.querySelectorAll('h1')
// for (let h1 of h1s) {
//     h1.addEventListener('click', function(){ 
//         h1.style.backgroundColor = rgbC()
//         h1.style.color=rgbC()
//     })

// }
//여기에서 this를 이용해 아래 간단하게 함수를 나눌것이다.


const btn1 = document.querySelectorAll('button')
for (let bbtn of btn1) {
    bbtn.addEventListener('click', colorize)
}
const rgbC1 = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const h1s1 = document.querySelectorAll('h1')
for (let h1 of h1s1) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = rgbC1();
    this.style.color = rgbC1()
}
// 제네릭함수 this