import {useState} from 'react';
import Component5 from './Component5';

export default function Component4 ({user}){
    
    return(
        <>
        <h1>Component4</h1>
        <Component5 user={user}/>
        </>
    )
}