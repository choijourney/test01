//describe로 테스트하기

//validation.js
module.exports = {
  isEmail: (value) => {
    const email = value || "";
    const [localPart, domain, ...etc] = email.split("@");

    if (!localPart || !domain || etc.length) {
      return false;
    } else if (email.includes(" ")) {
      return false;
    } else if (email[0] === "-") {
      return false;
    } else if (!/^[a-z0-9+_-]+$/gi.test(localPart)) {
      return false;
    } else if (!/^[a-z0-9.-]+$/gi.test(domain)) {
      return false;
    }
    return true;
  },
};


//validation.spec.js
const { isEmail } = require('./validation');

test('입력한이메일주소에는 @가 하나만 있어야 이메일 형식이다.', () => {
  expect(isEmail("my-email@domain.com")).toEqual(true);
  expect(isEmail("my-email@@@@@@@domain.com")).toEqual(false);
  expect(isEmail("my-emaildomain.com")).toEqual(false);
});
test('입력한 이메일 주소에 공백이 존재하면 이메일 형식이 아니다', () => {
  expect(isEmail("my-email@domain.com")).toEqual(true);
  expect(isEmail("my email@domain.com")).toEqual(false);

});
test('입력한이메일주소 맨 앞에 하이픈이 있으면 이메일형식이 아니다.', () => {
  expect(isEmail("my-email@domain.com")).toEqual(true);
  expect(isEmail("-my-email@@@@@@@domain.com")).toEqual(false);

});
test('입력한 이메일 주소중 로컬 파트 에는 영문 대소문자와 숫자, 특수문자는 덧셈기호 하이픈 언더바 3개외에 다른값이 존재하면 이메일 형식이 아니다.', () => {
  expect(isEmail("my-email99+-_@domain.com")).toEqual(true);
  expect(isEmail("my!!!mail@domain.com")).toEqual(false);
  expect(isEmail("이메일@domain.com")).toEqual(false);
});