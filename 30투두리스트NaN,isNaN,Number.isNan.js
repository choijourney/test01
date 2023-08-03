let input = prompt('무엇을 하고싶으십니까?')        
const todos = ['달걀모으기', '달걀후라이하기'];
while (input !== '그만' && input !== '멈춰' ) {
    if (input === '리스트') {                   //인풋에 리스트를 입력하면 리스트 콘솔출력
        console.log('**********')              
        for (let i =0; i<todos.length; i++){     
            console.log(`${i}: ${todos[i]}`)   
        } 
        console.log('**********')
    }
        else if (input!=='리스트'&& input!=='새할일' &&input!=='삭제')
        {todos.push(input)             //인풋이 리스트,새할일,삭제가 아니면 todos에 추가
        }
    else if (input==='새할일'){           
        const newTodo = prompt('새 할일 어떤거요?');
     todos.push(newTodo);
     console.log(`'${newTodo}'가 리스트에 추가 되었습니다`)
    } else if (input==='삭제'){
        const index=parseInt(prompt('삭제하고싶은 리스트 숫자를 적어주세요'));
        if (!Number.isNaN(index)){     //if문은 ()괄호안이 true일때 조건문 실행  
        const deleted = todos.splice(index,1);         //숫자입력하면 todos에서 삭제
        console.log(`넵 '${deleted[0]}' 목록이 사라졌습니다 `);   
    } else {
        prompt('숫자를 써주세요')      
        console.log ('숫자를 써주세요')
    }
}
    input = prompt('무엇을 하고싶으십니까?')
}
console.log('안녕히 들어가십시오')
//따옴표 섞어쓰지말고 ''하나만 쓰기 
//인덱스가 꼭필요하니까 for루프 사용
//메서드는 항상 뒤에 괄호를쓴다  .log() .push()
// todos.splice(index,1); 삭제할거니까 splice를쓰고 사용자가 쓸 인덱스숫자와, 1은 삭제할숫자갯수.   
// 삭제팝업에 숫자가아닌 문자를 아무거나 쳐봤더니 0번목록이 삭제되었다 이유는 
// 문자는 0으로 디폴트 되어 인덱스 0이 되고 todos.splice(0,1)  0번목록을 지웠다

// Number.isNaN특성 Number.isNaN(111) false / Number.isNaN(NaN) true / NaN일때만 true인데
//Number.isNaN(index)는 인수자리에 숫자가 오니까 false  인데 여기에 ! 리버스해주면  true가됨
//if문은 괄호안이 true일때 조건문 실행   if (!Number.isNaN(index) = 만약 인덱스가 숫자일때 /가됨


// else if (input!=='리스트'&& input!=='새할일' &&input!=='삭제')
// {todos.push(input)    
// }  무엇을 하고싶으십니까? 에도 답을하면 todos에 저장되게하고싶었는데 리스트,새할일,
// 삭제도 todos에 같이 저장되길래 input!== 인풋과 리스트,새할일,삭제가 
// 같지않으면 todos.push 되게끔.   .push는 추가기능


// NaN
// NaN은 Not-A-Number(숫자가 아님)을 나타내는 전역 객체의 속성이다. Number.NaN의 값과 같다.
// 최신 브라우저에서 NaN은 설정 불가, 쓰기 불가한 속성이다.
// NaN은 다른 모든 값과 비교(==, !=, ===, !==)했을 때에도 같지 않고, 다른 NaN과도 같지 않다.
// 그래서 NaN을 판별할 때는 isNaN() 또는 Number.isNaN()을 사용하면 가장 분명하게 NaN을 판별할 수 있다.
// 오로지 NaN만이 자기자신과 비교했을 때 같지 않다.
// NaN === NaN; // false
// Number.NaN === NaN; // false
// isNaN(NaN); // true
// isNaN(Number.NaN); // true
//NaN인경우
// 숫자로서 읽을 수 없는 경우 ex) parseInt('blahblah'), Number(undefined)
// 결과가 허수인 수학 계산식 ex) Math.sqrt(-1)
// 피연산자가 NaN인 경우 ex) (7 ** NaN)
// 정의할 수 없는 계산식 ex) (0 * Infinity)
// 문자열을 포함하면서 덧셈이 아닌 계산식 ex) ("안녕" / 3)


// Number.NaN
// Number.NaN은 Not-A-Number(숫자가 아님)을 나타내며, NaN과 같다.

// NaN과 Number.NaN은 Not-A-Number를 나타낸다는 점에서 같다. 다만 NaN은 비교연산을 했을 때 
// 어떤 다른 NaN과도 같지 않다는 점을 기억하자.


//.isNaN  과  Number.isNaN   차이
//isNaN(value)과 Number.isNaN(value)은 value가 NaN인지 판별할 때 쓰인다. 

// isNaN('hello world'); // true
// Number.isNaN('hello world'); // false

// 'hello world'는 숫자가 아닌 문자열이다. 숫자가 아니므로 isNaN()에선 true를 리턴하는
// 것 같다. 그런데 isNaN()과 같은 기능을 할 것같은 Number.isNaN()에선 왜 false를 리턴하는걸까? 
// 두 메서드가 NaN인지 판별하는 방식이 서로 다르기 때문이다.

// isNaN()
// 인수 값이 NaN이거나, 값을 숫자로 변환했을 때 NaN이면 참(true)을 리턴한다.
//Number.isNaN()
// 인수 값이 NaN이어야만 참(true)을 리턴한다.

