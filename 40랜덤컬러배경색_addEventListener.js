//버튼을 누르면 배경색이 랜덤컬러로 바뀌게 만들기
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {   //버튼을 클릭할때마다 함수작동
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)  //rgb는 0~255까지있어서 0~255숫자를 임의로 생성해야함
    const b = Math.floor(Math.random() * 256)  //0.999=255.74 내림할거니까 *256
    const newColor = `rgb(${r},${g},${b})`     // ex)  rgb(200,123,34)

    document.body.style.backgroundColor = newColor;    //바디배경색을 랜덤 rgb로
    h1.innerText = newColor;                    //h1텍스트를 rgb몇인지 볼수있게 바꿈
    if (r + g + b < 250) {       //어두운색이 배경일때 글자를 하얀색으로 바꾸는코드    
        h1.style.color = 'white'; //블랙은 rgb(0,0,0) 어두울수록 rgb낮음. 
    }            // r,g,b값을 더했을때 150정도 보다 작으면 글자를 하얀색으로 바꾸게 코드를 쓰면됨
    else { h1.style.color = 'black'; }  //아닐경우 블랙

})


//색상을 임의로 생성할때는 js를 사용한다

// 이전에 실패했는데 원인은 if구문에 Color라고 썼던것. 대소문자 구분하기


//"#"+Math.round(Math.random()*0xffffff).toString(16);
//js랜덤색 만들어주는 코드한줄 헥사 블로그에서 찾아옴. 어떤사람은 안먹힐때도 있다고 하던데..
