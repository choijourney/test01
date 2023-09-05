//class   새객체를 만들어줌 costructor와 new 를 꼭 같이써야함
class Color {   //클래스 이름 첫글자는 보통 대문자로 쓴다
    constructor(r, g, b, name) {  //class엔 constructor를 꼭 써야한다 
        this.r = r;  //이값들이 색상 객체에 추가되고 this는 자동으로 새로운객체를 참조한다
        this.g = g;
        this.b = b;
        this.name = name;  //색상을 표현할 이름
        this.calcHsl() //생성자내에서 함수를 호출할수있다 이함수안에서만든 h,s,l값을 객체에 추가한다
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
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%,${l}%)`;
    }
    opposite() {         //보색으로 색전환
        const { h, s, l } = this;
        const newHue = (h + 180) % 360  //반대색을만들어야하니 h에180을더해주고 기존값이 180보다커서 예를들어 
        return `hsl(${newHue},${s}%,${l}%)`; //200+180을 해야되면 360으로 모듈로 해서 남은값 20으로 돌아간다
    }
    fullySaturated() {    //채도만 100%
        const { h, l } = this;

        return `hsl(${h},100%,${l}%)`
    }

    calcHsl() {              //rgb컬러를 hsl로 변환 (스택오버플로우에서 가져옴)     
        let { r, g, b } = this;    //this를 써서 Color객체를 참조한다  
        // Make r, g, and b fractions of 1  함수가쓰는방식이 업데이트되는거라 const안되고 let을 씀
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;      //위에서 계산한 h,s,l을 this객체에 넣는다
        this.s = s;
        this.l = l;
    }
}
const c1 = new Color(255, 67, 89, 'tomato');
const c2 = new Color(30, 30, 20, 'kaki')
//Color를 실행하면 constructor를 따로 호출하지않아도 자동으로 실행된다
//constructor에서는 일반적으로 this를 쓴다
c1.rgb()  //'rgb(255,67,89)'
c1.hex()  //'#ff4359'
c1.hsl()  //'hsl(353,100%,63.1%)'  hsl(353,100%,63%) 63.1의 소수점1을 없애니까 색상표가생긴다
c1.opposite() //'hsl(173,100%,63.1%)'  보색으로 색전환
c2.fullySaturated()  //'hsl(60,100%,9.8%)'  //소수점있으면 색상표는 안생기지만 사이트엔 적용됨 
document.body.style.backgroundColor = c1.rgba(0.5);

//hsl은 (180,30%,50%) 색조,채도,명도 세가지로 돼있고 색조는 0~360까지 각자다른색이있다
//채도와 명도는 %를 올릴수록 채도가높아지고 밝아진다
//반대색을 만들고싶으면 색조에 180을 더하면된다. 


//extends 와 super 키워드
// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     meow(){
//         return 'meowwww!!'
//     }
// }
// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     bark(){
//         return 'woofwhoof!!'
//     }
// }         



// extends를 써서 위코드를 짧게쓸수있다
class Pet {             //Cat과 Dog에서 겹치는 코드를 따로빼서 Pet에 쓰고
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {         //extends Pet을 쓰면 Pet의코드를 상속받는다. 객체,메서드 다 받음
    meow() {                    //Cat을 펼쳐보면 eat,meow메서드가 있다 
        return 'meowwww!!'
    }
}
class Dog extends Pet {      //Dog에 constructor가 없으면 Pet에 있는지 확인하고
    bark() {                 //Pet에서 constructor를 상속받는다
        return 'woofwhoof!!' //Dog를 펼쳐보면 eat,bark메서드가 있다
    }
    eat() {                 //
        return `${this.name} is eating now!`
        //   dang.eat() 콘솔입력 // 'dang is eating now!'
    }
}
const moo = new Cat('moo', 5)
const dang = new Dog('dang', 5)