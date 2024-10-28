function Clock({template}) {
    this.template = template;

    //함수안에 함수가 들어갈 수 없다.(함수안에 함수 정의x)
    // 변수에 함수를 담은 것 
    this.render=()=>{
        let date = new Date();
        let hour = date.getHours();
        if(hour<10) hour = '0'+hour;
        let mins = date.getMinutes();
        if(mins<10) mins = '0'+mins;
        let sec = date.getSeconds();
        if(sec<10) sec ='0'+sec;

        
        let output = this.template.replace('h',hour).replace('m',mins).replace('s',sec);
        console.log(output);
    }

    this.start=()=>{
        this.render();
        this.timer = setInterval(()=>this.render(),1000);
    }
    this.stop=()=>{
        clearInterval(this.timer);
    }
}
let clock = new Clock({template:'h:m:s'});
clock.start();
setTimeout(()=>clock.stop(),10000);