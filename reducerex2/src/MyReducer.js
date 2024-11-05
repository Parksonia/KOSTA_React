//state함수를 따로 뺌
export const initState ={
    id:'hong',
    nickname: 'gildong',
    subject:'computer',
    grade:1

}
// state를 업데이트 해서 다시 돌려줘야하므로 reducer는 반드시 리턴 시켜줘야함
export const reduer =(state,action)=>{
    let nState;
    switch(action.type) {
        case 'ID':nState={...state,id:action.data}; break; //type이 ID면 state의 id만 data로변경
        case 'NICKNAME':nState={...state,nickname:action.data}; break;
        case 'SUBJECT':nState={...state,subject:action.data}; break;
        case 'GRADE':nState={...state,grade:action.data}; break;
        default :return nState={...state};
    }
    return nState;
}
