import React from 'react';

import {useState} from 'react';

export default function useInput(input){
    const [value, setValue] = useState('');
    const update = (e) =>{
        e.preventDefault();
        setValue(e.target.value);
    }
    const place = 'Enter ' + input +'...'
    const con = () =>{
        return(
        <div className ='form-input'>
            <label>
                {input}:    
                <input type='text' value={value} onChange={update} placeholder = {place}/>
            </label>
        </div>
    )}
    return {value: value, comp: con()}
}