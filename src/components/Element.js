import React from 'react'
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Button from './elements/Button';
import Select from './elements/Select';
const Element = (props) => {
    const { readonly,innerControls,label, type,property, required,reset,placeholder,value,isSingle}=props.field
    var options=props.options
    if(label==='Select instance type')
    {
        options =props.options.instance_type
    }
    else if(label==='Select optimizer'){
        options =props.options.optimizer
    }
    console.log(label)
    if(options!==undefined){console.log(options)
    }
else{console.log(0)}
   switch (type) {
        case 'text':
            return (<Input
                field_type={type}
                field_label={label}
                field_placeholder={placeholder}
                field_value={value}
                field_property={property}
                field_required={required}
                field_reset={reset}
                

            />)
        case 'submitButton':
            return (<Button
                    field_type={type}
                    field_label={label}
                />)
        case 'dropdown':
            return (<Select
                field_type={type}
                field_label={label}
                field_placeholder={placeholder}
                field_value={value}
                field_property={property}
                field_required={required}
                field_reset={reset}
                field_isSingle={isSingle}
                field_options={options}

            />)
        case 'formArray':
            return (<div>
                    <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
                    
                    {innerControls ? innerControls.map((field, i) => <Element key={i} field={field} options={options} />) : null}
              

                </div>)
        case 'checkbox':
                return (<Checkbox
                    
                    field_label={label}
                    field_value={value}
                    field_readonly={readonly}
            />)

        default:
            return null;
    }


}

export default Element
