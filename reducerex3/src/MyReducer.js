export const intiTodos =[
    {
        id:1,
        title:'Todo1',
        count:0,
        complete:true

    },
    {
        id:2,
        title:'Todo2',
        count:0,
        complete:false

    },
    {
        id:3,
        title:'Todo3',
        count:0,
        complete:true

    }
]
export const myReducer =(state,action) =>{
    // 갑이 변경되는 state 배열의 경우 리턴시킬 때 새로운 객체를 생성하여 리턴시켜야 함 (map을 사용)
    switch(action.type) {
        case "COMPLETE" : 
        return state.map(todo=>{
            if(todo.id === action.id)  return {...todo, complete:!todo.complete} // 나머지는 그대로고,action의 complete으로 바꾼 배열을 생성하여 리턴
            else return todo;
        })
        
        case "INCREMENT" : 
        return state.map(todo=>{
            if(todo.id === action.id)  return {...todo, count:(todo.count)+1} // 나머지는 그대로고,action의 complete으로 바꾼 배열을 생성하여 리턴
            else return todo;
        })
        default :return state;
    }
}