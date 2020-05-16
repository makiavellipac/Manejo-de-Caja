import React from 'react';
import './index.css'

const InputWithLabel=({title,children,w="auto",h="auto"})=>{
    return(
            <label style={{width:w,height:h}} className="inputWithLabel">
                {title}
                {children}
            </label>
    )
}

export default InputWithLabel;