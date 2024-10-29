import Students from "./Students"
function App2(){
    const studs = [
            {name:'hong',grade:1,subject:'computer'},
            {name:'song',grade:2,subject:'sports'}
    ]
    
    return( 
    <div>
        <Students students={studs}/>
    </div>
    )
}
export default App2;