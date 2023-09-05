//class   새객체를 만들어줌 costructor와 new 를 같이써야함
class Color {   //클래스 이름 첫글자는 보통 대문자로 쓴다
    constructor(r, g, b, name) {  //class엔 constructor를 꼭 써야한다 
        this.r = r;  //이값들이 색상 객체에 추가되고 this는 자동으로 새로운객체를 참조한다
        this.g = g;
        this.b = b;
        this.name = name;  //색상을 표현할 이름
    }
    innerRGB() {               //this.r this.g 이렇게쓰면 기니까 this를 따로 빼서 구조분해
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() {            //Color.prototype.rgba 전에는 이렇게 메서드를 만들었는데  그럴필요없이
        return `rgb(${this.innerRGB()})`  //일반함수를 class 함수안에 넣으면  메서드로 쓸수있다
    }
    rgba(a = 1.0) {                      //기본값 1. 불투명하게. 
        return `rgba(${this.innerRGB()},${a})`  //innerRGB()만입력했는데 this가 자동으로같이생김.!!
    }
    hex() {                       //Color 안에서 메서드 네개를 만듦
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}
const c1 = new Color(255, 67, 89, 'tomato');
//Color를 실행하면 constructor를 따로 호출하지않아도 자동으로 실행된다
//constructor에서는 일반적으로 this를 쓴다
c1.rgb()  //'rgb(255,67,89)'
c1.hex()  //'#ff4359'
document.body.style.backgroundColor = c1.rgba(0.5);
