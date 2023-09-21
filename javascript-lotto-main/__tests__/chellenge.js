const form = document.querySelector('#form')
const input = document.querySelector('#input')
const ul = document.querySelector('ul')

let random = [];
let total = 0;
const newNum = input.value / 1000

while (random.length < 7) {
  const randomNum = Math.floor(Math.random() * 45) + 1

  if (!random.includes(randomNum)) {
    random.push(randomNum)
  }
}
let randomSort = random.sort((a, b) => a - b)
console.log(randomSort)


form.addEventListener('submit', function (e) {
  e.preventDefault();
  for (let i = 0; i < 100000; i += 1000) {
    if (input.value === i) {
      const li = document.createElement('li');
      li.innerText = `당첨번호는 ${lottonum()}} 입니다.~`;
      ul.append(li);
    }
  }
  //  const price = input.value
  // price
})

