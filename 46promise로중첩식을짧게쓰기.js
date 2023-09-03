//promise   어떤연산,비동기 연산이 최종적으로 완료 혹은 성공했는지 실패했는지 알려주는 객체이다.
//최종값이나 작동여부에 대한 약속이다. ie에서 작동안됨    값이 3개이고  
//  pending은 기다리는상태 , fullfiled는(calt쌤강의에선 resolved) 성공 , rejacted는 실패 를 뜻한다.
// reject를 사용하지 않을때 생략할수있다. 리턴 값이 중요하지 않을때, 중괄호 또한 생략할수있다.

// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {  //success,failure는 콜백을 넣을거다
    const delay = Math.floor(Math.random() * 4500) + 500; //500~4999ms까지 난수
    setTimeout(() => {
        if (delay > 4000) {     //만약 delay가 4초보다 길면
            failure('Connection Timeout :(')  //세번째콜백함수를 실행 
        } else {                          //아닐경우 두번째 콜백함수실행 
            success(`Here is your fake data from ${url}`) //괄호는 인수
        }
    }, delay)  //0.5초~ 4.99초까지 난수
}
// THE PROMISE VERSION                //success,failure같은 콜백이 필요없고 url매개변수 하나만 필요하다
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1',    첫번째매개변수인 url,
//     function (response) {         response에 인수인 (Here is your fake data from ${url}) 들어감  
//         console.log("IT WORKED!!!!")  @@function(response)부터 아래@@까지 두번째매개변수인 success
//         console.log(response)     Here is your fake data from ${url} 출력
//         fakeRequestCallback('books.com/page2',      4미만 난수가 나와서 succeess가 나오면      
//             function (response) {                   한번더 fakeRequestCallback 콜백함수 실행
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',   success나오면 3번째실행
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {      4초과 난수 나오면 세번째매개변수 failure()실행
//                         console.log("ERROR (3rd req)!!!", err)  
//                     })       인수인(Connection Timeout :() 이 err자리에 들어감
//             },
//             function (err) {                  
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {            @@여기},닫는중괄호까지 두번째매개변수 success          
//         console.log("ERROR!!!", err)      //fucntion(err)부터 세번째매개변수 failure
//     })                                   




//then은 성공하면이라는뜻 fullfiled(resolved)와 같은뜻. catch는 실패하면이라는뜻 rejected와 같다.
// fakeRequestPromise('yelp.com/api/coffee/page1')    매개변수에 url을 넣어 promise를 작동시킨다
//     .then(() => {                           성공하면 (4초이하인 난수가나오면)
//         console.log("IT WORKED!!!!!! (page1)")     it worked 출력   
//         fakeRequestPromise('yelp.com/api/coffee/page2')  한후 한번더 실행
//             .then(() => {                             성공하면 itworked 2 출력
//                 console.log("IT WORKED!!!!!! (page2)") 
//                 fakeRequestPromise('yelp.com/api/coffee/page3') 
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {            rejected면 error 출력
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })




// THE CLEANEST OPTION WITH THEN/CATCH           promise는 이렇게 쓰면된다!!
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise('yelp.com/api/coffee/page1')  //url을 넣고 promise를 작동시킨다
    .then((data) => {                      //성공하면 콘솔로그를 출력시키고
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)   //data인수자리에 (`Here is your fake data from ${url}`) 들어감 
        return fakeRequestPromise('yelp.com/api/coffee/page2') // fakeRequestPromise(url)을 리턴한다
    })
    .then((data) => {                                //성공하면 콘솔로그를 출력시키고 
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3') //fakeRequestPromise을 리턴한다 
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {          //실패일경우 위에 then들을 무시하고 catch로와서  
        console.log("OH NO, A REQUEST FAILED!!!")  //콘솔로그출력을한다.
        console.log(err)    //err인수자리에 'Connection Timeout :(' 들어감
    })  //catch는 한번만 써도 된다 

//첫번째 then이 성공하면 두번째로, 두번째가 성공하면 세번째로 이어진다. 만약 첫번째부터 실패하면
//바로 맨아래 catch로가서 함수를 실행시킨다. 



//promise만들기
const fakeRequest = (url) => {        // ↓첫번째매개변수는 resolve자리 , 두번째매개변수는 reject자리
    return new Promise((resolve, reject) => {   //매개변수에 다른이름을 쓸수있지만 거의 resolve,reject씀
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('your fake data here');
            } reject('request error');
        }, 1000)
    })
}
//reject를 사용하지 않을때 생략할수있다. 리턴 값이 중요하지 않을때, 중괄호 또한 생략할수있다.