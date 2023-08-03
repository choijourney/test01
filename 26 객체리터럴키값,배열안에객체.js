// shift+enter 콘솔에서 여러줄쓸수있다

//객체리터럴   숫자,불리언,배열 아무거나 키:값 의 형태로 {} 중괄호와 
//문자열이면 따옴표로 만들수있다
// 값을 호출하려면 ['키']  or  .키  두가지를 쓸수있다. ex) [Num] .Num  
//객체의 모든 키는 문자열로 반환
const kitch = {
    Num: 933993,
    isFunny: true,
    colors: ['red', 'orange']
}
kitch['Num']            //문자열 따옴표
933993
// 콘솔에서 데이터를 찾으려면 []대괄호와 ''"" 작은따옴표,큰따옴표 둘다사용가능하다
kitch.colors
    (2)['red', 'orange']
// 아니면 .colors 처럼 .을 이용할 수도 있다. 객체의 키는 숫자도 문자열로 바뀐다
// 기호도 키로 사용할수있는데 기호만 기호상태로 남는다 
//메서드와 똑같이 생겼지만 메서드는 아니다

const years = { 1999: 'good', 2020: 'bad' }  //숫자처럼 보이지만 문자열
undefined
years
{ 1999: 'good', 2020: 'bad' }
years['1999']       //객체의 키값은 문자열이니 'good'반환
'good'
years[1999]        //[1999]를 문자열로 변환하고 비교해서 'good'반환
'good'
const dubdub = { true: 'dat', null: 'eee' }
undefined
dubdub
{ true: 'dat', null: 'eee' }    //불리언true 와 null을 문자열로 변환
dubdub['true']                  //문자열 따옴표
'dat'
let birthyear = 1999
years[birthyear]              // 변수를 키로 쓸수있음
'good'
// 객체리터럴 []대괄호와 .점의 차이 => birthyear처럼 다른변수를 정하고
// 그변수를 years에 또 적용해서 키로 쓸수도 있다.  .점은 그런기능없음 
years['19' + '99']
'good'
// []괄호론 이런것도 가능하다.

//colt test 30 object access      restaurant변수에서 fullAddress변수를 새로만들기
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress =
    restaurant["address"] + ", " + restaurant["city"] + ", " + restaurant["state"] + " " + restaurant["zipcode"]

fullAddress
'37 Johnson Ave, Brooklyn, NY 11206'
restaurant
{ name: 'Ichiran Ramen', address: '37 Johnson Ave', city: 'Brooklyn', state: 'NY', zipcode: '11206' }

// 잊지못할 테스트;; 
const fruit = { name: 'apple', name2: 'banana', name3: 'kwii', name4: 'berry' }
const newf = fruit['name2'] + "," + fruit['name4'] + "," + fruit['name']
newf
'banana,berry,apple'
fruit['name'] + fruit['name3']
'applekwii'
// 여러키를 불러와서 정렬하고싶을때는 +를 쓰면됨 쉼표 넣고싶으면 ""사이에 "," 이렇게
// 하고 + 더해주면됨


//객체수정    .점을 이용하거나 []대괄호로 새로운 키를 추가할수있고 수정도 할수있다.
const midterms = { danielle: 96, thomas: 78 }
midterms.thomas = 79;
79
// 원래 78점이었는데 79로 수정가능 여기서 .thomas가 키key
midterms
{ danielle: 96, thomas: 79 }    //수정되서 저장
midterms['thomas'] = 'C+'
'C+'
midterms['danielle'] = 'A'
'A'
midterms.ezra = 'B+'
'B+'
midterms.['antonio'] = 'A-'   // 이렇게 []대괄호를 쓸때 .점을 쓰면 에러뜸 

midterms['antonio'] = 'A-'
'A-'
midterms
{ danielle: 'A', thomas: 'C+', ezra: 'B+', antonio: 'A-' }


// 배열안에 객체    배열과 객체 네스트
const comments = [
    { username: 'Tammy', text: 'lololol', votes: 9 },         //쉼표쓰기
    { username: 'FishBoi', text: 'glub glub', votes: 1999 }]
// 'glub glub'을 값으로 얻으려면 어떻게해야할까?
comments[1]['text']
'glub glub'
comments[1].text
'glub glub'
comments.text
undefined
comments[1][1]
undefined
// 인덱스로 [1]인 피시보이줄을 선택,['text']괄호 혹은 .text로 'glub glub'을 출력
// 그밖에 [1]없이 그냥 .text만 찾거나 [1][1]인덱스로만 찾는건 불가능

