import {useState} from 'react';
import Component4 from './Component4';
export default function Component3 ({user}){
    
    return(
        <>
        <h1>Component3</h1>
        <Component4 user={user}/>
        </>
    )
}