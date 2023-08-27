//onClick    클릭하면 어떤효과가 있게함     ondblclick  더블클릭하면 어떤 효과가 있게함
const btn = document.querySelector('#btn1');
//console.dir(btn) 을보면 onClick같은 특성이 엄청많이 나오는데 다 쓸수있다.
btn.onclick = function () {           //버튼을 클릭하면  
    console.log('YOU CLICKED ME!')    //콘솔에 글자가 나온다
    console.log('I HOPE IT WORKED') //마우스로 클릭하면 함수실행
}
//이방법을 쓰면 여러개의 버튼에 적용하기 더쉽다 
//html에서 <button onclick > 이런식으로 인라인으로 적용할수도있는데 정말별로인방법 

document.querySelector('h1').onclick = function () {
    alert('you clicked the h1')
} //꼭 버튼만이 아니라 h1 등 다른요소에도 사용가능
//함수없인 안된다. 왜냐면 함수를 없애면 alert이 바로 실행되기때문.그래서 함수로 감싸줌


//onmouseenter 버튼에 커서를 올리면 어떤 효과가 있게함
function scream() {
    console.log('aaaaahhhhh');
    console.log('stop touching me!!')
}
btn.onmouseenter = scream; //버튼에 커서를 올리면 scream함수실행 


//addEventListener
const btn2 = document.querySelector('#btn2')
btn2.addEventListener('dblclick', function () {   // (이벤트이름,실행할함수)
    alert('Clicked !!')
}
)
//두번째인수자리에 위에쓴 함수인 scream을 적용해도된다
//'click'말고 MDN에 event reference 보면 사용가능한 이벤트들이 많다. 
//모든 이벤트들이 다적용되는건아니다. keypress는 버튼에서는 작동안됨

//addEventListener를 더 자주쓰는 이유는 이벤트를 여러개쓸수 있기때문.
const btn3 = document.querySelector('#btn3')

function twist() {
    console.log('twist!')
}
function shout() {
    console.log('shout!')
}

btn3.addEventListener('click', twist, { once: true }); //클릭하면 twist함수 한번실행
btn3.addEventListener('mouseover', shout)   //커서올릴때마다 shout함수 실행

//onclick의 경우 이벤트를 두개쓰면 마치 css처럼 뒤에이벤트만 적용된다
//함수로 묶으면된다고? 노. 적용하려는 이벤트 종류가 다르면 묶을수가 없다
//addEventListener를 쓰면 이벤트를 여러개써도 add가 되기때문에 모두적용된다
//{ once: true }쓰면 한번적용되고 더이상적용안함
//이벤트와 이벤트리스너가 많이있는 복잡한앱의경우 그 이벤트나 리스너를 잘관리하지않
//으면 다운되거나 성능이슈가 발생할수있다 removeEventListener로 지우면 되는데 지금은 다루지않을거임
//mouseover도안되고 mouse로 시작하는건다안됨 왜!
//해결함..!※★  콘솔을 켜놓고 마우스오버를 하면안됨 마우스오버후에 콘솔로 확인.


// MouseOver/Out : 지정된 요소(자신)와, 자식 요소가 있다면 해당 자식요소의 영역까지 포함됨. 커서를 올리면 어떤효과가있게함
// MouseEnter/Leave : 지정된 요소만 해당되며, 자식요소가 있다면 자식요소의 영역은 제외됨. 커서를 올리면 어떤효과가있게함
// mousedown / mouseup : 해당 요소에서 마우스가 눌러진 상태일 때 / 떼었을 때
// mousemove :  해당 요소에서 마우스가 움직일 때
//버블링 : 자식요소까지 영향을 준다는 말같다.
// contextmenu 마우스 우클릭을 했을 때@
