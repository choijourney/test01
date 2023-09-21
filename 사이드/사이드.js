const textInput = document.getElementById('sample')
const html = document.querySelector('html');
const body = document.querySelector('body');
const section = document.querySelector('section');
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const ul = document.querySelector('ul')
const editor = SUNEDITOR.create((document.getElementById('sample') || 'sample'), {
  // All of the plugins are loaded in the "window.SUNEDITOR" object in dist/suneditor.min.js file
  // Insert options
  // Language global object (default: en)
  lang: SUNEDITOR_LANG['ko']
});


form.style.display = 'none';

html.addEventListener('click', function () {
  form.style.display = 'block';

})
console.log(textInput.value)
btn.addEventListener('click', function (e) {
  e.preventDefault();
  const li = document.createElement('li');
  // li.innerText = form.value;
  // console.log(form.value)
  // ul.append(li)
  // form.style.display = 'none';
  // e.stopPropagation();
})