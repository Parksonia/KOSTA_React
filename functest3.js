//상속의 경우는 function형으로 만들지 않는다. 
function Person(name,age){
    this.name = name;
    
    this.info=() =>{ // this를 안붙이면 그저 지역변수(메서드내 함수), this를 붙여야 instance변수가됨  
        return `이름:${name}, 나이:${age}`;
    }
}
let person = new Person('hong',20);
console.log(person.info());
console.log(person.name); // hong
console.log(person.age); //undefined;