import formJSON from './package2.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';
const { AWS,GCP } = formJSON ?? {}

////Extracting AWS Data
  var { data_labels,augmentation,dropdown,training_params}=AWS??{}
  const AWS_data_labels=data_labels;
  const AWS_augmentation=augmentation;
  const AWS_dropdown=dropdown;
  const AWS_training_params=training_params;
  var {instance_type,optimizer}=dropdown??{}
  const AWS_instance_type=instance_type;
  const AWS_optimizer=optimizer;
  console.log(instance_type);
  console.log(optimizer)

    //Extracting GCP Data

  const GCP_data_labels=GCP.data_labels;
  const GCP_augmentation=GCP.augmentation;
  const GCP_dropdown=GCP.dropdown;
  const GCP_training_params=GCP.training_params;
  
  

  
  //console.log(data_labels)
  //console.log(dropdown.optimizer)
  //const{innerControls}=training_params[0]??{}
  //console.log(elements)
  //console.log(AWS)
function App() {
 const [elements, setElements] = useState(null);
 
  useEffect(() => {
    setElements(formJSON)

  }, [])
  /*const { AWS,GCP } = elements ?? {}
  const { data_labels,augmentation,dropdown,training_params}=AWS??{}
  const {instance_type,optimizer}=dropdown??{}
  console.log(instance_type);
  console.log(optimizer)
  
  console.log(data_labels)
  //console.log(dropdown.optimizer)
  //const{innerControls}=training_params[0]??{}
  //console.log(elements)
  console.log(AWS)
  //console.log(augmentation)
  //console.log(innerControls)
  console.log(training_params)
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(elements)
  }
 
  //console.log(AWS)*/
  var l=100;
  return (
    <FormContext.Provider >
     <div className="App container">
       
        <form>
           
          {AWS_data_labels ? AWS_data_labels.map((field, i) => <Element key={i} field={field} options={AWS_dropdown}/>) : null}
          {AWS_augmentation ? AWS_augmentation.map((field, i) => <Element key={i} field={field} options={AWS_dropdown} />) : null}
          {AWS_training_params ? AWS_training_params.map((field, i) => <Element key={i} field={field} options={AWS_dropdown}   />) : null}


          {GCP_data_labels ? GCP_data_labels.map((field, i) => <Element key={i} field={field} options={GCP_dropdown}/>) : null}
          {GCP_augmentation ? GCP_augmentation.map((field, i) => <Element key={i} field={field} options={GCP_dropdown} />) : null}
          {GCP_training_params ? GCP_training_params.map((field, i) => <Element key={i} field={field} options={GCP_dropdown}   />) : null}
         </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;











/* const data_labels={};
  console.log(elements)
  const { AWS, GCP } = elements ?? {}
  if(AWS!==undefined){
  const { ,augmentation,dropdown,training_params}=AWS;
  console.log(data_labels[0]);
  console.log(Object.values(data_labels)[0])
  console.log(augmentation);
  console.log(dropdown);
  console.log(training_params);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(elements)
  }
  /*const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.AWS.forEach(field => {
      const { label, type,property, required,reset,placeholder,value} = field;
      if (id === label) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        }


      }
      setElements(newElements)
    });
    console.log(elements)
  }*/ 