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


// 버블링     물속에서 올라오는 공기방울처럼 맨아래 요소부터 높은레벨까지 올라가는 것을 버블이라한다.
// 버튼 클릭하면 버튼작동-> p작동 ->섹션작동    p클릭하면 p작동-> 섹션작동   
//<section onclick="alert('section clicked')">
//  <p onclick="alert('paragraph clicked')">I am a paragraph
//        <button onclick="alert('button clicked')">bubble</button>
//  </p>
//</section>

const bubblediv = document.querySelector('#bubblediv');
const bubblebtn = document.querySelector('#bubblebtn');
bubblebtn.addEventListener('click', function (e) {    //버튼 클릭하면 함수실행
  bubblediv.style.backgroundColor = makeRandColor()  //디브 배경색 랜덤컬러로.
  e.stopPropagation();                   //이벤트가 버블링하지 않도록 막아줌
})  //원래는 div이벤트까지 실행됐어야하는데 버블링을 막아서 배경색만 바꾸고 div의 이벤트는 실행안됨. 
const makeRandColor = () => {                     //랜덤컬러 만듦
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
  //여기서 헤맸던 포인트. 버튼선택할때 querySelectorAll로 선택을했는데 랜덤컬러 작동이 안됐음
  //querySelector로 바꾸니 작동됨. id는 하나니까 querySelector써도 됨.
}

bubblediv.addEventListener('click', function () {
  bubblediv.classList.toggle('hide');     //디브에 hide클래스를 적용시키는데 토글시킨다
})  //디브를 클릭하면 디브가 사라지게함.  토글이라 클릭하면 사라지고 클릭하면 다시생기는줄 알았는데
//사라지면 다시안생긴다 왜그럴까?

//stopPropagation()  이벤트가 버블링하지 않도록 막아줌



//폼이벤트 트윗만들기
const tweetForm = document.querySelector('#tweetform'); //form
const tweetsContainer = document.querySelector('#tweets'); //ul
tweetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  //const usernameInput=document.querySelectorAll('input')[0]  이거보다 아래줄처럼쓰는게 좋다
  const usernameInput = tweetForm.elements.username;   //username은 name에서 가져온값
  const tweetInput = tweetForm.elements.tweet;      // input type="text" name="username"
  addTweet(usernameInput.value, tweetInput.value) //input창에 입력한 입력값들
  // added함수가 실행됨  /여기서 두 입력값은 아래 따로빼놓은 함수의 매개변수로 들어가서 실행됨 
  usernameInput.value = '';
  tweetInput.value = '';
});
//tweetInput.value = ''; 써서 입력창을 빈칸을 만들고싶었는데 
//아래 added함수 맨아래에 쓰니까 작동이안돼서 위치를 이자리로 바꿨다.
//원래는 added함수가 없이 함수가 하나였다 (아래 참조) 입력창 빈칸을 만들기위해
//added함수를 따로빼서 만들고 tweetInput.value = '';위치를 바꿨더니 잘작동한다

const addTweet = (username, tweet) => { //매개변수에 (usernameInput.value,tweetInput.value)
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(username)  //매개변수(usernameInput.value)
  newTweet.append(bTag);
  newTweet.append(`-${tweet}`);  //매개변수(tweetInput.value)
  tweetsContainer.append(newTweet);
}
// name값 사용하기    const usernameInput = tweetForm.elements.username;
// input type="text" name="username" 여기 이 name특성을 가져다 사용하는것.
// console.dir(tweetForm)을 보면 elements(요소)라는 특성이 나온다
// 코드를 적은 순서대로 요소들이 나오는데 (인덱스도포함) name에 적은 글자도 나온다.
//0:input  1:input  2:button length:3  tweet:input username:input
//그래서 name을 이용해 tweetform.elements.tweet.value 입력값을 찾을수있다.class를 tweet으로 정하고
//입력값을 찾아봤는데 안됐다. elements에 name을 이용해야함.


//이벤트위임  만들어놨던 트윗 수정하기
const tweetForm1 = document.querySelector('#eventform');
const tweetsContainer1 = document.querySelector('#tweet1');
tweetForm1.addEventListener('submit', function (e) {
  e.preventDefault();

  // const usernameInput = document.querySelectorAll('input')[0]; 
  // const tweetInput = document.querySelectorAll('input')[1]; 
  const usernameInput1 = tweetForm1.elements.user;
  const tweetInput1 = tweetForm1.elements.tweett;
  addTweet1(usernameInput1.value, tweetInput1.value)
  usernameInput1.value = '';
  tweetInput1.value = '';
});

const addTweet1 = (username, tweet) => {
  const newTweet1 = document.createElement('li');
  const bTag1 = document.createElement('b');
  bTag1.append(username)
  newTweet1.append(bTag1);
  newTweet1.append(`- ${tweet}`)
  tweetsContainer1.append(newTweet1);
}

// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () { li.remove() })  //li를 클릭하면 없어짐
// } //그러나 html에 원래 있던 li만 없어지고 새로 트윗해서 생긴 li한텐 적용이안됨 
//이럴때 새li한테도 이벤트를 적용되게 하는 이벤트위임이 있다.
// 이벤트위임이란  li의 부모요소에 이벤트수신기(이벤트리스너)를 추가 하는거다
//콘솔에 포인터이벤트(마우스이벤트) 객체를 보면 target이라는 특성이 있다
//이 target이, 클릭했을때 눌려진 요소를 뜻한다.
//만약 ul에 이벤트리스너로 'click'을 추가하고 li를 클릭하면 ul에 이벤트리스너를 썼지만 
//클릭되는건 li니까 target:li 타깃은 li로 나온다

// tweetsContainer1.addEventListener('click', function (e) {    //부모인 ul에 이벤트리스너
//     e.target.remove();                             // 타깃제거(클릭하는요소제거)
// })  이렇게만 써도 새로트윗한 li까지 제거된다 그러나 혹시 버튼이나 다른 요소가  ul안에 있을때 
//버튼은 지우지않고 li만 지우고싶다면 아래처럼 쓰면된다

tweetsContainer1.addEventListener('click', function (e) {  //ul에 이벤트리스너
  e.target.nodeName === 'LI' && e.target.remove();   //타깃의 노드네임이 'LI'와같다면 제거
})
//console.dir(e.target) 을 콘솔에서보면 nodeName='LI' 로나옴  nodename을 이용하거나
// e.target.localName === 'li' && e.target.remove();   localName'li' 를 이용해도된다
//대소문자 잘보기 nodeName'LI' 때문에 고생함..




//이벤트위임  트윗  원본
// const tweetForm1 = document.querySelector('#eventform');
// const tweetsContainer1 = document.querySelector('#evts');
// tweetForm1.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm1.elements.user;
//     const tweetInput = tweetForm1.elements.tweett;
//     addTweet1(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet1 = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer1.append(newTweet);
// }
// tweetsContainer1.addEventListener('click', function (e) {
//     e.target.remove();
// })