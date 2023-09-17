//Axios로 헤더 세팅하기
//http://icanhazdadjoke.com 아재개그사이트는 header를 보내줘야 json으로 반환한다 
//사이트를 보면 headers에 application/json 을 써서 요청하라고 돼있다 (API사이트마다 다르니 자세히 읽어봐야함)
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }  //headers객체를 변수에 저장
    const res = await axios.get('http://icanhazdadjoke.com/', config) //axios 인수에 url과 헤더를써서
    console.log(res.data.joke)  //요청하면 아재개그가 적혀있는 data객체를 준다
    //axios를 썼기땜에 json을 파싱해서 js객체로 준다
}                       //객체에서 joke만 빼서 출력
getDadJoke();

//버튼누르면 아재개그가 리스트에 생김 (feat.아재개그API사이트)
const ul = document.querySelector('#jokes')
const btn = document.querySelector('button')

const addNewJoke = async () => {      //아래 getDadJoke2 함수를 가져다쓸건데 비동기함수라서 
    const jokeText = await getDadJoke2();   //이 함수도 비동기함수로 만듦
    const li = document.createElement('li')  //이함수를 작동시키면 li가 만들어지고
    li.append(jokeText)                     //li에 joke텍스트가 추가되고
    ul.append(li)                      //ul에 li가 추가됨  /리스트에 아재개그추가됨
}

const getDadJoke2 = async () => {        //이함수는 joke 텍스트를 만들어내기위해 작동
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('http://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return 'NO JOKES AVAILABLE!'
    }
}

btn.addEventListener('click', addNewJoke) //이벤트리스너는 함수를 먼저 작성한후 만들어야해서 맨밑에씀
//API는 속도제한이있다 요청할때 너무 반복적으로 호출하면 ip를 차단시킬수있다


// tv프로그램 검색 앱 만들기
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    try {
        e.preventDefault();
        const allimg = document.querySelectorAll('img'); //allimg변수를 밖으로 뺐더니 작동안됨 
        for (let allimgs of allimg) {              //같은함수안에서 forof와 같이썼더니 작동
            allimgs.src = '';     //제출누르면 일단 빈src이 됐다가  아래 함수들을 거치면서 이미지 추가
        }
        const inputvalue = form.elements.query.value  //폼의 인풋값
        const config = { params: { q: inputvalue } } //params(매개변수)특성을 만들어 q객체를 만들었다  
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
        //`https://api.tvmaze.com/search/shows?q=${inputvalue}` 
        makeImages(res.data)
        form.elements.query.value = ''; //입력,출력이끝나면 빈문자열로
    } catch (e) { console.log('error!', e) }
}

)
const makeImages = (showimg) => {
    for (let showimgs of showimg) {
        if (showimgs.show.image) {    //show는 객체 키 이름중하나
            const img = document.createElement('img')
            img.src = showimgs.show.image.medium
            document.body.append(img)
        }
    }//if로 이미지가 있으면 이미지를 만들고 없으면 무시하게 만듦

}

//console.dir(form) 을입력하면 객체가 나온다 객체에서 elements를 이용해서 인풋값을 알아낼수있다.
//elements를 클릭하면 query가 있고(input name)  이 name을 이용해서 value 값을 알아낸다.
//console.log(res) 까지 쓴후 입력창에 cat을 입력하면 cat과 관련된 tv쇼들의 특성이 콘솔에 나온다.
//image: {medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/440/1100160.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/440/1100160.jpg'}
//그중 필요한 이미지도 있다 미디움, 오리지널 크기가 있는데 미디움으로 출력되게 할거다.
//const img = document.createElement('img') img를 만들고
//img.src = res.data[0].show.image.medium   img소스를 만든다  인덱스로 data객체중 첫번째 tv쇼선택


// const config = { params: { q: inputvalue }
// const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
//이렇게 쓰는게 이해가 잘안되는데 외우기

//비동기함수는 try,catch를 써서 오류잡기

//배열은 js에서 객체이다


// prototype          js객체가 서로기능을 상속하는 방식
// const arr= [1,2,3].push(4)
// [1,2,3,4] 출력   펼쳐보면 push메서드가 바로보이진않고
// [[prototype]]을 펼쳐보면 있다. [[prototype]]은 참조일뿐이라 건드릴 일은 없을거다.

// 배열에 메서드를 내가 만들수 있다. 
// arr.sing= function () {console.log('la la la')}
// arr.sing() 입력  la la la 출력   
// 펼쳐보면 인덱스 밑에 sing: ƒ ()   sing만든메서드가 있고 prototype에 추가돼있다.
//mdn을 보니 성능을 고려하여 [[prototype]]을 권장하지않는다고 적혀있다..

Array.prototype
//콘솔에 이렇게 입력하면 내장메서드가 나온다.
Array.prototype.grey = () => document.body.style.backgroundColor = 'grey'
//[3,4].grey()  배경색 그레이로바뀜
// Array.prototype      다시 배열의 프로토타입을 보면 내장메서드와 함께 맨위에 내가 만든 메서드가 있다.
// [grey: ƒ, constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, …]
String.prototype   //String도 배열과 똑같이 프로토타입에 내장메서드가 있다
String.prototype.alarm = () => alert('go away')  //내장메서드에 내가 만든 알람메서드가 추가된다
// 'red'.alarm()   // 문자열을 적고 메서드를 쓰면 실행된다 
//만든 메서드는 모든 배열이나 문자열에 사용가능하다
String.prototype.yell = function () {
    console.log(this.toUpperCase())
}
// 'hi'.yell()   / HI 출력    this를 쓰면 .왼쪽을 참조해서 'hi'를 출력한다
// 프로토타입의 작동방식에대해 배운거지 그다지 좋은 방법은 아니라고 했다.

Array.prototype.pop = function () {
    console.log('SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF')
}
//pop을 실행해보면 원래있던 pop메서드는 작동안하고 새로만든 pop이 작동된다. 그닥 좋은방법은 아니다.



//색상전환하기
// 'hsl(180,50%,30%)' 맨앞숫자180이 색조데이터이다 만약 반대색으로 색전환을 하고싶으면 
// 180에 180을 더하면 된다. 뒤엔 채도와 명도이다. rgb는 세가지 색으로 돼있어서 반대색을 계산하기 복잡하다

//팩토리함수로 색상전환 

function makeColor(r, g, b) {
    const color = {};  //빈객체를 만듦
    color.r = r;       //객체에 값을 추가
    color.g = g;       //메서드는 함수임 이값은 메서드가 될수없음
    color.b = b;
    color.rgb = function () {    //rgb 메서드 만들기 
        const { r, g, b } = this;  // ${this.r},${this.g},${this.b} 이렇게쓰기 불편하니 this를 구조분해 
        return `rgb(${r},${g},${b})`;
    }  //this로부터 r,g,b를 추출함   // 'rgb(35,255,150)'
    color.hex = function () {  //rgb값을 넣으면 16진수 hex로 변환해줌
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }; return color;
}
//this는 color객체를 참조하는데 지금까지 추가한 이 전체 객체를 참조함
const firstColor = makeColor(35, 255, 150);
firstColor.rgb();     //'rgb(35,255,150)'
firstColor.hex();     //'#23ff96'
// firstColor.r=255  r의값을 변경할수도있다   firstColor.rgb() // 'rgb(255,255,150)'

//문제는없지만 이상적인 방법은 아니다


//생성자 함수와 new
function Color(r, g, b) {    //앞글자를 대문자로 쓰면 생성자함수, 객체를 만든다 
    this.r = r;          //객체를 만들고 값 추가
    this.g = g;
    this.b = b;
    //console.log(this)
} // new키워드를 쓰기전엔 this가 window객체를 참조한다
// new를 쓰면 this가 새로만들어진 객체를 참조한다

Color.prototype.rgb = function () {    //prototype에 rgb메서드를 만든다  
    const { r, g, b } = this;     // ${this.r},${this.g},${this.b} 이렇게쓰기 복잡하니 this를 구조분해 
    return `rgb(${r},${g},${b})`  //this로부터 r,g,b를 추출함 
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
// this키워드 쓸때 화살표함수 쓰면 오류남

Color.prototype.rgba = function (a = 1.0) {  //기본값을 불투명으로. 숫자가낮을수록투명
    const { r, g, b } = this;
    return `rgba(${r},${g},${b},${a})`  //rgb값에 인수a를 추가
}

const black = new Color(0, 0, 0)
black.rgb()    //'rgb(0,0,0)'   rgb메서드가 prototype에 추가됐다
const color2 = new Color(50, 50, 50)
color2.rgba(0.5)  //'rgba(50,50,50,0.5)'

// black.hex===color2.hex  // true   hex메서드가 prototype의 내장메서드에서 와서 같다는뜻
// black.rgb===color2.rgb  // true   prototype을 보면 hex메서드와 rgb메서드가 있다 