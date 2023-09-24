//axios import@  <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

// const { promiseImpl } = require("ejs")

// import * as MissionUtils from "@woowacourse/mission-utils";

// const greet = (arg) => {
//     return `'Hey ${arg}!'`
// }
//이렇게쓰면 콘솔에 'Hey runa!' 라고뜬다 "Hey blar!" 큰따옴표나 따옴표없이 답을받으려면
//어떻게 해야할까?
// console.log(`${msg},${person}!"`)
// greet1('"Hello','Barry')
//이렇게 "Hello,Barry!" 나왔음
// let j = 1;
// do {
//    console.log(`j : ${j++}`);
//  } while (j > 3);
// let random = [];
// for (let i = 0; i < 5; i += 1) {
// const numbers=Random.pickUniqueNumbersInRange(1, 45, 6)  //사용이안돼서막힘
//   if (!random.includes(numbers)) {
//     random.push(numbers)
//   }
// }
// let randomSort = random.sort((a, b) => a - b)
// console.log(randomSort)

// const color = (color,delay) => {
//   return new Promise((resolve)=> {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color
//     resolve()
//   },delay)
//   })
// }
// async function change() {
//   await color('pink', 1000)
//   await color('purple', 1000)
//   await color('brown',1000)
// }

// const printt = (url) => {
//   return new Promise((resolve, reject) => { //P대문자
//     const delay = Math.floor(Math.random() * (4500)) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject('it rejected')
//         } else  {
//         resolve('it resolved')
//       }
//     },delay)
//   })

// }
//   printt('http://naver.com')
//     .then((msg)=>console.log(msg))
//   .catch((err)=>console.log(err))






// class Monster {
//   constructor(color, name, favoriteFruit) {
//     this.color = color;
//     this.name = name;
//     this.favoriteFruit = favoriteFruit;
//     this.sayHi = () => (`hi my name is ${this.name}, my favorite fruite is ${favoriteFruit}`)
//     this.whatEver = () => (`Life is whatever `)
//     this.myColor = () => (`I am ${color}`)
//   }
// }

// let mons = new Monster('red', 'mui', 'blue berry');
// let gal = new Monster('green', 'gal', 'Orange')

// console.log(mons.sayHi())
// console.log(gal.whatEver(),gal.myColor())

// const login = async (username,password) => {
//   if (!username || !password) throw'missing Credentials'
//     if (password === 'corgi')
//     return 'welcome'
//   throw 'failed password'
// }

// login('dog', 'corgi')
//   .then(msg => {
//     console.log('hi')
//     console.log(msg)
// })
//   .catch(err => {
//   console.log(err)
// })

// const color = async (color, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }
//       , delay)
//   }) }
// async function change ()
//  {
//   await color('red', 1000)
//   await color('yellow', 1000)
//   await color('purple', 1000)
// } change()

// const sing = async () =>
// {return 'La LALA'
// }
// sing().then(msg => {
//   console.log(msg)
// })
//   .catch(err => console.log('error!!!'))


// const arrr = [3, 4, 5, 6, 7, 8, 9, 30]
// const ar = arrr.filter((e) => { return e < 9 })  //함수안의 조건에 맞는 요소를 배열로 반환

// const foreachh = arrr.forEach((e)=> { return e })  // forEach는 원래 1회성인가보다. 변수저장 x
// const foreachh1 = arrr.forEach((e) => console.log(e)) 
// //forEach와 map은 비슷한기능이다 배열을 반복한다는건데 forEach는 변수저장이 안되고 1회성이다.
// //map은 변수저장해서 재사용이 가능하다
// const ma = arrr.map((e) => { return e })  //얘는 숫자배열반환.
// const ever = arrr.every((e) => e > 6 )  //false반환  배열모든숫자가 6보다커야 true
// const som= arrr.some((e)=> e>6 )  //true반환  배열에 6보다큰숫자가 하나라도있으면 true

// const movi = [
//   {
//     title: 'Amadeus',
//     score:99
//   },
//   {
//     title: 'Jumper',
//     score:100
//   }
//  ]
// const titles = movi.map((movi) => { return movi.title.toUpperCase() }) //title배열출력
// const fil= movi.filter((mo)=>{return mo.score>99}) //Jumper객체배열출력
// movi.forEach((e) => console.log(`${e.title} - ${e.score} 입니다 `)) 


let greet = () => {
  console.log(`안녕하십니깡`)
}
// let callTwo = (two)=>{
//   two()
//   two()
// }
// callTwo(greet)

// let rollDie = () => {
//   const ra= Math.floor(Math.random() * 6) + 1 
//   console.log(ra)  //랜덤숫자도 return쓰면 undefined 반환
//  }                //변수만들어서 콘솔로그 인수에 변수이름을 써야 작동한다 


// let goodSong = () => {
//   console.log(`불타오르네~ 파이어어~`)
//   console.log(`하 하하 `)
// }
  
// callTwo(goodSong)

// function callTen(fun) {
//   for (let i = 0; i < 10; i += 1){
//     fun()
//   }
// }
// callTen(rollDie)


// function sum(arr) {
//  let total = 0;
//   for (let i = 0; i<arr.length; i++){
//     total+=arr[i]
//   }console.log (total)
// }
// sum([4,4,4])

// function week(e) {
//   const sevenDays = {
//     1: 'monday',
//     2: 'tuesday',
//     3: 'wednesday',
//     4: 'thursday',
//     5: 'friday',
//     6: 'saturday',
//     7: 'sunday'
//   }
//   if (e > 7 || e < 1)
//     return null
//   else return sevenDays[e]
// } week(1)


//  function makeRand() {
//   const ran = Math.random();
//   if (ran > 0.5)
//     return function () {
//       console.log('is it working.?')
//     }
//   else {
//     return function () {
//      { console.log('aleart!!') }
//       }
//     }
//   }
// const ma= makeRand()
// ma()

// function minmax(min,max) {
//   return function (num) {
//     return num >= min && num <= max;
//   }
// }
// const isChild = minmax(1, 10)
// isChild(9)

// const isAdult = minmax(20, 60)
// isAdult(15)


const rabbit = [1, 2, 3, 4, 5, 6];
 const fil=rabbit.filter((e)=>e>3)  //[4,5,6]출력
 rabbit.forEach((e)=>console.log(e)) //1,2,3,4,5,6 출력
const mapp = rabbit.map((e) => { return e }) //[1, 2, 3, 4, 5, 6]출력
 const inclu = rabbit.includes(3)  //true 
 const sor = rabbit.sort((a, b) => b - a)  //[6,5,4,3,2,1]
//every와 some과 find는 비슷하다 
 const eve = rabbit.every((e) => e > 1) //false
 const som = rabbit.some((e) => e > 1)  //true  불리언출력
const fin = rabbit.find((e) => e > 4) //5  테스트함수와 일치하는 1개값출력
const findIndex = rabbit.findIndex((e) => e > 4)  //4  5의인덱스는4  일치하는 1개값출력
const findlast = rabbit.findLast((e) => e > 4) // 6 테스트함수와 일치하는 값을 역방향으로 찾는다
const findlastindex = rabbit.findLastIndex((e) => e > 4) //5   6의인덱스는5   일치하는값 1개값출력


//const redu = rabbit.reduce((accumulator, current) => accumulator + current, 100) //121 
// ↑ current,100 을 같이 accumulator에 더하는것같다. return이있는 암시적반환식.
//const redu1 = rabbit.reduce((accumulator, current) => { return accumulator + current, 100 })//100
//왜 100인지 모르겠는.


const movie4 = [
  {
    title: 'Amadeus',
    score: 99,
    year: 1984
  },
  {
    title: 'Stand By Me',
    score: 85,
    year: 2013
  }, {
    title: 'parasite',
    score: 95,
    year: 2019
  }

]

const bestM= movie4.reduce((movi,best) => {
  if (movi.score > best.score) { return movi }
  else { return best }
})




// let rollDie = () => {
//   const ra= Math.floor(Math.random() * 6) + 1
//   console.log(ra)
//  }
//  rollDie()    얘는작동하고

// let rollDie1 = () => {
//   const ra = Math.floor(Math.random() * 6) + 1
//   return ra
// }
// rollDie1()   얘는 작동 안하는이유는?


// async function color(color, delay) {       //await인데 안기다리는이유는..?
//   setTimeout(() => { document.body.style.backgroundColor = color }, delay)
// }

// color('red', 1000)
//   .then(color('blue', 1000))
//   .then(color('black', 1000))


// async function color(color, delay) {       //await인데 안기다리는이유는..?
//   setTimeout(() => { document.body.style.backgroundColor = color }, delay)
// }
// async function change() {
//   await color('red', 1000)
//   await color('blue', 1000)
//   await color('black', 1000)
// } change()


//mission-utils 사용법

//정규표현식 외계어..? 

// const evens = [2, 4, 6, 8];
// evens.reduce((sum, num) => sum + num, 100))

// const input = document.querySelector('#catName')
// const ulcat = document.querySelector('#cats')
// form.addEventListener('submit', function (e) {
//     e.preventDefault();      //폼제출하는 기본동작을 막음
//     const catInput = input.value;  //입력값을 추출  
//     const newLi = document.createElement('li');  //빈 li요소를 만들고
//     newLi.innerText = catInput;  
//     ulcat.append(newLi);   
//     input.value = '';  //입력창을 빈칸으로 만듦
//   
// });  //얘는 입력창 빈칸이 되고


// const tweetForm = document.querySelector('#tweetform');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault(); 
//     const username = tweetForm.elements.username.value;   
//     const tweet = tweetForm.elements.tweet.value;      
    
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`-${tweet}`)
//     tweetsContainer.append(newTweet);
//     username = '';
//     tweet = '';
// });  //얘는 입력창빈칸이 안됨 이유가 뭘까