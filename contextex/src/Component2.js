import {useState} from 'react';
import Component3 from './Component3';

export default function Component2 ({user}){
    
    return(
        <>
        <h1>Component2</h1>
        <Component3 user={user}/>
        </>
    )
}