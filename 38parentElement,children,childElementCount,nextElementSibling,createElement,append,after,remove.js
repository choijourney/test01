//계층이동  .parentElement   부모,조부모 상위에 엑세스

// const firstBold=document.querySelector('b')  b요소를 변수에저장
// firstBold             변수 콘솔입력
// <b>Silkie</b>     
// firstBold.parentElement      부모요소호출
// <p>​…​</p>
// firstBold.parentElement.parentElement    조부모호출
// <body>​…​</body>
// firstBold.parentElement.parentElement.parentElement    더상위계층도 호출가능
// <html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​

//요소를 제거,추가할때 많은 작업을 할수있다고함. 
//모든 요소는 직속부모가 하나이다. 조부모가 있을수 있지만 직속부모는 하나. 하지만
//여러 자식요소는 가능하다 
const para = firstBold.parentElement
//firstBold.parentElement 는 'p' 였다  para는 p
para.childElementCount      //p의 자식요소개수를 알려준다
8
para.children  //p의 자식요소들을 보여줌
HTMLCollection(8)[b, b, a, a, a, a, a, a]
//배열처럼 생겼지만 배열이아니어서 배열메서드는 없지만 인덱스는 있어서 반복가능하다.
para.children[0]
//<b> silkie </b>     silkie는 dom객체이다​ (dom은 document객체)
//만약 요소의 모든자식으로 작업을 하려면 자식요소[]목록에(배열같지만아닌) 반복을 걸면된다 


//nextSibling  / previousSibling    노드를보여줌 쓰지말기
//nextSibling은 다음 노드를 출력한다 노드는 요소랑은 다르다   
//바로뒤에 텍스트가있으면 텍스트를 출력하고 요소가 있음 요소를 출력.
//텍스트나 요소를 가리지않고 바로 다음 내용을 출력한다 공백이 있으면 공백을 출력. 화이트스페이스를
//#text 형태로 출력.

//nextElementSibling , PreviousElementSibling  요소에서 인접한 형제요소로 이동시킴
//const squareImg= document.querySelector('img')
squareImg.nextElementSibling
//<img class=​"square" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​en/​thumb/​e/​e0/​Male_Silkie.png/​460px-Male_Silkie.png" alt>​ 
//노드 아닌 요소를 출력. 

// <html>                 예를들어 이런식임
// <div id="a"></div> 
// nextSibling테스트
// <div id="b"></div>
// </html>

// var aDiv = document.getElementById("a");
// console.log(aDiv.nextSibling);    //nextSibling테스트

// console.log(aDiv.nextElementSilbing)   //<div id="b"></div>



//.createElement()  요소를 만들어낸다  
const newImg = document.createElement('img')
newImg.src = 'https://images.unsplash.com/photo-1582845512747-e42001c95638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
//img를 만들어서 소스를 입력했다.

// appendChild  자녀요소 추가하기       
document.body.appendChild(newImg) //body의마지막자식으로 .appendChild를써서 newImg추가
//<img src=​"https:​/​/​images.unsplash.com/​photo-1582845512747-e42001c95638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80">​

newImg.classList.add('square')
//크기를 맞춰주기위해 'square'클래스에 추가하면 설정해놓은'square' 크기로 맞춰진다 

const newh3 = document.createElement('h3')  //요소를 만들고 
newh3.innerText = 'I am new!'         //이미지소스나 텍스트내용을 변경한뒤 
'I am new!'
document.body.appendChild(newh3)   //'body'같은 위치에 추가해서 완성한다.
//<h3>​'I am new!'</h3>​            h3가 body의 마지막에 추가된다. 


//append  자녀요소 여러개추가     최근에나와서ie에선 지원안됨
const p = document.querySelector('p')  //p문단

p.append('i am new text yaaaayy!!!!', 'hello')
//마지막줄에 'i am new text yaaaayy!!!!' , 'hello' 추가  여러개 추가가능 
//이작업은 appendChild로는 할수없다 텍스트를 주면 에러난다. 
//이미지,요소도 추가가능   innerText같이 텍스트만 만드는것도 가능하다 아래구문을 보면 예가 있다. 

//prepend 는 요소의 첫번째 자녀로 추가. 그니까 맨앞에 추가된다   ie에서 작동안됨
const newB = document.createElement('b')
newB.append('Hi!')  //append로 hi글자를 만들고  
p.prepend(newB)   //위치를 p문단 앞에 추가한다

//insertAdjacentElement  형제요소 추가 
const h2 = document.createElement('h2')  //h2를 만들고

h2.append('are adorable chickens')   //텍스트를 만들고

const h1 = document.querySelector('h1')  //h1을찾아
h1.insertAdjacentElement('afterend', h2) //뒤에 형제 h2를 추가함  / 'beforeend'도 있고 앞에 추가. 
//<h2>​ard adorable chickens​</h2>​  


//after메서드   요소를 다른요소 다음에 추가    ie안됨
const h3 = document.createElement('h3')  //h3만들고
h3.innerText = 'I am h3'              //텍스트만들고
'I am h3'
h1.after(h3)                     //h1뒤에 h3추가
//.before  앞에추가


//colt test 58 Button Insanity
const container = document.querySelector('#container') //'container' ID를 가진 디브에
for (let i = 0; i < 100; i++) {
    const but = document.createElement('button')     //what 글자써있는 버튼 100개
    but.innerText = 'What?'
    container.appendChild(but)                      //div 맨마지막 자식요소로 추가
}


//removeChild  - ie에서작동하지만 작동방식이 조금귀찮다
//선택한 요소를 제거하는게아니라 부모요소를 찾아서 자식을 제거하기때문.
const firstLi = document.querySelector('li') //li를 지울거다 
const ul = firstLi.parentElement        //li의 부모요소를찾고
ul.removeChild(firstLi)        // removeChild 로 firstLi를 지운다

const b = document.querySelector('b') //b를 선택
b.parentElement.removeChild(b)  //b의 부모요소에서 자식요소b를제거 
//<b>​Hi!​</b>​               위예시와 같지만 짧은버전

//remove   선택한요소를 제거해서 편함   ie에서 작동안함 
const img = document.querySelector('img')  //img찾고 
img.remove()                               //제거


