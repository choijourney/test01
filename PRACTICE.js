
// const greet = (arg) => {
//     return `'Hey ${arg}!'`
// }
//이렇게쓰면 콘솔에 'Hey runa!' 라고뜬다 "Hey blar!" 큰따옴표나 따옴표없이 답을받으려면
//어떻게 해야할까?
// console.log(`${msg},${person}!"`)
// greet1('"Hello','Barry')
//이렇게 "Hello,Barry!" 나왔음 




const tweetForm = document.querySelector('#tweetform');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //const usernameInput=document.querySelectorAll('input')[0]  이거보다 아래줄처럼쓰는게 좋다
    const usernameInput = tweetForm.elements.username;   //username은 name에서 가져온값
    const tweetInput = tweetForm.elements.tweet;      // input type="text" name="username"
    added(usernameInput.value,tweetInput.value)
    // added함수가 실행됨  (usernameInput.value,tweetInput.value) 
   //여기서 두 입력값은 아래 따로빼놓은 함수의 매개변수로 들어가서 실행됨 
    usernameInput.value = '';
    tweetInput.value = '';
})
//tweetInput.value = ''; 써서 입력창을 빈칸을 만들고싶었는데 
//아래 added함수 맨아래에 쓰니까 작동이안돼서 위치를 이자리로 바꿨다.
//원래는 added함수가 없이 함수가 하나였다 (아래 참조) 입력창 빈칸을 만들기위해
//added함수를 따로빼서 만들고 tweetInput.value = '';위치를 바꿨더니 잘작동한다



    const added=(username,tweet)=>{  //매개변수에 (usernameInput.value,tweetInput.value)
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)  //매개변수(usernameInput.value)
    newTweet.append(bTag);  
    newTweet.append(`-${tweet}`)  //매개변수(tweetInput.value)
    tweetsContainer.append(newTweet);
    
}
// console.dir(tweetForm)을 보면 elements(요소)라는 특성이 나온다
// 코드를 적은 순서대로 요소들이 나오는데 (인덱스도포함) name에 적은 글자도 나온다.
//0:input  1:input  2:button length:3  tweet:input username:input
//그래서 name을 이용해 tweetform.elements.tweet.value 입력값을 찾을수있다.class를 tweet으로 정하고
//입력값을 찾아봤는데 안됐다. 
const lis = document.querySelectorAll('li');
for (let li of lis) {
    li.addEventListener('click', function () { li.remove() })
}














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