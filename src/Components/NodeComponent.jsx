import React, {useState} from 'react'


const NodeComponent = (props) =>{ 
    return(props.check()&&
        <div>
        <h1>Node by component</h1>
       </div>
    );
}

export default NodeComponent;