
// const greet = (arg) => {
//     return `'Hey ${arg}!'`
// }
//이렇게쓰면 콘솔에 'Hey runa!' 라고뜬다 "Hey blar!" 큰따옴표나 따옴표없이 답을받으려면
//어떻게 해야할까?
// console.log(`${msg},${person}!"`)
// greet1('"Hello','Barry')
//이렇게 "Hello,Barry!" 나왔음 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const new= numbers.forEach(function (el) {
    return (el)
})

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   //기존배열은 바뀌지않고 그대로이다
const doubles = number.map(function (numb) {     //새배열을 만들어내고 다른변수에 저장한다
    return numb * 2;
})