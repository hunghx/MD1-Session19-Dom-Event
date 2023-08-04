// Dom - Document Object Model 
// truy cập 1 phần tử của dom bằng js
// truy cập qua id 
let table =  document.getElementById("table");
console.log(table);

// truy câp thông qua class
let tds = document.getElementsByClassName("td");
console.log(tds);

// truy cập thông qua tên thẻ 
let trs = document.getElementsByTagName("tr");
console.log(trs);


// sử dụng bộ chọn css 
let td = document.querySelectorAll("td.td");
console.log(td);

// cách di chuyển vị trí phần tử 
// di chuyển về node cha
// let p = document.querySelector(".box p");
// console.log(p.nextElementSibling);

// let box = document.querySelector(".box h2").parentNode;
// console.log(box);


// console.log(document.querySelector("tr").parentNode.nextElementSibling.firstElementChild.lastElementChild);


let box = document.querySelector(".btn");
console.log(box);
box.addEventListener("contextmenu",function(){
    alert("Bạn vừa mousedown vào thẻ div.btn");
})


// keyup,keydown, keypress,scroll
window.addEventListener("scroll",function(e){
    console.log("bạn vừa ấn phím cuộn trang");
})
