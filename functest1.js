function User (name) { // 생성자 함수, 대문자로 시작한다. 반드시 new 연산자를 붙여 실행해야함
    this.name = name;
    this.sayHello=()=>{
        console.log(`Hello ${this.name}`);
    }
   // return this; 생략 하더라도 암묵적으로 this가 반환되는 것 
}
let user = new User('React');
user.sayHello();