import React, { useState, useRef, Component } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Background,
  Controls,
} from 'react-flow-renderer';
import SplitPane from "react-split-pane";
import Sidebar from './NodeSidebar';
import NodeComponent from './SideBar'


const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input node' },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

function DnDFlow (){
  const [state,setState]=useState("false");
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [elements, setElements] = useState(initialElements);

    const onConnect = (params) => setElements((els) => addEdge(params, els));
    const onElementsRemove = (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els));
  
    const onLoad = (_reactFlowInstance) =>
      setReactFlowInstance(_reactFlowInstance);
  
    const onDragOver = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    };
  
    const onDrop = (event) => {
      event.preventDefault();
  
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };
  
      setElements((es) => es.concat(newNode));
    };
    const onElementClick = (event, element) => {
      console.log('click', element);
      alert(element.data.label)
      setState('true');
      
    };
    const onPaneClick=(event)=>{
      setState('false')
    }
  return (
      <div>
        <SplitPane split="vertical"  minSize={400} >
        <NodeComponent check={()=>{
            console.log(state)
            if(state==='true'){
              console.log("if")
            return true;
          }else{
            console.log("else")
            return false;
          }}}/>
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            style={{height:500}}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onElementClick={onElementClick}
            onPaneClick={onPaneClick}
          >
            <Controls />
            <Background/>
            
          </ReactFlow>
        </div>
        <Sidebar />
       
      </ReactFlowProvider>
      </div>
      
    </SplitPane>
    </div>
  );
  
};

export default DnDFlow;