import datatype from 'prop-types';
function SubComponent({str,num,boolean,obj,arr,func}) {
    return(
        <div>
            <p>String props:{str}</p>
            <p>number props :{num}</p>
            <p>boolean props :{boolean.toString()}</p>
            <p>obj props: {JSON.stringify({obj})}</p>
            <p>arr props : {arr.toString()}</p>
            <p>func props : {func}</p>
        </div>
    )
}

SubComponent.propTypes={
    str: datatype.string,
    num: datatype.number,
    boolean:datatype.bool,
    obj:datatype.object,
    func:datatype.func
}

export default SubComponent;