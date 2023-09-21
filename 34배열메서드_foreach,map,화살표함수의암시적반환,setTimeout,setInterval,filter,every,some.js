//배열메서드 
//forEach 함수를 인수로 받아들인다. 배열메서드이다.  forEach는 for of루프가 등장
//하기전엔 자주쓰였다 forEach는 배열안의 아이템 각각에 대해 함수와 코드를 한번씩 실행한다
//어떤 함수를 넣든 상관없이 각각의 아이템이 함수에 자동으로 전달됨
//콜백함수-다른 코드의 인수로서 넘겨주는 실행 가능한 코드
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function print(elment) {
  console.log(elment)
}
numbers.forEach(print)
//숫자를 1~15까지 각각 출력하고싶다면 numbers.forEach를 쓴다. 그다음 콜백을 넣는다.
//콜백은 괄호안에 인수로 함수를 넣는다는 말과 같다.
//그래서 function print 함수를 만들고 forEach(print) 인수자리에 써주면  1~15 숫자들을 출력해준다
//아니면 numbers와indexof를 이용해 숫자하나씩 출력하는방법도있다.
print(numbers[0])  //1  


//forEach를 써서 이미 정의한 함수를 전달하는건 일반적이지 않다. 보통 인수안에 함수를 넣어서 쓴다.
numbers.forEach(function (el) {  //forEach를 쓰면 숫자들이 인수에 자동전달
  console.log(el)      //전달된 숫자 출력
})
// 이게 일반적인 방식이다. forEach의 인수안에 함수는 1회성이다. 한가지 목적만을 위해 존재한다.


numbers.forEach(function (el, index1, array1) {  // (요소,인덱스,배열) 순으로 출력
  console.log(el, index1, array1)
})

// for of가 더 짧고 깔끔해서 for of를 더많이쓴다
for (let el of numbers) {
  console.log(el);
}

numbers.forEach(function (el) {
  if (el % 2 === 0)
    console.log(el)
})
//콘솔보면 2,4,6,8,10.. 짝수나옴

const movies = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand By Me',
    score: 85
  }, {
    title: 'parasite',
    score: 95
  }

]

movies.forEach(function (movie) {
  console.log(`${movie.title}- ${movie.score}/100`)
})
// Amadeus- 99/100
// Stand By Me- 85/100
// parasite- 95/100      이렇게 나온다.
//console.log(movie) 만 입력했을땐 객체 전체가나왔다.


// map - 콜백배열메서드중 하나. 콜백함수의 반환값을 이용하여 새배열을 만든다. 객체엔 사용이안된다. 
//콜백함수를 써서 배열안의 요소당 1번씩 실행한다는 점에서 forEach와 비슷한데
//다른점은 그 반환값을 이용해서 새로운 배열을 만든다. 
//보통 데이터의 일부만 가져오거나 요소를 두배로 늘린다거나 그럴때 필요. 원래배열을 기반으로
//새로운배열을 생성한다면 map을쓰는게낫다.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   //기존배열은 바뀌지않고 그대로이다
const doubles = number.map(function (numb) {     //새배열을 만들어내고 다른변수에 저장한다
  return numb * 2;
})
//배열의 요소들이 numb매개변수에 한번씩 대입돼고
//새로운 배열을 만들어낸다 [2,4,6,8,10,12..] 그리고 그배열을 새변수에 저장한다


const moviee = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand By Me',
    score: 85
  }, {
    title: 'parasite',
    score: 95
  }

]
const title = moviee.map(function (movi) {
  return movi.title.toUpperCase()
}      //['Amadeus','Stand By Me','Parasite']
)

//화살표함수   인터넷익스플로러에선 실행안됨 재사용안할 함수에 쓰면 좋다.
//map이나 foreach는  인수자리에 함수를 쓸때 1회성으로 쓰는데 
//화살표함수로 간결하게 써주면 좋다
// const add=function(x,y){
//     return x+y;
// }    일반함수식에서 function을빼고 => 화살표만추가하면됨
const add = (x, y) => {
  return x + y;
}
const square = (num) => {
  return num * num
}
//결정할 인수나 매개변수가 없다해도 빈괄호는 필요하다
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1
}
//인수가 한개면 괄호가 없어도 괜찮다. 그러나 0개거나 2개부터는 괄호꼭필요.
const cube = num => {
  return num ** 3
}

//함수를 저장하려면
function (x, y) {   //이렇게는 저장할수 없다.
  return x + y;
}
function add(x, y) {  //함수이름을 붙이거나 const add=  변수에저장해야한다
  return x + y;
}
//this키워드와 화살표함수를 같이쓰면 이상하다는것만 기억.!!


//화살표함수의 반환 : 암시적반환을 할수있는데  오직 화살표함수에서만 가능. 특정상황에서 
//return(반환)키워드를 뺄수있다..! return과 중괄호 지우고 중괄호대신 괄호를 쓴다
const rollDi = () => (
  Math.floor(Math.random() * 6) + 1
)
//더 짧게 괄호를 지우고 한줄로 만들수도 있다.
const add1 = (x, y) => x + y
//긴코드면 괄호를쓰는게 낫고 짧은코드면 괄호를 지워서 한줄로만드는게 낫다
//암시적반환 즉 return을 지울때는 표현식이 딱 하나만 있어야함
//모든 함수에 다쓸수 있진 않다고함..

const movie1 = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand By Me',
    score: 85
  }, {
    title: 'parasite',
    score: 95
  }

]
const newmovie = movie1.map(function (movie2) {
  return `${movie2.title}- ${movie2.score / 10}`
}  // 9.5 이런식으로 만드려고 10으로 나눈다.
)

const newmovi = movie1.map(movie2 =>
  (`${movie2.title}- ${movie2.score / 10}`)
)

//화살표가 있을때=> return과 {}가 없는지 보면 암시적반환인지 알수있다.


//setTimeout과 setInterval 이 함수들은 실행을 연기하고 대기하고 중단하거나 추후 날짜
//로 실행을 연기하거나 기본적으로 작업일정을 정한다. 인수안에 함수와 연기시킬 시간인 밀리초숫자쓴다
//콜백함수를 씀 (인수안에함수넣기)
console.log('HELLO!!')
setTimeout(() => {
  console.log('...ard you still there?')
}, 3000)   //연기시킬시간 3000ms 3초
console.log('GOOD BYE!')
//콘솔에서 3초뒤 ..are you still there? 가 뜬다.대박
//함수를 쓰는이유는 함수를 안쓰고 cosole.log를 쓰면  3초연기가 되지않고  바로 콘솔로그내용이 출력된다


// setinterval은 콜백을 매 특정 밀리초마다 호출하는 함수다.즉, 간격(인터벌)을 두고
//작업을 반복한다.
const Id2 = setInterval(() => {
  console.log(Math.random())
}, 2000)
// 인수안에 함수와 밀리초숫자를 쓴다. 콘솔에 2초간격으로 랜덤숫자가 나온다
//이 함수는 자주 쓰이지는 않지만 그래도 어떤작업을 인터벌을 두고 실행해야하는 상황은 반드
//시 생긴다. setInterval에 Id를 줘서 서로 다른 인터벌로 실행되는  setInterval
//함수를 여러개 호출할수있다. 그리고 이 Id를 사용해서 중단하고싶은 함수를 지정할수있다.
//콘솔에 Id2를 치면 1이라고 나오는데 첫번째 setInterval이라는뜻. 중단하고싶으면
//clearInterval(Id2) 라고치면된다. 페이지를 닫으면 브라우저가 계속출력을 하진않겠지만
//창이 열려있다면 계속 출력을 할테니까 clearInterval이 필요하다.


//filter 메서드  요소로 구성된 배열에서 필터링을 하거나 부분집합을 모아 새배열을 만든다
//원본배열을 바꾸지않고 새배열을 만든다 인수에 콜백을 해서  참이나 거짓을 반환하게한다
// (불리언 함수.) 그리고 그 콜백이 true값을 반환하면 그 요소는 마지막
//에 만들어지는  새배열에 추가된다 false경우엔 무시됨
//filter는 평점이 가장 높은 아이템이나 새로운아이템등을 필터링하려고 할때 유용하다
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
number1.filter((n) => {
  return n < 10
})
//콘솔에 입력해보면 새로운배열 1부터9까지 만들어준다. 

const movie3 = [
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
const goodMovies = movie3.filter(mo => {  // 95초과인 영화들 타이틀,스코어,년도 객체배열 출력
  return mo.score > 95
})
// const goodMovies = movie3.filter(mo => mo.score > 95) 암시적반환으로짧게ver.
const recentMovies = movie3.filter(mo => mo.year > 2010)
const recentTitle = recentMovies.map(mo => mo.title)
//map을 써서 title만 빼왔다. filter는 >기호로 참이면 새배열을 만든다.
const gooMovi = movie3.filter(mo => mo.score > 90)
  .map(mo => mo.title)
//filter와 map을 한번에 쓸수있다. 한줄에 쓰면좋지만 코드가 길면 들여쓰기를 해도된다.


//colt test 49:filter exercise  답3개 
function validUserNames(usernames) {
  return usernames.filter(n => n.length < 10)

}
//const new 했더니 오류. neww로 바꿈. 
function validUserNames(usernames) {
  const neww = usernames.filter(function (n) {
    return n.length < 10
  });
  return neww
}
//숏버전
const validUserNames = usernames => usernames.filter(n => n.length < 10)



//every 와 some메서드   불리언메서드로 항상 참이나 거짓값을 반환.
const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]
exams.every(scor => scor >= 75)
//이중 하나가 콜백에서 거짓을 반환하면 every 전체가 false 반환. 모두 true면 true반환.
exams.some(scor => scor >= 92)
//이중 하나가 true면 모두 true. 최소 한번 이상 참이 반환되는지 여부를 확인.

//colt test:50 som/every exercise
function allEvens(arr) {
  return arr.every(ar => ar % 2 === 0)
}
//숏버전     
const allEvens = arr => arr.every(ar => ar % 2 === 0)   