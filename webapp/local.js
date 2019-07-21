alert('local.js file referenced in script block in index.html head');

const xhr = new XMLHttpRequest();

console.log(xhr);

xhr.open('GET','xhr.txt',true);

xhr.send();
