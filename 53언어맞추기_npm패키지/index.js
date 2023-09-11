// 이 텍스트가 어떤 언어인지 추측해서 출력해주는 코드를 만들거다
// franc 패키지에서 ISO언어코드를 이용하고, (예를들면 이런코드 'glg', 0.771284519307895)
//그래서 langs 패키지가 또 필요하다
// ISO 639-1, 639-2, 639-3 세 글자 코드, 이게 우리한테 필요한 버전이라고 한다. (어렵지만..)

// git에 npm init 을 입력한뒤 엔터 몇번쳐서 package.json 을 만들고
// franc 와 langs 패키지를 설치한다  npm i franc langs 공백으로 한번에 둘다 설치
// package.json을 확인하면 디펜던시에 잘 들어가있다
// 이제 index.js를 만들고 franc에서 코드를 가져온다

const franc = require('franc');
console.log(franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট')); //ben 출력
// 이 ben 코드를 나라이름으로 바꿔줘야하는데 이제 langs 패키지를 쓴다
// franc 설명을 자세히 보면 ISO 639-3 을 리턴한다
//Note: franc returns ISO 639-3 codes (three letter codes). Not ISO 639-1 or ISO 639-2.
//그리고 langs 사용법을 보니 langs.where에 3을 전달하라고한다 (franc에서 가져온 639-3의 3)
const langs = require('langs');
const langCode = franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট');
const language = langs.where('3', langCode);
console.log(language);

// $ node index.js   콘솔입력하니 langs.where가 반환한 객체가나옴
// ben
// {
//     '1': 'bn',
//         '2': 'ben',
//             '3': 'ben',
//                 name: 'Bengali',   여기서 우리가 원하는건 이름이니 .name을 메서드로 쓴다
//                     local: 'বাংলা',
//                         '2T': 'ben',
//                             '2B': 'ben'
// }
console.log(language.name)    //Bengali 출력

//이번엔 하드코딩대신 사용자가 입력하게 코드를 수정

const input = process.argv[2];       //require는 위에있으니 생략하고.  인수추가하는 메서드를씀 
const langCode1 = franc(input);
const colors = require('colors');    //글자색깔바꾸는 패키지 요청
if (langCode1 === 'und') {          // franc사이트 설명을 보면  '' = und  오류메시지로 쓸수있다.
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY AGAIN".red)
} else {
    const language1 = langs.where('3', langCode1);
    if (language1) {
        console.log(`our best geuss is ${language1.name.random}`);   //.random은 글자랜덤색으로 바꿈
    } else {
        console.log(`SORRY COULDN'T FIND A LANGUAGE FOR CODE: ${langCode1}`)
    }      //특정언어를 찾을수 없을때 undefined가 뜨는데 그때 이코드 실행
}
// $ node index.js 'bonjour je suis colt'   콘솔입력     // French 출력
// 'bonjour' 까지만 입력했을땐 오류가남  짧은 글자나 알수 없는 문자를 넣으면 오류남
//오류를 잡기위해 if문을 써본다
//글자색깔 바꾸기 위해 npm i colors로 패키지설치 후 require로 요청하고 .red 메서드로 색깔변경

//여기까지 require()함수로 배웠는데 franc가 업데이트 돼서 require대신 import키워드를 사용하는
//ES6모듈을 쓴다. require가 여전히 가장 많이 사용되는 방법이니 franc 쓸때만 import를 쓰는게 낫다
//import를 쓰면 Node.js / Express.js 앱을 사용할 때 예기치 못한 문제가 발생할 수 있다
//import쓰는방법은 강의 337번에 있다.



