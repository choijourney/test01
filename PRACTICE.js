
// const greet = (arg) => {
//     return `'Hey ${arg}!'`
// }
//이렇게쓰면 콘솔에 'Hey runa!' 라고뜬다 "Hey blar!" 큰따옴표나 따옴표없이 답을받으려면
//어떻게 해야할까?
// console.log(`${msg},${person}!"`)
// greet1('"Hello','Barry')
//이렇게 "Hello,Barry!" 나왔음 

const day = 2;
switch (day) {
    case 1:
        console.log("monday");

    case 2:
        console.log("tuesday");

    case 3:
        console.log("wednesday");

    case 4:
        console.log("thursday");

    case 5:
        console.log("friday");

    case 6:
    case 7:
        console.log("Weekend!!")

    default:
        console.log("I don't know that.")
}
