//함수범위 
function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}
//collectEggs() 콘솔에 치면 6나옴. 여기서 console.cog를 함수범위 내 말고 밖으로 해보면
function collectEggs() {
    let totalEggs = 6;
} console.log(totalEggs);
//오류난다. 왜냐면 함수가 실행되야하는데 }여기서 끝나서 console.log까지 영향을 안줬기때문

function collectEggs() {
    let totalEggs = 6;
}
collectEggs();
console.log(totalEggs);
//그래서 console.log위에 collectEggs()를 호출하고 출력해보면. 그래도 오류남
//여기서 함수범위에 맞닥뜨린다 우리가 let으로 함수안에서 정의한 변수들은
// 함수안으로 범위가 한정돼있으므로 범위밖(중괄호이후) totalEggs로 엑세스할수
//없다  let totalEggs는 함수안에서만 유효하다 함수밖에서 쓰려면 함수밖에서 let totalEggs=6; 을 쓰면된다
//  totalEggs를 함수밖에서 엑세스하고 싶다면 잘쓰는 방법은 아니지만 방법이있다.
let totalEggs = 0;  //또는 6 아무거나 괜찮음 그리고 함수안에 let키워드를 지우고    
function collectEggs() {
    totalEggs = 6;
}
//totalEggs를 6으로 설정하고 totalEggs를 출력한다
console.log(totalEggs);
collectEggs();
console.log(totalEggs);
//그럼 첫째줄 totalEggs는 let totalEggs의 0을 출력하고 그다음 함수를 실행, totalEggs
//인 6을 출력한다. 첫째줄 let변수를 함수안에서 업데이트했는데 기존의 변수를 업데이트하는건 흔한일은 아님

let bird = 'Scarlet Macaw';         //전역범위
function birdWatch() {
    let bird = 'Great Blue Heron';  //지역범위
}
console.log(bird);
//를 쓰면 Scarlet Macarw가 나옴

let bird0 = 'Scarlet Macaw';      //전역범위
function birdWatch() {
    let bird0 = 'Great Blue Heron';  //지역범위
}
birdWatch()       //함수는 실행되지만 함수안에 변수는 지역범위라 밖에있는 콘솔로그까지 영향을미치지않음
console.log(bird0);    // 따라서 전역범위인 'Scarlet Macarw' 출력



let bird3 = 'Scarlet Macaw';      //전역범위
function birdWatch() {
    bird3 = 'Great Blue Heron';   //전역범위였던 bird3를 업데이트
}
birdWatch()         //이제 bird3는 'Great Blue Heron'으로 바뀜   
console.log(bird3);          //'Great Blue Heron'출력
//하지만 함수안에 let을 빼고 bird3 만쓰면 'Great Blue Heron' 출력
//bird3='Great Blue Heron' 을 쓰면서 전역범위였던 첫째줄 bird3를 업데이트했기때문.
//함수안에서 입력해도 변수는 업데이트가된다
//콘솔에 bird3를 써보면 'Great Blue Heron'출력됨
//함수밖 변수는 전역범위, 함수안 변수는 지역범위

let bird1 = 'Scarlet Macaw';
function birdWatch() {
    let bird1 = 'Great Blue Heron';
    console.log(bird1);
}
//함수안에 console.log를 옮기면 Great Blue Heron이 나옴

let bird2 = 'Scarlet Macaw';
function birdWatch() {
    // let bird='Great Blue Heron';
    console.log(bird2);
} birdWatch()
// 저줄을 주석처리하면/ 함수와 첫째줄 let bird2와 접점이 생겨 'Scarlet Macaw'가나옴
//js는 함수안에 같은 이름으로 정의된 변수가 있을경우 그변수를 먼저 참조.(Great Blue Heron)
//함수안에 bird가 없다면 다른곳의 bird변수를 찾는다(Scarlet Macaw)


//전역범위 (글로벌범위)
// 블록문 밖에서 선언한 변수는 블록문 안에서도 사용할 수 있는데 이런 변수를 글로벌변수 혹은 
// 전역변수라고 부른다. 글로벌변수는 이름에서도 알수 있듯이 코드를 작성할 수 있는 파일 어디서나 사용할수있다.
// 글로벌 변수는 어디에서나 유효한 범위를 가지고 있지만  지역범위에서 선언된 변수는
// 밖에서(블록문 밖에서) 사용할 수 없다 

//지역범위 (로컬범위)
// js에서는 중괄호'{}'로 감싼 코드를 블록문 이라고 부른다. 그리고 그 블록문 안에 선언된 변수를 로컬 변수 
// 혹은 지역 변수라고 부른다. 로컬변수는 블록문 내에서만 사용할 수 있는 변수이다. 
// 함수 내에서 지역변수 먼저 참조하고 없을경우 전역변수를 사용한다


//블록범위   js에서는 중괄호'{}'로 감싼 코드를 블록문이라고 부른다.  
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'Hii!'
} console.log(radius);
console.log(PI)
//if안에 const나 변수는 의미없이 쓴것들. consol.log(radius)출력해보면 첫줄 변수에 엑세스
//되어 8을변환    console.log(PI)를 출력해보면 not defined뜸 
//왜냐면 블록문안에서 쓴 변수들은 블록문안에서만 사용할수있기때문
//지역변수들이라 블록문바깥의 콘솔로그까진 영향을못미침

for (let i = 0; i < 5; i++) {
    let msg = 'asd';
    console.log(msg)
}  //console.log(msg)가 중괄호안에 있어야 'asd'가 출력된다
//msg는 블록내에서만 선언된 변수라 콘솔에 msg를 입력하면 not defined나옴.


//var키워드는 블록문안에 있어도 전역범위이다.
//var키워드를 쓰면 변수의 범위가 함수로 지정되지만 전역범위이다.
//콘솔에 msg를 입력하면 'asd'출력. 중괄호 이후도 엑세스가능 그래서 불편함이있다
for (let i = 0; i < 5; i++) {
    var msg = 'asd';
    console.log(msg)
} console.log(msg)
    - (5)asd    //for구문안의 콘솔로그가 실행된것
asd          //중괄호밖의 콘솔로그가 실행된것



function rainy() {
    for (var i = 0; i < 3; i++) { }
    console.log(i)

}
//3   for루프 안에 {} 빈중괄호로 끊으면  var는 전역범위라 답이 3으로 나옴
function rained() {
    for (let j = 0; j < 3; j++) { }
    console.log(j)
}
//그런데 똑같이 해도 let을 쓰면 지역범위라 {}중괄호까지만 영향을 주니까 not defined가뜬다. 



//렉시컬범위
function bankRobbery() {
    const heroes = ['Spidermas', 'Wolverine', 'puss in boots']
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US ${hero.toUpperCase()}`)
        }
    }
}  // bankRobbery()를 콘솔에서 호출해도 cryForHelp()를 호출하지않아서 출력이 안됨
function bankRobbery() {      //backRobbery()를 콘솔에서 호출
    const heroes = ['Spidermas', 'Wolverine', 'puss in boots']
    function cryForHelp() {       //호출전엔 작동하지않다가
        for (let hero of heroes) {
            console.log(`PLEASE HELP US ${hero.toUpperCase()}`)
        }
    }
    cryForHelp();     //호출하면 작동
}
//함수는 console.log를 써서 식을 완성했어도 원래 바로 실행되지않는다. 호출을해서 불러줘야
//출력을한다. 중첩함수가 3개라면 3개 모두 호출해야 함수가 실행된다


//이게 렉시컬범위- 부모함수의 안에 중첩된 내부함수는 부모함수의
//범위나 또는 범위내에서 정의된 변수에 엑세스할수 있다. 몇단계 위 함수더라도 중첩돼있으면
//내부함수(자식함수)는 부모함수에 엑세스할수있다. 그러나 반대로 자식함수안에 있는 변수를 
//부모함수가 엑세스할수없다. 아래로 물려줄수는 있지만 위로는 안된다.

function bankRobbery() {
    const heroes = ['Spidermas', 'Wolverine', 'puss in boots']
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US ${hero.toUpperCase()}`)
            }
        } inner();
    }
    cryForHelp();
}
//lexical scope / 중첩된 함수나 내부함수는 상위 몇 레벨위에 있든 상관없이 부모함수나
//조부모함수등이 엑세스하는 동일한 항목에 엑세스할수있다. 첫줄 function bankRobbery
//안에 있는 항목이라면 inner함수에서 액세스가능하고 cryforhelp함수안에 있는항목이면
//그것도 inner에서 엑세스된다 그러나 역방향으로는 성립하지않는다
//function cryForHelp() {}안에서 변수를 let color='red'라고 하면 inner함수에서는
//엑세스가 되지만 올라가서 맨위의 bankRobbery함수에선 안된다


//함수표현식
function add(x, y) {
    return x + y;
}
//일반적인 함수식 말고 함수를 정의하는 다른방식이 하나 더있다
//변수를 만들어 함수식을 저장하는것.↓
const add = function (x, y) {
    return x + y;
}
//이게바로 함수표현식. 인라인함수라고 부른다.
//원래는 함수의 이름을 사용하는데 함수표현식에선 
//function뒤에 함수이름이 없고 바로 ()괄호를쓰고, 변수의 이름을 사용한다
//이름없는 함수를 변수안에 저장~   일반함수식을 보면 함수이름이 add 이다
//두함수 다 호출을하면 똑같은 방식으로 작동,같은 답. 
//js에서는 함수가 값이다. 숫자나 문자,배열을 저장하는것처럼 함수도 저장한다.
//함수를 변수로 저장하는 방식으로 엄청난작업을 할수있따
//함수를 인수로 쓸수도 있고 숫자를 반환하듯이 함수도 값으로 반환할수 있다
//함수가 다른것들과 마찬가지로 값으로 취급된다는 개념.
//콘솔에 쓸때 add(x,y) 로 일반함수식과 똑같이 씀.

let greet = function () { console.log('hiii') }
//콘솔 greet()   / hiii