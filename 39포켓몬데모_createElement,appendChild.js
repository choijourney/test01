//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {            //1~151 반복     
    const pokemon = document.createElement('div'); //디브만들고
    pokemon.classList.add('pokemon');            //디브에 클래스이름 'pokemon'추가
    const label = document.createElement('span'); //span만들고
    label.innerText = `#${i}`;         // span 텍스트 숫자i
    const newImg = document.createElement('img'); //이미지만들고
    newImg.src = `${baseURL}${i}.png`   //이미지소스 베이스소스1.png 부터151까지반복되게


    pokemon.appendChild(newImg);  //div에 img 추가
    pokemon.appendChild(label);   //div에 span 추가
    container.appendChild(pokemon) //section에 div 추가
}
