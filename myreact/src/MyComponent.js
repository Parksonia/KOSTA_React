import React,{Component} from 'react'; //특정 컴포넌트만 받으려면 ,{Component} 

// 리액트 컴포넌트는 HTML,CSS,Data(useState)로 이루어져 있다. 
class MyComponent extends Component { //컴포넌트를 상속받았기 때문에 클래스=>리액트가 제공하는 컴포넌트가 된다.
    render() { // 이미 리액트Component가 가지고 있는 render함수 view(태그 사용가능)가 리턴되는것임
        return (
            <h2>[This is imported from Component]</h2>

        )
    }
}
// 함수형 컴포넌트 
//function MyComponent () {
//    return(
//        <h2>[This is imported from Component]</h2>
//    )
//}


// 외부에서 가져다 쓰기 위해서는 반드시 export시켜줘야함 
// 가져다 쓰는데서는 import 하기
export default MyComponent;