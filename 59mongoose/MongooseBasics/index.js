// mongoose  object data mapper 객체데이터매퍼   mongo와 node.js 이 둘을 연결해준다
// 기존 mongo를 개선하여 js측면에서 더 친숙하고 강력하게 만들어준다
// 또, 데이터나 문서를 js객체로 매핑한다.
//mongoose 단독사용을 위해 잠깐 express를 사용하지않을거다

//mongoose를 설치한다  빈폴더에 npminit 으로 package.json을 만들고 npm i mongoose 설치
//우리의 목적은 mongoose를 백그라운드에서 실행중인 mongo db서버에 연결하는거다

//코드를 작동시키려면 mongod를 켜놔야한다
//mongoose사이트에가면 mongo db서버에 연결할수있는 아래 코드들이 있다 
//mongoose는 promise도 지원한다
const mongoose = require('mongoose');     //콜트 버전 사이트에없음
mongoose.connect('mongodb://127.0.0.1:27017/foodApp')  //connect메서드가 promise를 반환
    .then(() => { console.log('connection open!!!') })  //promise와함께쓸수있는 메서드 then catch
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


//mongoose 모델 - mongoose의 도움으로 생성되는 js클래스로, mongodb의 어떤집합의 정보를 나타낸다
//예를들어 mongoose의 도움을받아 음식 모델을 만들고  데이터베이스에서 작성한 음식정보에
//다양한 메서드를 제공한다. mongoose참고서에서 API아래에 MODEL메뉴를 보면 다양한 메서드가있다
//mongodb와 작업할건데 js파일에서 데이터를 사용하려면 각 데이터를 정의하는 모델을 만들어야한다


//첫번째로 정의할모델은 스키마 schema 이다
// {
//     name: 'dduck bok kki',
//         year: 1800,
//         nutritionInformation: 'carbo',
//      from: 'korea'       
// }  이것은 스키마가아니고 음식데이터다.

const foodSchema = new mongoose.Schema({
    name: String,
    year: Number,
    nutritionInformation: String,
    from: String
})  //이게 스키마다. 타입을 적는거다. 타입엔 string,number,boolean,array,date,objectId,buffer등있다
//스키마를 정의하는걸로 db에 영향을 주지않는다. js와 동일하게 다루기위한 방법일뿐이다.

//이제 위 스키마를 가져와서 스키마를 이용한 모델을 만든다
const Food = mongoose.model('Food', foodSchema);
//첫째인수는 모델이름을 나타내는 문자열이고 단수형,첫번째문자는 대문자여야 한다
//그럼 mongoose는 그이름을 자동으로 복수형으로, 소문자로 바꿔서 foods 라는 집합을 생성한다
//집합이름은 foods고 모델이름은 Food 인것이다
//변수로 저장하는데 주로 모델이름하고 똑같이 입력한다  그다음 스키마를 입력한다.
//이제 Food라는 모델클래스가 생겼다 .model 

const dduckBokKki = new Food({ name: 'dduck bok kki', year: 1800, nutritionInformation: 'carbo', from: 'korea' })
//이제 Food모델에 객체를 만들수있고 mongodb에 저장할수있다

//터미널에서 node 입력해서 node REPL을 킨후 .load index.js 를 입력하고
//dduckBokKki를 입력하면 떡볶이데이터객체가 나온다. objectId도 자동생성이됐다
//그럼 이 떡볶이객체를 저장한다.  dduckBokKki.save()
//그다음 mongosh에서 db를 use foodApp으로 접속한뒤  db.foods.find() 입력하면
//저장된 떡볶이객체가 나온다
//mongosh의 db이름 foodApp 과 mongoose.connect에 쓴 url의 마지막 경로 /foodApp을 똑같이해야한다!!

//mongoose.connect('mongodb://127.0.0.1:27017/foodApp') 헤맸던이유는 경로를 /test로 해놨기때문.

//.save()는 promise랑 비슷하다 await과 .then을 쓸수있다


//mongodb에 데이터 대량 삽입하기  
Food.insertMany([   //insertMany를 호출하면 mongdb에 바로 연결되어 한번에 많이 입력할수있다.
    { name: 'bananaKick', year: 1988, nutritionInformation: 'carbo,fat', from: 'korea' },
    { name: 'gamjaKkang', year: 1988, nutritionInformation: 'carbo,fat', from: 'korea' },
    { name: 'pizza', year: 1700, nutritionInformation: 'carbo,fat', from: 'italy' },
    { name: 'taco', year: 1800, nutritionInformation: 'fat', from: 'mexico' },
    { name: 'magDonald', year: 1970, nutritionInformation: 'fat', from: 'america' }
])
    .then(data => {              //insertMany로 데이터를 mongdb에 저장한후
        console.log('IT WORKED!');  //콘솔에 출력
        console.log(data)
    })
//모델이름은 모두 첫문자가 대문자여야함
//모델의 인스턴스를 한개만 만들때는  .save()로 저장을해야한다.
//하지만 insertMany를 호출하면 mongdb에 바로 연결되어 한번에 많이 입력할수있다.save가필요없다
//insertMany는 mongo에서 사용한것과 동일한것으로 이경우는 mongoose의 메서드이다.
//js에서 promise를 반환한다. 그래서 .then을 쓸수있다

//git에서 node index.js 입력하면 IT WORKED! 와 데이터객체가나온다.
//단일모델객체를 만들땐 node REPL에서 .load index.js를 했었는데 왜 이번과정에선없는지..? 무튼
//mongosh에서 db.foods.find() 입력하면 추가한데이터객체까지 다나온다.




//mongoose로 찾기 find
//몽구스 참고서에 API 아래에 Model을 클릭하면 find와 findById 메서드가 있다
//findByIdAndDelete나 Update, findOne도 있습니다 이런 메서드로 데이터를 삭제하거나 업데이트할 수 있다
//find는 mongo에서 사용했던것과 비슷하게 키-값을 전달한다. 그리고 $lt 같은 연산자도 find와 같이쓸수있다
//이때 mongo에서 데이터를 우리에게 줘야하기때문에 시간이 걸린다
//.then을 쓸수있지만 promise는 아니다. mongoose쿼리라고 부르고 thenable이다.
//쿼리란 데이터베이스에 정보를 요청하는것

//node REPL에서 .load index.js 입력하고 Food.find({}) 를입력하면 쿼리객체를 반환한다.
//우리가 원하는 데이터객체와 모양이다르다. 쿼리객체는 중요하지않아서 신경쓰지않아도된다.
//.then을 입력하면 데이터객체를 출력한다
//Food.find({}).then(data=>console.log(data))

// 연산자를 이용해 1980 초과인 음식을 찾았다
// Food.find({ year: { $gt: 1980 } }).then(data => console.log(data))
//   [
//         {
//             _id: new ObjectId("6507df1dda8700f6e5d79e09"),
//         name: 'bananaKick',
//         year: 1988,
//         nutritionInformation: 'carbo,fat',
//         from: 'korea',
//         __v: 0
//   }]  이하생략..

//find를 쓰면 하나또는 여러개의 정보를 배열로 찾아온다. [{}]

//findOne을 쓰면 배열이 아닌 객체로만 찾아온다.  {}
//Food.findOne({ year: { $gt: 1980 } }).then(data => console.log(data))
// {
//     _id: new ObjectId("6507df1dda8700f6e5d79e09"),
//         name: 'bananaKick',
//          year: 1988,
//           nutritionInformation: 'carbo,fat',
//           from: 'korea',
//                         __v: 0
// }


// findById 메서드  express에서 자주사용한다   id와 일치하는 데이터를 찾는다
// Food.find({_id:'6507df1dda8700f6e5d79e09'}).then(data=>console.log(data))



//mongoose로 업데이트하기 updateOne  updateMany

//노드 REPL에 pizza인 객체를 찾아서 year을 바꾼다
//Food.updateOne({name:'pizza'},{year:1940}).then(res=>console.log(res))
//{
// acknowledged: true,
//     modifiedCount: 1,  업데이트된데이터가아닌 몇개가 수정됐다고 알려준다
//     upsertedId: null,
//     upsertedCount: 0,
//     matchedCount: 1
// }
//mongosh에서 db.foods.find({name:'pizza'}) 를 찾아보면 업데이트가 돼있다.

// updateMany 로 여러개 업데이트하기  띄어쓰기중요
//foodApp> db.foods.find({name: {$in: ['taco', 'pizza']}})  일단 mongoose에서 변경할것들을 찾은다음에
//Food.updateMany({name: {$in: ['taco', 'pizza']}}, {year: 1890}).then(res=> con
//sole.log(res))        node REPL에서 쓴다. 띄어쓰기.
//mongosh에서 db.foods.find() 하면 변경된 내용이 나온다
//mongosh에 find로 찾았을때 자꾸 객체가 늘어나서 한참헤맸는데 node를 나갔다가 .load index.js 할때마다
//맨위에쓴 insertMany가 호출돼서 객체가 계속 추가된것같다
//new Food로 추가한 dducBokKki는 한번삭제하니까 .load index.js 해도 다시 추가가 안되는데 (왜냐면 save를
//따로 해줘야하니까) insertMany는 자동으로 저장이되니까 객체가 늘어난듯.


//findOndAndUpdate
//updateOne, updateMany는 몇개가 업데이트됐는지 알려줄뿐 업데이트된 데이터를 보여주진않는다.
//그래도 쓰다보면 업데이트된 데이터를 바로 보고싶을때가 있는데 findOndAndUpdate를 쓰면 된다.

//한개를 업데이트하면서 업데이트하는 데이터의 기존정보를 출력 node REPL에 입력
// Food.findOneAndUpdate({name: 'taco'}, {year: 1808}).then(m => console.log(m))
//그게 디폴트고 새버전이 반환되게 하려면 세번째 인수에 {new:true} 를 넣는다.  이게더일반적임
// Food.findOneAndUpdate({name: 'taco'}, {year: 1808},{new:true}).then(m => console.log(m))
// name이 taco인 객체를 찾아서 year를 1808로 변경


//findByIdAndUpdate
//Food.findByIdAndUpdate({_id:"6508233eac129d3d9a66ef59"}, {year: 1844}, {new:tr
//ue}).then(m => console.log(m))
// 해당id객체를 찾아서 year를 1844로 변경



//mongoose로 삭제하기  deleteOne   deleteMany
// deleteOne 하나만삭제  삭제된갯수출력      nodeREPL입력
// Food.deleteOne({ _id: "65080beb235d2006ab6ccddf" }).then(msg => console.log(msg))
// Promise {
//     <pending>,
//         [Symbol(async_id_symbol)]: 1393,
//         [Symbol(trigger_async_id_symbol)]: 1389
// }
// > {acknowledged: true, deletedCount: 1 }   mongosh에 db.foods.find()입력하면 지워져있음


//deleteMany 여러개삭제 삭제된갯수출력    nodeREPL입력
// Food.deleteMany({year: {$gt: 1950}}).then(m=> console.log(m))
// mongosh에 db.foods.find()로 찾아보면 지워져있음
// $gt 1950보다 초과인 데이터는 삭제


//findOneAndDelete  삭제된 데이터를 출력
// Food.findOneAndDelete({name: 'taco'}).then(m=> console.log(m))
//{
// _id: new ObjectId("6508233eac129d3d9a66ef5a"),
//     name: 'taco',
//     year: 1808,
//     nutritionInformation: 'fat',
//      from: 'mexico',
//        __v: 0
// }

//findByIdAndDelete 삭제된 데이터 출력
//Food.findByIdAndDelete({_id:"6508233eac129d3d9a66ef59"}).then(m=>console.log(m))
