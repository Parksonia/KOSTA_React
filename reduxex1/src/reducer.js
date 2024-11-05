export const reducer =(state,action)=>{
    if(state===undefined) {
        return {
            data1:'NONE',
            data2:0
        }
    }
    const nState = {...state};
    switch(action.type) {
        case 'STRING' :nState.data1 = action.data; break;
        case 'INT': nState.data2 = action.data; break; 
        default:
    }
    return nState;
}