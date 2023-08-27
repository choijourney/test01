//폼이벤트  폼을 전송할때 일어나는 동작과 이 동작을 막을수 있는 법에 대해 알아볼것이다

// form을 html에 만들면 action이라는 속성이 자동으로 생기고  
// 폼을 제출하면 폼에 담겨있는 데이터를 action에 작성한 위치로 전송한다  
// input창에 내용을 입력하고 submit버튼을 누르면 페이지가 /google로  바뀌고
//해당위치로 데이터가 전송된다  이게 폼요소의 기본 동작이다. 
const form = document.querySelector('#formcat');  //form을 변수에저장
form.addEventListener('submit', function (e) {  //submit은 폼이벤트
    console.log('submitted~~~');
    console.log('submitted~~~');
    console.log('submitted~~~');
}) //콘솔을 보면 submitted~~~세줄이 출력됐다가 금방 /google페이지로 바뀌면서 콘솔창에도 다른문구가뜬다

//이때 .preventDefault() 를 쓰면 페이지와 콘솔창이 바뀌지않고 console.log가 잘출력된다
//이 메서드는 특정 이벤트의 기본동작이 수행되지 않도록 막아준다.
//폼이벤트에만 적용되는건 아니지만 대부분 폼 제출이벤트에 사용된다
form.addEventListener('submit', function (e) {
    e.preventDefault();  // 기본동작 수행을 하지말고 
})
console.log('submitted!') // 폼이 제출되면 출력해달라고함
//이렇게 쓰니 페이지가 바뀌지않고 콘솔로그에 'submitted!' 가 출력된다
//submit은 폼이벤트고 폼의 기본동작인 데이터전송위치로 페이지변경을  preventDefault로 막았다.

const input = document.querySelector('#catName')
const ulcat = document.querySelector('#cats')
form.addEventListener('submit', function (e) {
    e.preventDefault();      //폼제출하는 기본동작을 막음
    const catInput = input.value;  //입력값을 추출  
    const newLi = document.createElement('li');  //빈 li요소를 만들고
    newLi.innerText = catInput;  //빈 li에 추출한 입력값을 추가 
    ulcat.append(newLi);   //ul에 li를 추가
    input.value = '';  //입력창을 빈칸으로 만듦
});

//.value  입력창에 든값을 알려준다 'ㄹㅇㄹㄹ'제출하지않고 입력창에 써놓기만 해도 value로 알수있다.
//input.value  // 입력창에 Rocket이라고 쓰면 'Rocket' 출력
//input.value=''  입력값을 바꿀수도있다. ''빈문자열로 코드를 바꾸면   입력창이 빈문자열로 바뀐다.

//싱글페이지 방식으로 앱을 구성해야 할 경우, 사용자가 폼에 데이터를 입력하고 제출했을때
//해당 데이터를  동일 페이지 내에서 처리해야한다


//colt test61 form Events 
//핵심은 텍스트입력창, 숫자입력창 입력창이 2개일때 li에 두개값을 텍스트내용으로 추가하기
const form1 = document.querySelector('form');
const input1 = document.querySelector('#product') //텍스트입력창
const number = document.querySelector('#qty')  //숫차입력창
const ul = document.querySelector('#list')
form1.addEventListener('submit', function (e) {  //제출하면 함수작동
    e.preventDefault();   //폼제출못하게 기본작동 막기
    const text = input1.value;   //텍스트 입력값
    const qty = number.value;   //숫자 입력값
    const added = qty + ' ' + text; //숫자+ 텍스트
    const li = document.createElement('li') //li만들고
    li.innerText = added //li에 숫자+텍스트입력값을 innerText로 추가
    ul.appendChild(li);  //ul에 li추가
    input1.value = '';   //입력창 빈칸으로
    number.value = '';
})


//change 이벤트 -  입력을하다가 입력창말고 다른곳을 클릭하면 함수실행 
//입력창에서 새로운글자를 입력을 하다가 다른곳을 클릭해야 함수실행 (예를들어 d를썼다가 지우고 다시쓰면
//다른곳을 클릭해도 함수실행이 안됨) 입력창에만 적용되는건 아님
const input2 = document.querySelector('#input2')
const h11 = document.querySelector('#h11')
input2.addEventListener('change', function () {  //변경 이벤트- 새글자를 입력하다가 다른곳을클릭하면
    console.log('hooooooowwwoo')              //콘솔로그출력
})

//input 이벤트 - 글자,숫자등 뭔가 입력하면 함수실행  shift같이 아무것도입력되지않는키를 누르면 작동안함
input2.addEventListener('input', function () {   //마우스로 복사붙여넣기로 입력을해도 작동
    console.log('rrrrrrah')           //음성인식기능으로 입력을해도 작동
})

input2.addEventListener('input', function () {  //입력창에 입력하면 
    h11.innerText = input2.value;  //h1의 innerText에 입력값 추가 
})                              //타이핑함과동시에 실시간 h1 텍스트 동기화


//colt test 62 input event
// const input=document.querySelector('#username');
// const h1=document.querySelector('h1');
// input.addEventListener('input',function(){    입력창에 입력하면 함수실행
//    if (input.value===''){                 입력값이 없으면
//     h1.innerText=`Enter Your Username`}   h1에 `Enter Your Username` 출력
//     else {h1.innerText=`Welcome, ${input.value}`}  아닌경우  `Welcome,입력값`  출력
// })
//이때 틀린부분이 두군데있었는데 둘다 ; 세미콜론때문.
//if(input.value==='';) 세미콜론쓰면안됨   맨마지막에 ${input.value};`} 이세미콜론도안됨