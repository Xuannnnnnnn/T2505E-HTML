// null number string boolean array function
// n + s = s;
var x = 10;
x = "t2505e";
var a = 10;
var b = "20";
var c = 'ammmd';
console.log(a+a);//20
console.log(a+b);//1020

if(a > 5){
    console.log("A");
}else if(a>=10){
    console.log("B");
}else{
    console.log("C");
}

for(var i = 0;i<10;i++){
    console.log("i="+i);
}

var arr = [];// day la mang co ten arr
arr.push(9);//0
arr.push(12);//1
arr.push("aqw");
arr.push(true);
arr.push([1,2,3,4,5]);

for(var i=0;i < arr.length;i++){
    console.log(arr[i]);
}
//duyet mang
arr.map(e=>{
    console.log(e);
});

arr.map((e,i)=>{
    console.log(e);
})
//sap xep mang
arr.sort();
//tim kiem
arr.includes(9);//true/false

var pi = "3.14";
pi = parseFloat(pi);//chuyen chuoi thanh so thuc

function tinh_tong(a,b){
    var c = a+b;
    return c;
}

const phep_tru = function(a,b){
    var c = a - b;
    return c;
}

phep_tru(5,2);

const phep_nhan = (a,b)=>{
    var c = a * b;
    console.log(c);
}
phep_nhan(7,2);

//1 so ham hay dung
// alert("chua du tuoi");// canh bao return void
// confirm("da du tuoi");// return boolean

// if(confirm("cam doan du tuoi?")){
//     var s = prompt("Nhap ten:");
//     alert("Xin chao "+s);
// }else{
//     alert("Vui long thoat")
// }

var r = Math.random();//return number -> double/float 0->1
r = r*100;//12.3
r = parseInt(r);//12
//






































