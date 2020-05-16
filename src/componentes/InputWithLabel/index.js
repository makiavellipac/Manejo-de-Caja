import React from 'react';
import propTypes from 'prop-types';
import './index.css';

const InputWithLabel=({title,children,w,h})=>{
    return(
            <label style={{width:w,height:h}} className="inputWithLabel">
                {title}
                {children}
            </label>
    )
}

InputWithLabel.defaultProps={
    title:'',
    children:<p></p>,
    w:"auto",
    h:"auto"
}

InputWithLabel.propTypes={
    title:propTypes.string,
    children:propTypes.element,
    w:propTypes.string,
    h:propTypes.string
}

export default InputWithLabel;