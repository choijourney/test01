
// const greet = (arg) => {
//     return `'Hey ${arg}!'`
// }
//이렇게쓰면 콘솔에 'Hey runa!' 라고뜬다 "Hey blar!" 큰따옴표나 따옴표없이 답을받으려면
//어떻게 해야할까?
// console.log(`${msg},${person}!"`)
// greet1('"Hello','Barry')
//이렇게 "Hello,Barry!" 나왔음 


// function sumArray(arr) {

function callTwice(func) {  //(func)에는 함수가들어올것이라고 가정함
    func();
    func();
}
// func에 들어온 함수를 2번 실행하려고 괄호를 2번 추가했음 

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}


function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}
callTenTimes(rollDie)