//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const base = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    const di = document.createElement('div');  //div만들고
    const sp = document.createElement('span'); //span만들고
    const nImg = document.createElement('img'); //img만들고

    nImg.src = `${base}${i}.png`; //img소스만들고 /베이스소스1.png 1부터151까지반복되게
    sp.innerText = `#${i}`;      //span텍스트 숫자i
    di.append(nImg);             //div에 img추가
    di.append(sp);               //div에 span추가
    container.append(di)        //container에 div추가 
    di.classList.add('pokemon')   //클래스지정했다면 이줄쓰기
}
//innerText 카멜사이즈꼭쓰기