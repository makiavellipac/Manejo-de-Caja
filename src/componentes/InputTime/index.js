import React from 'react';
import {DatePicker,TimePicker} from 'antd'
import propTypes from 'prop-types';
import moment from 'moment';

const InputTime=({type,time,disabled})=>{
    const dateFormat='YYYY-MM-DD';
    const hourFormat='HH:mm:ss';

    if (type==='date') {
        return (
            <DatePicker defaultValue={moment(time,dateFormat)} disabled={disabled}/>
        )
    }
    else if (type==='hour') {
        return(
            <TimePicker defaultValue={moment(time,hourFormat)} disabled={disabled}/>
        )
    }
    else
        return(null)
}

InputTime.defaultProps={
    disabled:true
}

InputTime.propTypes={
    type:propTypes.oneOf(['date','hour']).isRequired,
    time:propTypes.string.isRequired,
    disabled:propTypes.bool
}

export default InputTime;