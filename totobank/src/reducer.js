export const initState = {
    user: {
        id:'',
        password:'',
        name:'',
        nickname:'',
        email:'',
        address:'',
        profileImage:''
    },   
}

export const totoReducer = (state=initState,action)=>{
    switch(action.type) {
        case "USER": return {...state,user:{...action.data}}
        default :return state;
    }
}