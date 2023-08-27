//이벤트와 this키워드   이벤트가 어디서 일어나든 키워드 this는 같이있는요소를 참조한다

//일반식이고 아래로가면 this키워드식 있음
// const btn = document.querySelectorAll('button')
// for (let bbtn of btn) {      querySelectorAll이니 요소가많으니까 for of로 반복
//     bbtn.addEventListener('click', function () {    
//         bbtn.style.backgroundColor = rgbC();  버튼배경색깔을 랜덤색깔로
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
//         h1.style.backgroundColor = rgbC()      h1배경색깔을 랜덤색깔로
//         h1.style.color=rgbC()              텍스트도 랜덤색깔로
//     })

// }
//여기에서 this를 이용해 아래 간단하게 함수를 나눌것이다.

const btn1 = document.querySelectorAll('button')
for (let bbtn of btn1) {
    bbtn.addEventListener('click', colorize)
} //이벤트가 어디서 일어나든 키워드 this는 같이있는요소를 참조한다
// bbtn.addEventListener('click', fuction(){    
// this.style.backgroundColor=rgbC1();  })   this라고 썼지만 버튼을 참조해서 버튼배경색이 바뀐다
const rgbC1 = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const h1s1 = document.querySelectorAll('h1')
for (let h1 of h1s1) {
    h1.addEventListener('click', colorize)
} // this 는 언제나 요소를 참조함  h1을 클릭할때마다 colorize함수 작동            

function colorize() {
    this.style.backgroundColor = rgbC1();   //배경색깔을 랜덤색깔로
    this.style.color = rgbC1()             //텍스트도 랜덤색깔로
} 
