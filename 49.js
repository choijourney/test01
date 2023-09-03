//Axios로 헤더 세팅하기
//http://icanhazdadjoke.com 아재개그사이트는 header를 보내줘야 json으로 반환한다 
//사이트를 보면 headers에 application/json 을 써서 요청하라고 돼있다 (API사이트마다 다르니 자세히 읽어봐야함)
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }  //headers객채를 변수에 저장
    const res = await axios.get('http://icanhazdadjoke.com/', config) //axios 인수에 url과 헤더를써서
    console.log(res.data.joke)  //요청하면 아재개그가 적혀있는 data객체를 준다
    //axios를 썼기땜에 json을 파싱해서 js객체로 준다
}                       //객체에서 joke만 빼서 출력
getDadJoke();

//버튼누르면 아재개그가 리스트에 생김 (feat.아재개그API사이트)
const ul = document.querySelector('#jokes')
const btn = document.querySelector('button')

const addNewJoke = async () => {      //아래 getDadJoke2 함수를 가져다쓸건데 비동기함수라서 
    const jokeText = await getDadJoke2();   //이 함수도 비동기함수로 만듦
    const li = document.createElement('li')  //이함수를 작동시키면 li가 만들어지고
    li.append(jokeText)                     //li에 joke텍스트가 추가되고
    ul.append(li)                      //ul에 li가 추가됨  /리스트에 아재개그추가됨
}

const getDadJoke2 = async () => {        //이함수는 joke 텍스트를 만들어내기위해 작동
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('http://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return 'NO JOKES AVAILABLE!'
    }
}

btn.addEventListener('click', addNewJoke) //이벤트리스너는 함수를 먼저 작성한후 만들어야해서 맨밑에씀
//API는 속도제한이있다 요청할때 너무 반복적으로 호출하면 ip를 차단시킬수있다


// tv프로그램 검색 앱 만들기
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    try {
        e.preventDefault();
        const allimg = document.querySelectorAll('img'); //allimg변수를 밖으로 뺐더니 작동안됨 
        for (let allimgs of allimg) {              //같은함수안에서 forof와 같이썼더니 작동
            allimgs.src = '';     //제출누르면 일단 빈src이 됐다가  아래 함수들을 거치면서 이미지 추가
        }
        const inputvalue = form.elements.query.value  //폼의 인풋값
        const config = { params: { q: inputvalue } } //params(매개변수)특성을 만들어 q객체를 만들었다  
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
        //`https://api.tvmaze.com/search/shows?q=${inputvalue}` 
        makeImages(res.data)
        form.elements.query.value = ''; //입력,출력이끝나면 빈문자열로
    } catch (e) { console.log('error!', e) }
}

)
const makeImages = (showimg) => {
    for (let showimgs of showimg) {
        if (showimgs.show.image) {    //show는 객체 키 이름중하나
            const img = document.createElement('img')
            img.src = showimgs.show.image.medium
            document.body.append(img)
        }
    }//if로 이미지가 있으면 이미지를 만들고 없으면 무시하게 만듦

}

//console.dir(form) 을입력하면 객체가 나온다 객체에서 elements를 이용해서 인풋값을 알아낼수있다.
//elements를 클릭하면 query가 있고(input name)  이 name을 이용해서 value 값을 알아낸다.
//console.log(res) 까지 쓴후 입력창에 cat을 입력하면 cat과 관련된 tv쇼들의 특성이 콘솔에 나온다.
//image: {medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/440/1100160.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/440/1100160.jpg'}
//그중 필요한 이미지도 있다 미디움, 오리지널 크기가 있는데 미디움으로 출력되게 할거다.
//const img = document.createElement('img') img를 만들고
//img.src = res.data[0].show.image.medium   img소스를 만든다  인덱스로 data객체중 첫번째 tv쇼선택


// const config = { params: { q: inputvalue }
// const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
//이렇게 쓰는게 이해가 잘안되는데 외우기

//비동기함수는 try,catch를 써서 오류잡기