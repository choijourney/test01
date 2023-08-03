//키보드이벤트와 이벤트객체
document.querySelector('button').addEventListener('click', function (evt) { console.log(evt) })
//이렇게입력하고 콘솔을보면 이벤트객체가 나오는데 clientX는 버튼의 가로좌표 Y는 세로좌표
//여서 클릭한 자리에 뭔가 뜨게만들때 이 이벤트 객체를 이용할수 있다.
//이벤트객체는 키보드 이벤트를 쓸때 필요하다 어떤키가 눌렸는지 키보드 이벤트 객체에 정보
//가 포함돼있기때문.
const input = document.querySelector('input')
input.addEventListener('keydown', function (e) {   //키보드를누르면
    console.log(e.key)
    console.log(e.code)                        //콘솔에 'keydown'출력
})
// input.addEventListener('keyup', function () {    //키보드가 눌렸다가 떼지면
//     console.log('KEYUP')
// })
//화살표키나 쉬프트,capslock,tab,엔터,esc까지 모든키적용

//function 매개변수에 보통 e나 event나 evt를 넣는다.
//마우스이벤트 객체와 다른 키보드 이벤트 객체가 나옴 여기서 신경써야할건 두가지
//code 특성과 key특성.
//console.log(e.key) console.log(e.code) 쓰고 사이트input에 a를 입력하면
//key는 소문자 a고, code는 keyA 다.
//스페이스바를 누르면 key는 공백이고 code는 Space를 출력.
//왼쪽 shift를 누르면 key는 Shift, code는 ShiftLeft다
//오른쪽 shift를 누르면 key는 Shift, code는 ShiftRight 

//입력된게 a인지 c인지 알려면 key 를 쓰면되고,  키보드에서 
//그위치를 알아내려면 code를 사용하면된다
//키보드가 영어로 설정되어있어서 누르는키는 q인데 만약 한영전환을 하거나 언어설정을
//바꾸면 q가아닌 다른 언어알파벳이될텐데 code는 언제나 q키일것이다.
//그러니까 누군가 타이핑할때 키보드에서의 위치를 알아내야한다면 예를들어 게임을 만드는데
//캐릭터의 방향전환에 사용되는 화살표키나 w,a,s,d키를 알아내야한다면 code를 써야한다
//하지만 글자 w,a,s,d를 표시해야하고 그글자를 만들기 위해 무슨자판이 눌러지든 상관없고
//그게 키보드의 어디에있든 상관없다면 key를 쓸수있다.

//입력창안이 아니라 페이지의 어느곳에서든 키다운과 키업을 수신하려면
// window.addEventListener('keydown', function (e) {
//     console.log(e.code)
//     console.log(e.key)
// })
// ArrowUp     화살표키눌렀을때 콘솔출력
// 6ArrowRight
//이렇게 window를 쓰면된다. 게임을 만들고있다고 치고 보통 keydown으로 끝낸다


window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('up!');
            break;
        case 'ArrowDown':
            console.log('down!')
            break;
        default:
            console.log('ignored!')
            break;
    }
})
//if,this같은 조건문으로 할수도있다. (는데 this로는 어떻게쓸까?)

//정리해보면 매개변수를 추가해서 이벤트객체를 수집할수있다
// 매개변수에 e,evt,event를 사용한다
//굉장히 유용하다 keydown이나 keyup은 key를 사용한다 key는 'a'같이 글자 그대로를
//출력하고 code는 정해진 키보드위치정보를 알려준다. ㅂ을눌렀을때 key면 ㅂ이 나오고
//code면 q를 내놓는다. ㅂ은 q위치에 있기때문. (실제로해보면 key는 process를 출력
//한글은 아직지원이안되나.?.)














