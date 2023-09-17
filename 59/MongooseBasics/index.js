// mongoose  object data mapper 객체데이터매퍼   mongo와 node.js 이 둘을 연결해준다
// 기존 mongo를 개선하여 js측면에서 더 친숙하고 강력하게 만들어준다
// 또, 데이터나 문서를 js객체로 매핑한다.

//mongoose를 설치한다  빈폴더에 npminit 으로 package.json을 만들고 npm i mongoose 설치
//우리의 목적은 mongoose를 백그라운드에서 실행중인 mongo db서버에 연결하는거다
//mongoose사이트에가면 mongo db서버에 연결할수있는 아래 코드들이 있다 
const mongoose = require('mongoose');     //콜트 버전 사이트에없음
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => { console.log('connection open!!!') })
    .catch(err => {
        console.log('OH NO ERR!!')
        console.log(err)
    })
// const mongoose = require('mongoose');   //사이트 퀵스타트에서 가져옴 둘다실행됨

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test')
//         .then(() => { console.log('connect!!!') })
// }


