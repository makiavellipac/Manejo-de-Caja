import React from 'react';
import {InputNumber} from 'antd';

const InputDolars=({defaultValue,disabled=true})=>{
    return(
        <InputNumber defaultValue={defaultValue} 
                         formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
                         parser={value => value.replace(/\$\s?|(,*)/g, '')}
                         min={0}
                         step={.01} 
                         style={{width:"100%"}}
                         disabled={disabled}
                         />
    )
}
export default InputDolars;