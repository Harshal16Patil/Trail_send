import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Button = ({ field_label,field_type}) => {
  
   
    return (
        <div className="mb-3">
             <button type={field_type} className="btn btn-primary" >{field_label}</button>
            {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
            </div>
    )
}

export default Button
