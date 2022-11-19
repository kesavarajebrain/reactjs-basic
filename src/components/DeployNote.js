import React from 'react'

function DeployNote() {
  return (
    <div>
        <h4>Deploy Note</h4>
        <br></br>
        {/* kesavarajtry@gmail.com */}
        <h5>1.firebase login</h5> 
        <h5>2.firebase init - Now type <b>YES</b> as we are ready to proceed.</h5>
        <h5>3.Select <b>Hosting</b> from the options provided</h5>
        <h5>4.Select the Use an existing project</h5>
        <h5>5.Give the directory as <b>build</b></h5>
        <h5>6.Single page app - <b>YES</b></h5>
        <h5>7.<b>npm run build</b> - build our project</h5>
        <h5>8.<b>firebase deploy</b></h5>
    </div>
  )
}

export default DeployNote