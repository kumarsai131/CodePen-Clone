import React, { useEffect, useState } from 'react'


const FIX = 'codepen-'

function LocalStorage(key,intialValue){

    const prefixkey = FIX + key;

    const [value,SetValue] = useState(() =>{
        const jsonValue = localStorage.getItem(prefixkey)

        if(jsonValue!=null)
        return JSON.parse(jsonValue)
        
        if(typeof intialValue === 'function')
        return intialValue()
        else
        return intialValue
    })

    useEffect(()=>{
        localStorage.setItem(prefixkey,JSON.stringify(value))
    },[prefixkey,value])
    
    return [value,SetValue]
}

export default LocalStorage;