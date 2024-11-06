export const initState = {
    
    user:{
        id:'',
        password:'',
        name:'',
        nickname:'',
        email:'',
        address:'',
        profileImage:'',
        profileImageStr:''
    },
}
export const boardReducer =(state=initState,action)=>{
    switch(action.type) {
        case "USER" : return {...state,user:{...action.data}} 
        default :return state;
    }
}