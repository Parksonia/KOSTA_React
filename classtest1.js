class User{
    constructor(name) { // 생성자
        this.name = name;
    }
    sayHello(){ //메서드
        console.log(`HEllo! ${this.name}`); //반드시 ${this} 써줘야 함, `` 주의 
    }
}

let user = new User('hong');
user.sayHello();