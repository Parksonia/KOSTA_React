import React,{Component} from 'react';

// 넘겨받을 데이터가 많은 경우 객체로 받음
class PropTest2 extends Component {
    constructor(props) {
        super(props);
        this.per = props.per;
    }
    render() {
        return(
            <div>
               <h1>{this.per.name}</h1>     
               <h1>{this.per.age}</h1> 
               <h1>{this.per.nick}</h1> 
            </div>

        )
    }
}
export default PropTest2;