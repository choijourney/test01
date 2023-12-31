//핑퐁 점수 관리자 프로젝트
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#rebtn')

const span1 = document.querySelector('#play1')
const span2 = document.querySelector('#play2')
const winningScoreSelect = document.querySelector('#winningScoreSelect')

let winningScore = 5;
let total1 = 0;
let total2 = 0;
let isGameOver = false;

btn1.addEventListener('click', function (e) {
  if (!isGameOver) {                  //isGameover의! 반대니까 game중이면(true)
    total1 += 1;                    //total1값에 1을 더해라
    if (total1 === winningScore) {  //total1이 winningScore랑 같으면
      isGameOver = true;          //let변수isGameOver를 true로 바꾼다
      span1.classList.add('has-text-success');
      span2.classList.add('has-text-danger');
      btn1.disabled = true;
      btn2.disabled = true;
    }   //total1이 winningScore와 같은상태에서(true)인 상태에서 한번더클릭을하면 다시 if(!isGameOver) 
    span1.textContent = total1; //를 실행하는데 true에서 !반대니까 false가 돼서 식은 멈추게된다  
  }
})
btn2.addEventListener('click', function (e) {  //위와 같은내용인데 btn2버전이다
  if (!isGameOver) {
    total2 += 1;
    if (total2 === winningScore) {
      isGameOver = true;
      span2.classList.add('has-text-success'); // bulma클래스를추가해서 글자색이 초록으로 바뀐다 
      span1.classList.add('has-text-danger'); //이긴쪽은 초록색,진쪽은 빨간색으로 글자색이 바뀐다
      btn1.disabled = true;      //게임이끝나면 버튼이 비활성화된다
      btn2.disabled = true;
    }
    span2.textContent = total2;
  }  //textContent: innerText와 비슷. vscode에서적은대로 출력돼서 들여쓰기가 적용돼있다
})

winningScoreSelect.addEventListener('change', function () { //change이벤트 변경이있을때 함수실행
  winningScore = parseInt(this.value); //let변수winningScore를,셀렉트에입력한값을 숫자로바꾼값으로 업데이트
  reset(); //셀렉트 숫자를 바꿀때 0 to 0 으로 리셋되게함
})

btn3.addEventListener('click', reset)

function reset() { //0으로 리셋
  isGameOver = false;   //let변수 isGameOver를 false로 재설정한다 그럼 위에 btn1,2이벤트에서 
  total1 = 0;           //!반대인 true로 작동해 원하는대로 함수실행
  total2 = 0;           //total값도 0으로 만들어야한다
  span1.textContent = 0; //스팬을 0으로 만들어야한다
  span2.textContent = 0;
  span1.classList.remove('has-text-success', 'has-text-danger')   //리셋하면 클래스를 없애서
  span2.classList.remove('has-text-success', 'has-text-danger') //클래스효과가 없어져 글자색이 검정색이된다
  btn1.disabled = false; //버튼비활성화 꺼짐 
  btn2.disabled = false;
}


