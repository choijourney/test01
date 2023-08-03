const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {   //버튼을 클릭하면 랜덤숫자 함수작동
    const r = Math.floor(Math.random() * 256)  //0.999=255.74 내림할거니까 *256
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const newColor = `rgb(${r},${g},${b})`     // ex)  rgb(200,123,34)

    document.body.style.backgroundColor = newColor;    //바디배경색을 랜덤 rgb로
    h1.innerText = newColor;                    //h1텍스트를 rgb몇인지 볼수있게 바꿈
    if (r + g + b < 250) {
        h1.style.color = 'white';
    }
    else { h1.style.color = 'black'; }

})

// 어두울때 텍스트 바꾸기 작동- 함수를 한괄호에 써서 if에서 rgb를 찾을수 있게했고
// 이전에 실패했는데 원인은 맨아래있다. Color라고 썼던것. 대소문자 구분하기



//"#"+Math.round(Math.random()*0xffffff).toString(16);
//js랜덤색 만들어주는 코드한줄 헥사 블로그에서 찾아옴. 어떤사람은 안먹힐때도 있다고 하던데..


// if (r+g+b<500) {
//     h1.style.Color = 'white';     실패원인 Color
// } else {
//     h1.style.Color = 'black'

// }