import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Lifecycle2 from './Lifecycle2.component';
import Button from '@mui/material/Button';
export class Lifecyclecomponent extends Component {
  
  //Mounting Method __________________________________________________________________
  constructor(props) {
    super(props)
    this.state = {
      name: 'This text will change on UPDATING - before that check console for MOUNTING'
    }
    // 1 st execution - Mounting
    console.log('PARENT')
    console.log('1 st execution(Mounting) - Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    // props, state - syntax
    // 2 nd execution - Mounting
    console.log('PARENT')
    console.log(' 2 nd execution(Mounting) - static getDerivedStateFromProps')
    return null;
  }

  componentDidMount() {
    // 4 th execution - Mounting
    // actually 3 rd is the render method after we put this its getting 1,2,3,4 order so that adding here for check the scanario
    console.log('PARENT')
    console.log(' 4 th execution(Mounting) - componentDidMount')
  }

  //Updating Method _________________________________________________________________________
  shouldComponentUpdate() {
    // getDerivedStateFromProps - 1 method already defined
    // II st Execution
    console.log('PARENT')
    console.log('II st Execution(Updating) - shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // render - 3 rd method already there
    // IV th Execution 
    console.log('PARENT')
    console.log('IV th Execution(Updating) - getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    // V th method
    console.log('PARENT')
    console.log('5 th Execution(Updating) - componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Now Check the console for UPDATING Hooks'
    })
  }

  render() {
    // 3 rd execution - Mounting
    console.log('PARENT')
    console.log('3 rd execution(Mounting) - render')
    return <div>
      <div className='homeCommon'>
        <div class="middle">
          <h3>Life Cycle Hooks</h3>
          <h4>Major Life Cycle methods classfied below</h4>
          <h6>{this.state.name}</h6>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 300, minWidth: 500 }}>
              <Table size="small" stickyHeader aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Concept</TableCell>
                    <TableCell align='center'>Usage</TableCell>
                    <TableCell align='center'>Hooks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='center' component="th" scope="row">
                      <b>Mounting</b>
                    </TableCell>
                    <TableCell align='center'>When component is being <b>created</b> and <b>inserted</b> into the DOM</TableCell>
                    <TableCell align='center'>
                      <h6>1.constructor</h6>
                      <h6>2.static getDerivedStateFromProps</h6>
                      <h6>3.render</h6>
                      <h6>4.componentDidMount</h6>
                    </TableCell>
                  </TableRow>
                  {/* 2nd row */}
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align='center'>
                      <b>Updating</b>
                    </TableCell>
                    <TableCell align='center'>When component is being <b>re-rendered</b> as a result of <b>changes</b> </TableCell>
                    <TableCell align='center'>
                      <h6>1.static getDerivedStateFromProps</h6>
                      <h6>2.shouldComponentUpdate</h6>
                      <h6>3.render</h6>
                      <h6>4.getSnapshotBeforeUpdate</h6>
                      <h6>5.componentDidUpdate</h6>
                    </TableCell>
                  </TableRow>
                  {/* 3rd row */}
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='center' component="th" scope="row">
                      <b>UnMounting</b>
                    </TableCell>
                    <TableCell align='center'>When component is being <b>removed</b> from the DOM</TableCell>
                    <TableCell align='center'>
                      <h6>1.componentWillUnmount</h6>
                    </TableCell>
                  </TableRow>
                  {/* 4th row */}
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='center' component="th" scope="row">
                      <b>Error Handling</b>
                    </TableCell>
                    <TableCell align='center' >When there is <b>error during rendering</b> in the life cycle methods</TableCell>
                    <TableCell align='center'>
                      <h6>1.static getDerivedStateFromError</h6>
                      <h6>2.componentDidCatch</h6>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <br></br>
          {/* Child component added for how life cycle works */}
          <Button variant="contained" size="small" color="primary" onClick={this.changeState}  >UPDATE</Button>
          <br></br>
          <Lifecycle2 />
        </div>
        <div class="bottomleft">
          <p>Life Cycle Hooks</p>
        </div>
      </div>
    </div>
  }
}

export default Lifecyclecomponent

// Functional Component
// import React from 'react'
// function Lifecycle() {
//   return (
//     <div className='homeCommon'>
//       <div class="middle">
//         <h3>Life Cycle Hooks</h3>
//         <h4>Major Life Cycle methods classfied below</h4>
//         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//         <TableContainer  sx={{ maxHeight: 300 , minWidth:500}}>
//           <Table size="small" stickyHeader aria-label="a dense table">
//             <TableHead>
//               <TableRow>
//                 <TableCell align='center'>Concept</TableCell>
//                 <TableCell align='center'>Usage</TableCell>
//                 <TableCell align='center'>Hooks</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell align='center' component="th" scope="row">
//                   <b>Mounting</b>
//                 </TableCell>
//                 <TableCell align='center'>When component is being <b>created</b> and <b>inserted</b> into the DOM</TableCell>
//                 <TableCell align='center'>
//                   <h6>1.constructor</h6>
//                   <h6>2.static getDerivedStateFromProps</h6>
//                   <h6>3.render</h6>
//                   <h6>4.componentDidMount</h6>
//                 </TableCell>
//               </TableRow>
//               {/* 2nd row */}
//               <TableRow
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row" align='center'>
//                  <b>Updating</b>
//                 </TableCell>
//                 <TableCell align='center'>When component is being <b>re-rendered</b> as a result of <b>changes</b> </TableCell>
//                 <TableCell align='center'>
//                 <h6>1.static getDerivedStateFromProps</h6>
//                 <h6>2.shouldComponentUpdate</h6>
//                 <h6>3.render</h6>
//                 <h6>4.getSnapshotBeforeUpdate</h6>
//                 <h6>5.componentDidUpdate</h6>
//                 </TableCell>
//               </TableRow>
//               {/* 3rd row */}
//               <TableRow
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell align='center' component="th" scope="row">
//                 <b>UnMounting</b>
//                 </TableCell>
//                 <TableCell align='center'>When component is being <b>removed</b> from the DOM</TableCell>
//                 <TableCell align='center'>
//                   <h6>1.componentWillUnmount</h6>
//                 </TableCell>
//               </TableRow>
//               {/* 4th row */}
//               <TableRow
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell align='center' component="th" scope="row">
//                 <b>Error Handling</b>
//                 </TableCell>
//                 <TableCell align='center' >When there is <b>error during rendering</b> in the life cycle methods</TableCell>
//                 <TableCell align='center'>
//                   <h6>1.static getDerivedStateFromError</h6>
//                   <h6>2.componentDidCatch</h6>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//         </Paper>
//       </div>
//       <div class="bottomleft">
//         <p>Life Cycle Hooks</p>
//       </div>
//     </div>
//   )
// }

// export default Lifecycle



