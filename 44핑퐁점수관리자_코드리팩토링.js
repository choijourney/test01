// 점수관리자 코드 리팩토링
const p1 = {  //btn1,span1,total1 등 player1과 관련된 정보들을 모아 따로 객체를 만들었다
    score: 0,
    button: document.querySelector('#btn1'),
    display: document.querySelector('#play1')
}
const p2 = {
    score: 0,
    button: document.querySelector('#btn2'),
    display: document.querySelector('#play2')
}

const btn3 = document.querySelector('#rebtn')  //리셋버튼
const winningScoreSelect = document.querySelector('#winningScoreSelect') //셀렉트
let winningScore = 5;  //일단5로설정했지만 밑에서 업데이트할거다
let isGameOver = false;

function updateScores(player, opponent) {  //괄호는 매개변수  밑에서 매개변수에 p1,p2를 적용시킬거다
    if (!isGameOver) {                  //isGameover의! 반대니까 game중이면(true)
        player.score += 1;             //player값에 1을 더해라

        if (player.score === winningScore) {  //player이 winningScore랑 같으면
            isGameOver = true;          //let변수isGameOver를 true로 바꾼다
            player.display.classList.add('has-text-success'); //플레이어 디스플레이에 글자색바꾸는 클래스
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true; //플레이어 버튼 비활성화
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }//player스코어가 winningScore와 같은상태에서(true)인 상태에서 한번더클릭을하면 다시 if(!isGameOver) 
}//를 실행하는데 true에서 !반대니까 false가 돼서 식은 멈추게된다  

p1.button.addEventListener('click', function () { //p1버튼을 클릭하면 updateScores함수 매개변수에
    updateScores(p1, p2)                       //(p1,p2)를 넣어 함수를 실행시킨다
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)      //(player,opponent) 
    //이번엔 (p2가 player, p1이 opponent) 가된다
})


winningScoreSelect.addEventListener('change', function () { //change이벤트 변경이있을때 함수실행
    winningScore = parseInt(this.value); //변수winningScore를,셀렉트에입력한값을 숫자로바꾼값으로 업데이트
    // reset(); //셀렉트 숫자를 바꾸면 0 to 0 으로 리셋되게함
})

btn3.addEventListener('click', reset)

function reset() {
    isGameOver = false;   //다시처음과같이 변수isGameOver를 false로 설정
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
//플레이어들이 많을수록 p.1.score; p.5.score; 이런식으로 계속나열해야하면 귀찮으니까
//for of 로 반복시켜 코드를 줄인다 배열에 추가만 하면된다 [p1,p2,p3..]



// 5점이 종료점수일때 4:4 듀스면  종료점수를 6으로 바꾸고싶음  (탁구는 2점차이가 나야 이기는게임이라고 들었다)
// if (parseInt(winningScoreSelect.value - 1) === player.score === opponent.score) {
//     parseInt(winningScoreSelect.value = +1)
// }                 이코드가 실행이안된다 
