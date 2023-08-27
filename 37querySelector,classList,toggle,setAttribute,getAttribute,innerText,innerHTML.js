//querySelector() Dom에 최근에 추가된 메서드. 인수에 Id, 클래스이름, 요소타입, 속성,
//css스타일(예를들어'#red')까지  원하는  선택자를 이용해서 선택할수있다. 일치하는 첫번째 값을 반환.
document.querySelector('p')   //를 콘솔입력해보면 첫번째 p 하나만 출력함.
document.querySelector('#banner')  //아이디를 넣어줄때는 #을앞에붙임
document.querySelector('.square')  //클래스는 .을앞에붙임 
document.querySelector('img') //첫번째 이미지만 출력하는데 
document.querySelector('img:nth-of-type(2)')  //nth-of-type을 써서
//두번째 이미지도 찾을수있다.
document.querySelector('a[title="Java"]')  //요소,속성과 속성이름으로 찾음
// <a href=​"/​wiki/​Java" title=​"Java">​Java​</a>​
//앵커태그안에 title을 쓰고 링크에 커서를 가져가면 title이름이 떠서 링크에대한설명을 볼수있다.


//querySelectorAll도 같은 역할인데 모든요소반환 
document.querySelectorAll('p')
NodeList(2)[p, p]    // p를 넣었더니 p요소 모두반환
//반환값을보면 객체배열같이 보이지만 아니다.  element객체이다. 
// html처럼 보이지만 html문자열을 이용해 만든 js객체이다.
document.querySelectorAll('p a')  //p문단 안에있는 a앵커. 인덱스에 커서 올려보면
// 해당 요소 색깔이 호버되면서 보여줌    / ↓처럼 반복처리도 할수있음

const links = document.querySelectorAll('p a'); //p문단안의 a앵커 
for (let link of links) {
    console.log(link.href)      //콘솔보면 선택된 모든 앵커 태그 출처가 출력
}
//querySelectorAll 많은요소니까 for of로 반복해야함


//css인접선택자 +   / +기호를 사용하며 A+B A와B가 같은 층에있을때 A바로 뒤에 B를 한개만 선택
//h1+h2{color:red}라면 h2만 빨강으로변경  h1뒤에나오는 h2를 모두 빨강으로 바꿔주는 ~ 인접형제선택도있음.
//querySelectorAll('p+a') 이런식으로도 사용가능


//innerText  요소안에있는 텍스트를 골라 보여줌
const h1 = document.querySelector('h1')
console.dir(h1)
// ▶h1      //객체가 나오는데  클릭해보면 특성들이 쭉나옴 이중에 innerText도있음
document.querySelector('p').innerText
//  'The Silkie (sometimes spelled Silky) is a breed of chicken named for its atypically fluffy plumage,
//   which is said to feel like silk and satin...    p문단 텍스트 전부가 나옴.
//이외에 객체의 모든 특성과 값도 검색할수 있고 저장할수도있다.
//예를들어 person.name='rachel' 이렇게 저장할수있다
document.querySelector('p').innerText = 'lololol'
'lololol'   //해당p를 가져다가 그안에 모든내용을 제거하고 lololol로바꿈
//js를 이용해서 첫문단의 텍스트를 바꿨다.


//textContent  - innerText와 유사
document.querySelector('p').textContent
//p문단 텍스트가 전부나오는것은 innerText와 똑같으나 vscode에서 들여쓰기한 그대로 출력되서 
//줄바꿈이 이상하다.  차이점은 textcontent는 모든내용이 나오고 innertext는 숨겨진내용은
//나오지않는다. 예를들어 어떤 span을 display-none으로 바꾸면 innertext와 사이트에서
//안보이는데 개발자도구와 textcontent에선 보인다. 
//개발자도구에 Elements 에서 바꿀 요소를 클릭하고 아래 styles창에 element.style에 display:none;  

const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.innerText = 'I am a link!!!'
}  // 모든앵커태그가 'i am a link'로 바뀜


//innerHTML 
document.querySelector('h1').innerText = '<i>change</i>'
    - "<i>change</i>"
//이탤릭체로 만드는 요소인 i 요소를 입력하면  <i>가 텍스트로 출력된다.
//innerText는 텍스트를 바꾸는거라서 i를 인식하지못하고 이렇게됨.
document.querySelector('h1').innerHTML = '<i>change</i>'
//이럴때 innerHTML을 쓰면 i를 태그요소로 보고 이탤릭체로 바꿔줌
//또, 콘솔에 document.querySelector('p').innerHTML을 쓰면 요소,텍스트를 포함한
//모든 내용이 나온다. html 코드가 나오는거다.
document.querySelector('h1').innerHTML += '<sup>Flash</sup>' //이부분이 추가됐다 sup-윗첨자
//=는 안에있는 모든걸 덮어쓰고 +=는 추가한다   

//태그 <p></p> 열기닫기를 태그라고부름   //요소 <p>내용들</p>  는내용들까지포함한게요소


//attribute 속성   img의 src, a의 href 같은게 속성인데 id나 class도 속성으로 간주됨
document.querySelector('#banner').id = 'whoops'
//원래 id가 banner였는데 whoops로 바꿨더니 css에서 설정한 width=100%가 'whoops'한텐
//적용되지 않으니까 너비가 부모해당하는 body크기로 맞춰져 사진크기가 커졌다.
document.querySelector('#whoops').id = 'banner'
'banner'    //다시 원상태로 
document.querySelector('a').href     //다른속성들도 볼수있다.
'file:///C:/wiki/List_of_chicken_breeds'
document.querySelector('a').title
'List of chicken breeds'             // 속성에 엑세스하는 다른방법이 있는데

//getAttribute 라는 메서드를 이용하는것이다
const firstLink = document.querySelector('a')   // 앵커태그를 firstlink로 저장
firstLink.href                     //.href를 쓰면 js 객체에서 가져옴 앞에 file이붙음
'file:///C:/wiki/List_of_chicken_breeds'
firstLink.getAttribute('href')     //html자체에서 직접가져옴 <a href="이사이에있는내용">을가져옴 
'/wiki/List_of_chicken_breeds'     //두개의답이 같은내용이긴한데 차이가있다. 


//setAttribute를 사용해 속성내용을 바꿀수있음
document.querySelectorAll('input')[1]  //인덱스이용 이방법은 뒤나 중간에 중첩된 다른입력창이 
//<input type=​"text">​                 있을수도 있어서 별로인방법이라고.잘안씀
document.querySelector('input[type="text"]')  //css속성선택자 
// <input type=​"text">​          실키치킨 사이트에 텍스트입력창은 한개라 왼쪽답이 나온다
const input = document.querySelector('input[type="text"]')  //const 저장하고

input.type
'text'
input.type = 'password'
'password'
input.type = 'color' //text가 비밀번호창,컬러선택기로 바뀐다.
input.setAttribute('type', 'text')   //setAttribute를 이용해 text로 다시바꿈
input.type
'text'
firstLink.setAttribute('href', 'http://www.google.com')

//setAttribute를 많이쓰고 .type= 으로 직접엑세스해도된다.
//대부분은 위방법들 값이 동일한데 가끔 아닐때도 있다 정신건강을위해 안알려준다고..


//colt test 54 Manipulating Attributes 
const imgg = document.querySelector('img')
imgg.alt = 'chicken'
imgg.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg')



//js로 스타일변경하기 
const h2 = document.querySelector('h2')
h2.style       //콘솔에 입력하면 css특성, 객체들이 쭉나온다 색상이나 글꼴크기등인데
//모두 카멜케이스다 css에선 -대시기호를 쓰는데 js에선 안씀 그런데 객체들이 아무런 값이
//없는 빈문자열이다. css에서 h2 color를 지정해주고 색이 잘바뀌고 바로 특성을 보아도 
//style객체는 빈문자열이다. html에 인라인으로 스타일 지정하는건 좋지않은방법인데 
//인라인으로 컬러를 지정하면 특성에 색깔이 나온다. h2.style 의 수많은 객체들은
//따로 인라인으로 설정하지않는한 빈문자열로 나온다. 하지만 이 style 객체를 이용해서
//값을 변경하는 방법은 가능
h2.style.color = 'green'
'green'
h2.style.fontSize = '3em'
'3em'
h2.style.border = '2px solid pink'
'2px solid pink'
//콘솔elements에 바뀐값을 보면 js를 사용해 인라인스타일로 썼단게 보인다.
//h2 style="color:green;" 이런식으로. 보통은 js인라인도 선호하지않는다.
// css클래스를 정의한 후 그 클래스를 요소에 추가하거나 제거하는게 좋은방법이다.

//마크업은 디자이너가 작업한 디자인을 웹에 띄울 수 있도록 HTML 문서로 작성해주는 역할을 한다.
//마크업 개발자가 마크업 작업을 완료하면 디자이너의 작업물이 웹에 띄울 수 있는 틀의 형태로 구조화된다. 
//HTML은 Hyper Text Markup Language으로 여기서 M은 마크업이다.따라서 HTML 작업을 마크업 작업이라고도 한다.

const allLink = document.querySelectorAll('a');  //앵커태그모두 선택
for (let link of allLink) {               //for of로 배열객체를 일반요소로 바꿈
    link.style.color = 'rgb(0,108,134)'
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}
//특성 여러개를 바꿀땐 특성을 별도의 줄에 작성해야해서 귀찮긴한데 작동은됨
//모두 인라인으로 작업했고 개발자도구elements에  인라인 스타일이 잔뜩생긴건데 
//마크업안의 요소에 생긴거라 좋지않다 다른문제는 모든스타일객체가''빈문자열로 나와서 스타일을
// 인라인으로 쓰지않는한 스타일을 알수가없다. css스타일시트를 봐야알수있다.
// 이때, 모든스타일이 다 적용되면 계산된 스타일을 가져오는 방법이있다.
//js의 관점에선 단순히 스타일시트를 찾아보고 해당스타일을 복사해오는게 아니다.
//왜냐면 여러스타일시트에서 다양한 스타일이 충돌할수있고 우선순위가 있기때문이다.
//결국에는 특정한 스타일이 적용된 후에 몇번이고 반복해서 덮어쓰이게 된다.
//이런경우 실제 스타일을 알아내려면 모든항목이 다 로드되고 브라우저에 의해 
//계산될때까지 기다려야하는데 window객체에 특수한 메서드를 사용해서 가능하다

window.getComputedStyle(h1)[0]  // 이미 저위에 const h1=querySelector('h1) 저장한변수가있어서 
// 변수이름인 h1을 괄호안에쓰고.
//해당h1에대한 계산된 스타일로 구성된 엄청 긴 객체가 나옴 사실은 객체처럼 보이지만
//객체가 아니라 cssStyleDeclaration이다. 순서도 있어서 [0]으로 첫번째 특성인
//animation-delay에 엑세스할수있다. 
window.getComputedStyle(h1).color
window.getComputedStyle(h1).fontSize
'32px'
window.getComputedStyle(h1).fontFamily
'"Malgun Gothic"'
window.getComputedStyle(h1).marginLeft
'0px'
window.getComputedStyle(h1).margin
'21.44px 0px'
//모든특성을 .특성  으로 찾을수있다. 그리자주쓰이진않지만 어떤항목의 현재 글꼴크기를 
//알아내서 10px정도 늘리는경우가 있을수있다.그런데 '32px'은 문자열이라 parseInt를 해서 10을 더해야하고
//다시 px인 문자열을 붙여서 변경을 해야하는데 굉장히 귀찮다. 그래서 getComputedStyle은 찾을때만 주로 쓴다 

//colt test 55 Magical Forest Circle
const con = document.querySelector('#container')
con.style.textAlign = 'center'
const im = document.querySelector('img')
im.style.width = '150px'
im.style.borderRadius = '50%'
//'#container'따옴표안에넣기   .textAlignment아닌 textAlign  


//colt test 56 Rainbow Text
const sp = document.querySelectorAll('span');
for (let i = 0; i < sp.length; i++) {
    sp[i].style.color = colors[i];
}
//span인 r a i n b o w 를 각각 빨주노초파남보로 만들기
//for루프를 써서 sp[i]인덱스와 colors[i]인덱스를 같게 만들고 i++ 하면
//sp에 .style.color 하면 빨주노초파남보 대입.


//classList
//css로 스타일을 뭐든 나타낼수 있지만 js로 클래스를 적용해야하는 경우가 흔하다
//특히 뭔가 클릭하는 이벤트에 그렇다.
const h2 = document.querySelector('h2')  //'h2'요소를 찾아 변수에저장
h2.getAttribute('class')    //h2는 변수 
null
h2.setAttribute('class', 'purple')
//h2.getattribute로 class를 조사해보니 null, 없다고출력한다
//그럼 h2.setattribute를 써서 class 이름을 'purple'로 정해준다
//h2에 클래스이름이 생기고 css에서 클래스'purple'을 보라색으로 설정을 했기땜에 보라색으로바뀜
h2.setAttribute('class', 'border')
//이번엔 class이름을 border로 바꿨더니 css에서 작업해놓은 테두리가 생겼다.
//테두리는 생겼지만 'purple'작업은 사라졌다.

let currentClasses = h2.getAttribute('class')
currentClasses
'border'
h2.setAttribute('class', `${currentClasses} purple`)
//귀찮지만 class를 두개이상 설정하는 방법이 있다  setattribute로 클래스를 설정하는데
//문자열 템플릿 리터럴 사용하고,  css에서 한개 이상의 클래스를 
//지정하려면 공백으로 분리해야 하니까  <class= first last> 이런식.
//공백 한칸 두고 purple 쓰면됨  
h2.setAttribute('class', `border purple`)  //${currentClasses}를 사용하지않고 `border purple`써도됨

//더편한방법인 classList가 있다
//요소의 클래스를 검색하고  변경도 하기위해 호출하는 객체다.
const h2 = document.querySelector('h2')  //변수h2에저장
h2.classList
h2.classList.add('purple') //.만입력해서보면 .add같이 classList에 내장된 메서드들이있다
//purple이 클래스이름에 추가되어 h2색깔이 퍼플로 바뀜
h2.classList.add('border')
//.add를 사용해 클래스이름을 여러개 추가할수있다 
h2.classList.remove('border')   //삭제도가능 
//classList엔 contains라는 메서드가있어서
h2.classList.contains('border')  // 이 classList에 border가 포함되나요? 
    - false                 //아니요


//토글 
h2.classList.toggle('purple')
false
//퍼플색이 적용돼있던 purple클래스는 토글시키면 반대로 퍼플이 꺼진다. false와 함께..
h2.classList.toggle('purple')
true
//다시 호출하면 퍼플을 추가했다가 다시 입력하면 제거했다가 반복한다 
//토글 메서드는 특히 많은 클래스가 있고 참 유용하다 

//colt test 57 classList practice
const lis = document.querySelectorAll('li')
for (let l of lis) {
    l.classList.toggle('highlight')
}
//querySelectorAll이면 요소가많으니까 for of로 반복시키고, 'highlight'클래스를 toggle시켜
//반전시킨다. 그럼 하늘색리스트와 보라색리스트 색이 뒤바뀐다
