
//colt test 37: Multiple Args Exercise
function isSnakeEyes(arg1, arg2) {
    if (arg1 === 1 && arg2 === 1) {
        console.log('Snake Eyes!')
    } else { console.log('Not Snake Eyes!') }
}
// 마지막 }중괄호 닫기 항상까먹음 주의!!!  

// function을 사용할때 console.log('hey there') 이 괄호안 내용은 캡쳐
// 하거나 재사용할수있는 출력값이 아님.
// toUpperCase나 indexOf같은 메서드는 변수내의 값을 캡처해서 출력한다


//colt test 38 Return Value Practice
// function multiply(num, numb) {
//     console.log(num * numb)
//     console.log(num * numb)
//     return (num * numb)
// }
// 문제에 return을 사용하라고 해서 return은 함수를 멈추니까 맨마지막에 썼다.
// ↑ 이렇게 안해도 됨 return쓰면 함수 멈춘다고했는데 내가 잘못이해한것인가 멈추지않는다
function multiply(num,numb){
    return num*numb
}

//colt test 40: Last Element Exercise
function LastElement(arr){
    if (arr.length===0){
        return null
    } else {
        return arr[arr.length-1]
    }
}
//arr중 마지막글자만 빼낼거니까 arr.length-1 해준값이 마지막 index이니까 대괄호에 써줌

// colt test 41: Capitalize Exercise
function capitalize(egg){
    return egg[0].toUpperCase()+egg.slice(1)
}
//.toUpperCase(0)을 넣으면 0부터 마지막글자까지 대문자로 바뀐다 첫글자만 바꾸고싶다면
//egg[0]에서 0번째글자를 꺼내서 첫글자만 바꿔주고 .slice로 나머지글자추가

//colt test 42 : Sum Array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
// sumArray([1,2,3]) //6 이렇게 배열의 총합계가 나오도록 식을 쓰는게 문제
//arr[i] => [i]의자리가 index자리이다. sumArray([2,2,2]) 했을때    sum + 
//arr[0],arr[1],arr[2]  이니까 2+2+2=8 이된다
//for of루프를 써봤는데 실패
//let total=0;위치를 for루프 다음줄에 넣었더니 원하는답이 아닌 답을줬다 for루프 전줄에
//넣었더니 원하는합계인 6이나왔다. sumArray([2,2,2])를 콘솔에 입력했는데 for루프 담줄에
//서는 2가나왔다. 변수 let total은 독립되게 for구문에서 빼서 변수를 주어야하니 그런거라
//고 추측. for구문에서 i쓸때 let 꼭쓰기!


// colt test 43 Days of the week 
function returnDay(day) {
    const days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }
    if (day > 7 || day < 1) {
        return null
    } return days[day]
}
    //returnDay(1) // "Monday" / returnDay(2) "Tuesday// returnday(3)을 입력하면
    //수요일이 나오게 .. 일요일까지만들고, 0이나 7일 초과는 null이 뜨게끔.
    //returnDay(7)을 입력하면 'Sunday'가 나온다. 그렇다면 returnDay()괄호안이 키로
    //되는건가. return할때 [day]를빼고 day만 입력했더니 ['monday,tuesday'...]배열이
    //나타났다. []대괄호니까 index같기도한데 :이걸쓰는거보니 키같기도하고 아직모르겠다
    // 객체리터럴을 다시 공부하고오니 보인다..! 확실하지않음 객체리터럴 특성이
    //days[1] 1이 키고 변수뒤괄호에 넣어주면 값으로 'Monday'를 내놓는다
    // 그런데 함수안에 있으니 바로실행되지않고 return에서 days[day] 이렇게 묶어주면
    //실행된다

    //↑는 너무 복잡한설명. 문제에 배열아니면 객체리터럴을 쓰라고 써있는데 숫자를 키로 쓰
    //려면 객체리터럴이 편하니까 객체리터럴을 써서 키값을 정함 else {return ?? } 무엇을
    //어떻게 리턴할것인지 잘생각해보기 'Monday'를 리턴하고싶은데 객체리터럴 특성상 
    //week[3] 이렇게 써야 값인 'Wednesday'가 나온다