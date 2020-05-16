import React from 'react';
import {InputNumber} from 'antd';
import propTypes from 'prop-types';

const InputDolars=({defaultValue,disabled})=>{
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

InputDolars.defaultProps={
    defaultValue:0,
    disabled:true
}

InputDolars.propTypes={
    defaultValue:propTypes.number,
    disabled:propTypes.bool
}
export default InputDolars;

