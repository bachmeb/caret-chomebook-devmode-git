alert('local.js file referenced in script block in index.html head');
console.log("local.js file referenced in script block in index.html head");

// Basic XHR call
const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('GET','xhr.txt',true);
xhr.send();

// XHR call with on ready state change function
// https://www.w3schools.com/xml/xml_http.asp
var xhttp = new XMLHttpRequest();
console.log("new XMLHttpRequest();");
console.log(xhttp);
xhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200)
      document.getElementById("demo").innerHTML = xhttp.responseText;
};
console.log(xhttp);
xhttp.open("GET", "filename", true);
console.log(xhttp);
xhttp.send();
console.log(xhttp);


