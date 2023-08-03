const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {   //버튼을 클릭하면 랜덤숫자 함수작동
    const newColor = makeRandColor()
    document.body.style.backgroundColor = newColor;    //바디배경색을 랜덤 rgb로
    h1.innerText = newColor;                    //h1텍스트를 rgb몇인지 볼수있게 바꿈
    // if (r + g + b < 300) {
    //     h1.style.color = 'white';
    // } else {                           
    //     h1.style.color = 'black'          
    const makeRandColor = () => {
        const r = Math.floor(Math.random() * 256)  //0.999=255.74 내림할거니까 *256
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        return `rgb(${r},${g},${b})`     // ex)  rgb(200,123,34)
    }
})
        //함수가 길면 따로 빼서 정리하는게 좋은데
 //위에 if처럼 안먹힐수도있다 왜냐면 r,g,b가 밑에 따로 나가있어서 접근이안된다.내생각..
   //그렇다고 makeRandcolor함수에 if를 넣으면 오류뜬다.. 
   
   //일단 여기까지 랜덤색상으로 바탕색을 바꾸고 h1글씨에 rgb가 뜨도록 했다.
   //rgb가 어두울경우 텍스트를 화이트로 바꾸는 작업을 하고싶었는데 if자리못찾아서 실패

//보통 한번에 많은 스타일을 작업할때는 css스타일 시트에 클래스를 만들고 클래스에 적용한다
//하지만 색상을 임의로 생성할때는 그런식으로 하지않는다 js를 사용한다

//rgb는 0에서 255까지 있어서 0~255사이의 숫자를 임의로 생성해야함


//가끔 어두운색깔이 랜덤컬러로 나올수있다. 그럴때 텍스트를 하얀색으로 바꾸는코드를쓴다.
//블랙은 rgb(0,0,0) 이다. 어두우면 rgb가 낮다. 그래서 3개 숫자를 합했을때 50이나 100
//보다 작으면 텍스트를 하얀색으로 바꾸는 코드를 쓰면된다. 아닐경우 블랙.
// if (r+g+b<100){
//      h1.style.color='white'
// } else {h1.style.color='black'
// } 근데 얘를 어따가 집어넣어야하냐고..!  랜덤컬러2시트에 성공버전


// Math.floor( 45.95); //  45   math.floor특성!★
// Math.floor( 45.05); //  45   주어진 수 이하의 가장 큰 정수.
// Math.floor(-45.05); // -46   반내림이아닌 올내림
// Math.floor(-45.95); // -46

// Math.round( 20.49); //  20   math.round특성!★
// Math.round( 20.5 ); //  21   반올림한값과 가장 가까운 정수
// Math.round(-20.5 ); // -20
// Math.round(-20.51); // -21