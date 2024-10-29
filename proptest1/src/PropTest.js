import React,{Component} from 'react';


class PropTest extends Component {
    
    //생성자 형태로 부모의데이터 넘겨받음
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.age = this.props.age;
    }
    
    render() {
        
        // props : 부모,자식을 연결해주는 매개체
        //let name = this.props.name;
        //let age = this.props.age;

        return (
            <>
                {/* <h1>{name}</h1>
                <h1>{age}</h1> */}
                <h1>{this.name}</h1>
                <h1>{this.age}</h1>    
            </>
        );
    }
}

export default PropTest;