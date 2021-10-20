import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Input = ({ field_label, field_placeholder, field_value,field_type,field_required,field_reset,field_property}) => {
   
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
            <input type={field_type}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                required={field_required}
               
            />
            {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
            </div>
    )
}

export default Input
