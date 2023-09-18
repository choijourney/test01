//mongoose 유효성검사 require:true
const mongoose = require('mongoose');     //콜트 버전 사이트에없음
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')  //connect메서드가 promise를 반환
    .then(() => { console.log('connection open!!!') })  //promise와함께쓸수있는 메서드 then catch
    .catch(err => {
        console.log('OH NO ERR!!')
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 20    //20자이상은 못씀
    },
    price: {
        type: Number,
        min: [0, 'Price must be positive']  //price가 0보다 작은숫자일때 에러메시지 출력
    },
    onSale: {
        type: Boolean,
        default: false   //onSale을 따로설정하지않으면 false이다
    },
    categories: [String], //배열을 쓸땐 이렇게 정의하면됨
    qty: {
        online: {          //중첩으로 쓸수있다  따로설정하지않으면 {online: 0, inStore: 0} 출력
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})
//스키마에 require:true 를 추가하면 필수로 입력해야하는 사항이된다.
// name은 꼭 적어야하고 price는 안적어도 실행이 된다.


//메서드 만들기 
productSchema.methods.greet = function () {    //순서중요 이자리에있어야 작동.
    console.log('HOWDY!!!')        //메서드 greet을 생성. bike.greet() 쓰면 'HOWDY! 출력 
    console.log(`- from ${this.name}`)
}
//스키마객체에 메서드greet을 만들고  모델을 만들때 그값을 전달하면 greet을 쓸수있다 

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;  //! 토글시킨다 true면 false로. false면 true로.
    return this.save();  //save는 비동기라 시간이걸려서 return으로 thenable 반환 후
}     // 아래 .toggleOnSale메서드를 쓸때 await처리를 한다.

productSchema.methods.addCategory = function (newCat) { //categories배열에 추가하는 메서드
    this.categories.push(newCat);
    return this.save()  //thenable인데 promise처럼 작동해서 다른데서 await을 쓸수있다
}

const Product = mongoose.model('Product', productSchema);
const bike = new Product({ name: 'Mountain Bike', price: '599', categories: ['Cycling', 'Safety', 3] })
bike.save()
    .then(data => {
        console.log('IT WORKED');
        console.log(data)
    }).catch(err => {
        console.log('OH NO ERR!');
        console.log(err)  //err.errors 를 입력하면 더 구체적인 에러를볼수있음
    });
//node product.js 실행하면
//name만 썼을때  { name: 'Mountain Bike' } name 정보만 나온다.
//price에 숫자를 적는걸로 스키마설정했는데 '599' 문자열처럼 적어도 오류없이 객체에 {price: 599} 추가된다
//{ name: 'Mountain Bike', price: '599', color:'red' } 스키마에 설정안한 color를 적으면
// { name: 'Mountain Bike', price: '599' } 오류없이 두개만 나온다.
//mongosh에 use shopApp에 db.product.find() 를쓰면 추가된데이터가나온다.


//greet메서드,toggleOnSale메서드 실행하려하는데 객체를 만든후에 사용가능해서 이자리에씀.
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    foundProduct.greet();  //await은 'Mountain Bike' 찾는것을 기다렸다가  greet을 호출한다
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}
findProduct();
//async 비동기를 썼으니 await이나 .then을 써야하는데 이번엔 await을씀
//.toggleOnSale메서드를 정의할때 비동기.save를 return했기때문에 .toggleOnSale을쓸때 앞에 await을씀


//스키마타입
//immutable  어떤값을 불변하게 만들수도있다
//lowercase나 uppercase를 true로 설정하면 자동 대문자화,소문자화가 된다
//trim 을써서 문자열 앞뒤의 여백을 자를수있다
//maxlength:20 최대길이설정  20자 이상은 못씀
//minlength 최소길이설정
//match로  예를들어 전화번호나 이메일패턴을 따르게하는식이다
//min 허용하는최소가격 두번째인수에 에러메시지설정할수있다

//categories: ['Cycling', 'Safety', 3] 이렇게쓰고 node product.js로 확인하면 '3' 문자열로 바꾼다



//mongoose는 업데이트를 하면 유효성검사가 사라진다
//뭔가를 만들면 유효성 검사가 자동으로 적용되는데 업데이트 후엔
//Mongoose한테 계속 유효성 검사를 적용하라고 얘기해줘야한다
// runValidators:true 를 세번째인수에 쓴다  유효성검사가 다시적용된다
// Product.findOneAndUpdate({ name: 'tire Pump' }, { price: -1.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('IT WORKED');
//         console.log(data)
//     }).catch(err => {
//         console.log('OH NO ERR!');
//         console.log(err)
//     })


// min: [0, 'Price must be positive']  price가 0보다 작은숫자일때 에러메시지 출력


// const jersey = new Product({ name: 'jersey', price: '30', categories: ['Cycling'], size: 'xs' })
// jersey.save()
//     .then(data => {
//         console.log('IT WORKED');
//         console.log(data)
//     }).catch(err => {
//         console.log('OH NO ERR!');
//         console.log(err)
//     })


// enum 배열에 없는 값이 있으면 찾아서 오류띄움
//size:{ enum: ['S', 'M', 'L'] }  s,m,L 만 설정했는데 jersey데이터에 xs로 썼더니 오류뜸



// //
// productSchema.methods.greet = function () {
//     console.log('HELLO! HI!HOWDY!!!')
// }