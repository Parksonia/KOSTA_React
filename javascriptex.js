let obj ={age:10,name:"hong"}; // 객체타입
console.log(obj);
let objstr = JSON.stringify(obj); //문자타입
console.log(objstr);
console.log(obj.age);  // 10
console.log(objstr.age); //undefined
let reobj = JSON.parse(objstr); // 문자->다시 객체로 변환 해야
console.log(reobj.age); //10 