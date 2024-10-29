import React,{Component} from 'react';
class MyComponent extends Component{

    constructor(props) {
        super(props);
        //state :상태변수 ,태그의 변수와(=데이터) 연동이 됨 
        // state 변수에 넣은 데이터는 다시 그리기가 가능= rendering 
        // this.person={name:,age:} 렌더링 되지 않는다.
        // 변경할 경우 변경 메서드를 꼭 사용해야함 .setState
        this.state = {
            name:'hong',
            age:20 
        }
    }
    //모든 function은 자기 자신의 this를 가지고 있음
    //화살표 함수로 사용하면 자신의 this가 존재 하지 않기 때문에 생성자의 this(모든 메서드에서 공유됨)를 가져옴  
    changeName=()=>{
        // 변경할 경우 변경 메서드를 꼭 사용해야함 .setState
        this.setState({name:'song'});
        
        //강제 변경 방법
        //this.state.name = 'song';
        //this.forceUpdate;
        
    }
    render() {
        return(
            <>
            <h1>Hello React</h1>
            <span>{this.state.name}</span><br/> 
            <span>{this.state.age}</span><br/> 
            <button onClick={this.changeName}>변경</button>
            </>
        )
    }
}

export default MyComponent;