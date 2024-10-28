class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
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

    start() {
        this.render();
        this.timer = setInterval(()=>this.render(),1000);
    }
    stop() {
        clearInterval(this.timer);
    }

}

let clock = new Clock({template:'h:m:s'});
clock.start();
setTimeout(()=>clock.stop(),10000);