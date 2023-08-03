//reduce 배열을 가져다가 점차 줄여가면서 마지막에는 하나의값만 남긴다 
//reduce는 두개의 인수를 갖는다. 첫번째 인수는 총합계이다. 두번째 인수는 개별 요소.
//두개를 더해서 return으로 반환받은값은 다음번 첫번째인수 자리 즉, 총합계자리로 간다.
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
//accumulator는 3에서시작, currentValue는5. 두개더하면 8 
//8은 다시 accumulator 자리로 가서 8과 currentValue 7을 더하면 15
//15는 accumulator currentValue는 9 더해서 24
//24가 accumulator currentValue는 11 더해서 35
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)    total값은 for of루프로 알수있지만 reduce를 써보자.

// const total= prices.reduce((total,price)=>{return total+price})
//토탈값을 구할거니까 첫번째 인수자리엔 total, 두번째자리엔 가격이올거니까 price
// 콘솔답은 for of루프와 같은 답 나옴.  ↓암시적반환shortver.
const total = prices.reduce((total, price) => total + price)
//이번엔 합계를 냈는데 곱셈 나눗셈 모든 연산이 된다.또 배열내에서 최대값이나 최소값
//을 찾을수도 있다. 위 가격표에서 최소값을 찾아보자

const min = prices.reduce((min, price) => {
    if (price < min) {
        return price
    } else { return min }
})
//첫번째 인수이름은 최소값을 지니게 되므로 min,두번째 인수는 요소에서 가져올거니까 price
//price가 min보다 작으면 price를 반환. 반환된 값이 다시 min자리로.. 반복하다보면 최소값.

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
const bestmovie = movie4.reduce((best, curr) => {
    if (best.score < curr.score) {
        return curr
    } else { return best }
})
//bestmovie
//{title: 'Amadeus', score: 99, year: 1984}  콘솔답 

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100)
//reduce괄호안에 두번째 인수를 줄수있다. 함수식은 첫번째 인수,두번째 인수는 reduce
//함수의 초기값이 된다.
//위식의 답이 120이 나옴 sum+num과 100을 더하라는 말이 없는데 왜 120을 내놨느냐.
//왜 답이 20,100 으로 나오지않고 120으로 나왔는지 궁금했다. return은 값을 한개밖에
//못내놓는다. 20,100은 줄수없다. 두개를 더해서 줄수밖에없다. 그래서 답은 120이고.
evens.reduce((sum, num) => 'a')
'a'
//만약 문자를 넣으면 문자를 반환하고 
evens.reduce((sum, num) => sum + num, 'a')
'a2468'
//문자 숫자를 섞어도 최대한 더해서준다._. 문자가 원래먼저오는건지 a가 뒤인데도 a가앞이다.


//화살표함수에서 this 는 이상하게 작동한다?..!
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
//이경우 this키워드가 왼쪽에있는 객체를 가리킨다. 'voggo mortensen' 바라던답을줌.
const person1 = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this)
            console.log(this.fullName())
        }, 3000)
    }
}
//fullName  같은식에서 fucntion지우고 =>화살표만 썼을뿐인데 undefined가 뜸.
//화살표함수로 바꾸니 this가 왼쪽객체가 아닌 window객체를 가리킴.
//(this.fullName()) fullName은함수니까 ().
//setTimeout을 실행했는데 얘는 화살표함수를 안했더니 오류남. this가 window객체라고나옴.
//화살표함수를 쓰니 작동.. 둘이 왜그랭 ㅜㅜ
//정리하면 this키워드가 화살표함수에서 다르게 작동하고 가끔은 원하는대로 작동할때도 있다
//보통은 this키워드와 화살표함수를 같이쓰면 이상하다는것만 기억.!!


//디폴트 매개변수
//매개변수가 있으면 그 값을 사용하고 없으면 디폴트 매개변수를 받는다
function rollDie(numsides) {
    if (numsides === undefined) {
        numsides = 6
    }
    return Math.floor(Math.random() * numsides) + 1
}
//콘솔에 rollDie(10)을 넣으면 1부터 10까지 숫자를 랜덤으로 준다.
//매개변수를 지정하지않고 디폴트값으로 함수를 선언해보자
//if로 numsides가 undefined면 6이랑 같다고 적고 콘솔에 rollDie() 입력하면 6까지 숫자를
//랜덤으로 준다. rollDie(20)을 넣어도 20까지 값을 출력한다. 여기까지는 옛날방식이고
//매개변수가 여러개 있으면 좋은방법이 아니다. 새로운 방식을 써보면.

function multiply(a, b = 1) {
    return a * b;
}
//여기서 a는 매개변수,b는 디폴트를 1로정했다.
function rollDie1(numsides = 6) {
    return Math.floor(Math.random() * numsides) + 1
}
//롤다이 식을 새버전으로 다시써보면 numsides=6 으로 디폴트값 정하면 끝.
//이렇게 디폴트 매개변수를 여러개 쓸수있지만 순서를 조심해야한다.
function greet1(person, msg = 'Hey there', punc = '!') {
    console.log(`${msg},${person}${punc}`)
}
//콘솔에 greet1('barry') 입력하니 undefined 뜸
//매개변수가 앞에 나오고 디폴트값 매개변수가 뒤에있어야한다. 매개변수가 여럿일 경우에도 똑같다.
//문장부호도 넣을수있다.


//SPREAD 스프레드구문  : 배열과 같이 반복가능한 객체를 전개 구문을 사용해서 확장함
//함수로 호출할 경우엔 0개 이상의 인수로 배열 리터럴에서는 요소로 확장할수있다.
//그리고 객체리터럴의 경우 객체 표현식은 0개 이상 키-값 쌍으로 확장가능하다.
Math.max(1, 2, 3, 6, 710, 3453, 5)
3453
Math.min(3, 6, 1)
1
//콘솔에 .max와 .min을 이용해 최대값과 최소값을 찾았다.
const nums = [1, 2, 3, 6, 710, 3453, 5]
nums
[1, 2, 3, 6, 710, 3453, 5]
Math.max(nums)
NaN
//콘솔에서 const nums에 숫자를 저장하고 Math.max에 nums를 입력했더니 NaN이 뜬다.
//숫자배열이 통으로 들어가서 어떻게 출력해야할지 모르기때문. 인수를(숫자를) 하나하나 넣어야한다 
//이때 전개를(spread) 사용한다 ...점세개      그러면 배열이 인수 하나하나로 펼쳐진다.
Math.max(...nums)
3453
//배열이 펼쳐지고 인수는 하나하나로 들어가서 답을 출력.

console.log('a', 'b', 'ert', 'qwq')
a b ert qwq
//쉼표를 넣으면 인수사이에 공백을 만들어 출력.

// console.log(nums)
// [1, 2, 3, 6, 710, 3453, 5]
// console.log(...nums)
// 1 2 3 6 710 3453 5

// nums만 입력했을땐 배열을 주고 스프레드했을땐 배열을 없애고 요소를 준다.
//배열말고 전개구문을 쓸수 있는곳이 있다. 문자열 같은건 for of로 반복가능한데 전개를 써도된다.
console.log(...'hello')
h e l l o
//'hello'만 입력했을땐 hello 출력. 전개를 쓰면 띄어쓰기한 h e l l o 가나온다.
//문자열 한덩어리가 분리돼서 출력. 인수 하나하나로 분리. 숫자배열을 출력한것과 같다.

//행렬 리터럴 스프레드 구문 
const cats = ['blue', 'scout', 'rocket'];
const dogs = ['rusty', 'wyatt'];
const allPets = [1, 2, 3, ...cats, ...dogs, 'turtle']
//cat과dog을 allpet에 다모으려고한다.slice로 복사해서 쓸수도있고 지금은 전개를 써본다.
//전개를 사용해 cats와 dogs를 allpets에 복사. cats와 dogs는 변함없다.
//세번째 allPets배열을 새롭게 만들었다.
//...dogs,...cats로 순서를바꾸면 요소들도 순서를 바꿔서 배열.
//전개옆에 ,'거북이' 요소를 원하는대로 추가도 가능하다 (숫자도가능)

//객체스프레드 구문
const 냥이 = { legs: 4, family: '고양이과' };
const 강쥐 = { isFurry: true, family: '강아지과' }
// {...냥이,color:'black'}    콘솔에 {...냥이} 입력하면 냥이객체를 복사해온다.
// {legs: 4, family: '고양이과', color: 'black'}   객체에 추가도 가능하다.
const 냥이강쥐 = { ...냥이, ...강쥐 }
//이때 둘다 family특성을 갖고있어서 충돌한다 강쥐특성이 두번째로와서 냥이 특성을 덮는다.
//뒤에있는 특성이 출력된다. 
// {...강쥐,...냥이}       콘솔에 강쥐, 냥이로 순서를 바꾸면 뒤에있는 냥이특성이 출력됨.
// {isFurry: true, family: '고양이과', legs: 4}
// {...강쥐,...냥이,family:'원숭이과'}     '원숭이과'를 추가했더니 맨뒤에있는 원숭이과출력.
// {isFurry: true, family: '원숭이과', legs: 4}
//뒤에있는 특성이 출력된다. 

//2,4,6,8을 넣은 배열이 있고 배열을 펼쳐 객체를 만들거다
// {...[2,4,6,8]}
// {0: 2, 1: 4, 2: 6, 3: 8}  인덱스가 키로오고 숫자가 값이된다.
// {...'HIII'} 
// {0: 'H', 1: 'I', 2: 'I', 3: 'I'}
const dataFromForm = {
    email: 'blue@gmail.com',
    password: 'todfd123@',
    username: 'asdfg'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }
//정보를 가져와서 내가원하는 내용을 추가할수있다