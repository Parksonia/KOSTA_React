// props = {name:'song',age:30,nick:'송송이'};
//let {name,age,nick} =props; 
function Person({per}){
    return(
        <div>
            <h2>{per.name}</h2>
            <h2>{per.age}</h2>
            <h2>{per.nick}</h2>
        </div>

    )
}
export default Person;