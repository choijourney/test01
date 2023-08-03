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
// 함수안으로 범위가 한정되어 있으므로 범위밖(중괄호이후) totalEggs로 엑세스할수
//없다 중괄호 안의 함수는 비유적으로 거품안에 갇혀있다
// let=totalEggs는 거기서만 유효하다 정말 totalEggs를 함수밖에서 엑세스하고
//싶다면 잘쓰는 방법은 아니지만 방법이있다.
let totalEggs = 0;
//또는 6 아무거나 괜찮음 그리고 함수안에 let키워드를 지우고
function collectEggs() {
    totalEggs = 6;
}
//totalEggs를 6으로 설정하고 totalEggs를 출력한다
console.log(totalEggs);
collectEggs();
console.log(totalEggs);
//그럼 첫째줄 totalEggs는 let totalEggs의 0을 출력하고 그다음 함수안에있는 totalEggs
//인 6을 출력한다.  기존의 변수를 업데이트하는건 흔한일은 아님

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
}
console.log(bird);
//를 쓰면 Scarlet Macarw가 나옴

// let bird ='Scarlet Macaw';
// function birdWatch(){
//     let bird='Great Blue Heron';
// }
// birdWatch()
// console.log(bird);
//이렇게 써도 Scarlet Macarw가 나옴 하지만 함수안에 let bird에서 let을 빼고 bird
//만쓰면 답은 'Great Blue Heron' 으로 바뀐다 let은 중괄호 안에서만 활동할수있고
//bird='Great Blue Heron' 은 전역활동이라서 그런듯싶다.
//let이나 const는 지역범위, 즉 중괄호안에서만 활동가능. let같은 키워드 없는 변수는
//전역범위

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird);
}
//함수안에 console.log를 옮기면 Great Blue Heron이 나옴

let bird = 'Scarlet Macaw';
function birdWatch() {
    // let bird='Great Blue Heron';
    console.log(bird);
} birdWatch()
// 저줄을 주석처리하면/ 함수와 let bird의 접점이 생겨 'Scarlet Macaw'가나옴
//js는 함수안에 같은 이름으로 정의된 변수가 있을경우 그변수를 먼저 참조.(Great Blue Heron)
//함수안에 bird가 없다면 다른곳의 bird변수를 찾는다(Scarlet Macaw)

//블록범위
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'Hii!'
} console.log(radius);
console.log(PI)
//if안에 const나 변수는 의미없이 쓴것들. consol.log(radius)출력해보면 첫줄 변수에 엑세스
//되어 8을변환     / console.log(PI)를 출력해보면 not defined뜸 함수였으면 처리됐을거임
//선언된 변수가 함수여서 유효범위가 함수라면.그러나 예시는 함수가아니다 
//연결가능한 범위는 if조건문의 중괄호 블록이다. 블록은 함수를 제외하고는
//기본적으로 중괄호가 있는 모든곳을 말한다. 블록에는 조건문과 루프같은게 많다
// 정리해보면, 함수범위는 보통 중괄호 안까지인데 함수바깥에 연결시키는 방법도 있긴하다.

for (let i = 0; i < 5; i++) {
    let msg = 'asd';
    console.log(msg)
}
//console.log(msg)가 중괄호안에 있어야 'asd'가 출력된다

//var키워드를 쓰면 변수의 범위가 함수로 지정되지만 블록으로 지정되지않는다
//중괄호 이후도 엑세스가능 그래서 불편함이있다
for (let i = 0; i < 5; i++) {
    var msg = 'asd';
    console.log(msg)
} console.log(msg)
    - (5)asd
asd
// (5)asd는 for루프의 i가 실행된거고 그밑 asd는 중괄호밖의 console.log(msg)가 실행된것
// var는 중괄호 밖의 출력도 실행한다 하지만 let이나 const를
// 쓰면 변수의 범위가 블록으로 지정됨. 딱 중괄호까지만 실행하고 그다음엔 존재하지않음.

function rainy() {
    for (var i = 0; i < 3; i++) { }
    console.log(i)

}
//3   배우지않은것같은데 for루프 안에 {} 중괄호쓰면 length가 나오나보다 3이나오는거보면.
function rained() {
    for (let j = 0; j < 3; j++) { }
    console.log(j)
}
//그런데 똑같이 해도 let을 쓰면 오류뜬다. let과 const는 괄호의범위안에서만 접근가능하다고
//한다. 출처는 구글'렉시컬 범위'쳤을때 나온 블로그

let fruit = 'grape';
function fruits() {
    let fruit = 'mango';
    console.log(fruit);
}
fruit;
// function중괄호 블록에 네모칸을 친다고 상상해보자 그다음 바깥에 네모칸을 하나더쳐보자
// 네모칸친상태로 생각해보면 (fruit)은 'mango'와 같은네모칸에있고 fruit은 'grape'와
//같은 칸에 있다. 

let count = 8;
if (count > 0) {
    const PI = 3.14159;
    let msg = 'Hii!'
}
console.log(count);
console.log(PI)
//블록범위도 똑같다 if중괄호부분만 네모칸을 치고 바깥에 네모를 쳐보면 (count)는 8 출력,
//(PI)는 출력안됨.

//렉시컬범위
function bankRobbery() {
    const heroes = ['Spidermas', 'Wolverine', 'puss in boots']
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US ${hero.toUpperCase()}`)
        }
    }
}
//이상태로 출력하면 아무것도나오지않는다 bankRobbery()를 콘솔에써봐도 안나옴
function bankRobbery() {
    const heroes = ['Spidermas', 'Wolverine', 'puss in boots']
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US ${hero.toUpperCase()}`)
        }
    }
    cryForHelp();
}
//중괄호 끝에 cryForHelp();를 쓰니 bankRobbery()출력했을때 작동한다
//함수는 console.log를 써서 식을 완성했어도 원래 바로 실행되지않는다. 호출을해서 불러줘야
//'나그거알아'하면서 답을 내놓는다. 그래서 예를들어 함수가 2개일때 호출도 2개를 해야한다
//마지막줄에 함수이름(); 이렇게 써주고 콘솔에 첫째줄 함수 호출을 하면 답을준다
//함수가 3개일때도 3개 모두 호출해줘야한다
//여기서 렉시컬범위가 나오는데 렉시컬범위- 부모함수의 안에 중첩된 내부함수는 부모함수의
//범위에나 또는 범위내에서 정의된 변수에 엑세스할수 있다. 몇단계 위 함수더라도 중첩돼있으면
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
//안에 있는 항목이라면 inner함수 내에 액세스가능하고 cryforhelp함수안에 있는항목이면
//그것도 inner내에서 엑세스된다 그러나 역방향으로는 성립하지않는다
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
//원래는 함수의 이름을 사용하는데 함수표현식에선 함수의이름이 아님
//function뒤에 함수이름이 붙지않고 바로 ()괄호를씀 변수의 이름을쓴다.
//이름없는 함수를 변수안에 저장~ 함수표현식 위에 일반함수식을 보면 함수이름이 add 이다
//두함수 다 호출을하면 똑같은 방식으로 작동,같은 답. 
//js에서는 함수가 값이다. 숫자나 문자를 저장하는것처럼 함수도 저장한다.js는 함수를
//배열같은 값의 하나로 간주한다    함수를 변수로 저장하는 방식으로 엄청난작업을 할수있따
//함수를 인수로 쓸수도 있고 숫자를 반환하듯이 함수도 값으로 반환할수 있다
//함수가 다른것들과 마찬가지로 값으로 취급된다는 개념.
//콘솔에 쓸때 add(x,y) 로 일반함수식과 똑같이 씀.

let greet = function () { console.log('hiii') }
//콘솔 greet()   / hiii