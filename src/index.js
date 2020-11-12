import React from 'react';

import {useState} from 'react';

export function useCompleteInput(input){
    const [value, setValue] = useState('');
    const update = (e) =>{
        e.preventDefault();
        setValue(e.target.value);
    }
    const place = 'Enter ' + input +'...'
    const comp = () =>{
        return(
        <div className ='form-input'>
            <label>
                {input}:    
                <input type='text' value={value} onChange={update} placeholder = {place}/>
            </label>
        </div>
    )}
    return {value: value, comp: comp()}
}

export function useBareInput(input, initialValue){
    const [value, setValue] = useState(initialValue);
    const update = (e) =>{
        e.preventDefault();
        setValue(e.target.value);
    }
    const place = 'Enter ' + input +'...'
    const comp = () => {
    return(
                <input type='text' value={value} onChange={update} placeholder = {place}/>
    )
    }
    return {value: value, comp: comp()}
}