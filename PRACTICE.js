//axios import@  <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

// const greet = (arg) => {
//     return `'Hey ${arg}!'`
// }
//이렇게쓰면 콘솔에 'Hey runa!' 라고뜬다 "Hey blar!" 큰따옴표나 따옴표없이 답을받으려면
//어떻게 해야할까?
// console.log(`${msg},${person}!"`)
// greet1('"Hello','Barry')
//이렇게 "Hello,Barry!" 나왔음 
const user = {
  email: 'harvey@gmail.com',
  password: 'ssssss333',
  firstName: 'Harvey',
  lastName: 'milk',
  born: 1930,
  died: 1978,
  bio: 'Harvey Bernard Milk was an American politician',
  city: 'San Francisco',
  state: 'California'

}
const { email, city, state, password } = user;

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