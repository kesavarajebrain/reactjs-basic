import React from 'react'
import ChildComponent from './ChildComponent';
function ParentComponent() {
    //static
    var Message = 'Data render from parent component';
    var Static_Arr = [{
        name: 'Kesav',
        age: 26,
        city: 'Trichy'
    },
    {
        name: 'Nisha',
        age: 25,
        city: 'Chennai'
    },
    {
        name: 'Priya',
        age: 25,
        city: 'Goa'
    }]
    var docs_Data = {
        Title:'Parent to Child Communication using PROPS',
        Content:`1.First ( import ChildComponent from './ChildComponent'; ) in parent component
        2.<ChildComponent message={Message} userData={Static_Arr} docs ={docs_Data} ></ChildComponent>
        3.In child component declare props then get it by names `
    }
 
    return (
        <div>
            <ChildComponent message={Message} userData={Static_Arr} docs ={docs_Data} ></ChildComponent>
        </div>
    )
}

export default ParentComponent