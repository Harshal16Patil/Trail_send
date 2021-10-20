import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Select = ( {field_type,
    field_label,
    field_placeholder,
    field_value,
    field_property,
    field_required,
    field_reset,
    field_isSingle,
    field_options}) => {
    //const { handleChange } = useContext(FormContext)
    console.log(field_options)
     //console.log(field_label)
    return (
        <>
            <label className="form-label">{field_label}</label>
            <select className="form-select" aria-label="Default select example"
               // onChange={event => handleChange(field_id, event)}
            >
               <option >Open this select menu</option>
                {field_options ? (field_options.length>0 && field_options.map((option, i) =>
                    <option value={option} key={i}>{option}</option>

                )):null}
            </select>
        </>
    )
}

export default Select
