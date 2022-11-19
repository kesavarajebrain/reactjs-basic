import React, { Component } from 'react'
// import axios
import axios from 'axios';
// table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// Post api page
import PostDataApi from './PostDataApi';

export class ApiCalls extends Component {
    //api baseurl
    BaseUrl = 'https://jsonplaceholder.typicode.com'

    constructor(props) {
        super(props)
        // get api response and save to the state
        this.state = {
            apiResponse: [] // Intially declare empty []
        }
    }

    // like ngonit after page load call api's what need to the page.
    componentDidMount() {
        //GET API
        axios.get(this.BaseUrl + '/posts').then(result => {
            console.log(result)
            this.setState({ apiResponse: result.data }) // from the api data comes from data obj
            console.log(this.state.apiResponse)
        }).catch(error => {
            console.log(error)
        })
    }

 

    render() {
        // assign the state property to state
        const { apiResponse } = this.state
        return (
            <div className='homeCommon'>
                <div class="middle">
                    <h5>Api Calls - Axios(Package)</h5>
                    <h6>Npm install axios</h6>
                    <p>GET Method</p>
                    {/* // check the length and map the array */}
                    {/* {apiResponse.length ? apiResponse.map(x=> <div>{x.id}</div>) :null} */}
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 250, minWidth: 600 }}>
                            <Table size="small" stickyHeader aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>ID</TableCell>
                                        <TableCell align='left'>User ID</TableCell>
                                        <TableCell align='center'>Title</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {apiResponse.length ? apiResponse.map(x => <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >  <TableCell align='left'>{x.id}</TableCell>
                                        <TableCell align='left'>{x.userId}</TableCell>
                                        <TableCell align='left'>{x.title}</TableCell>
                                    </TableRow>
                                    ) : null
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    <br></br>
                </div>
                <div class="bottomleft">
                    Api Calls - Axios
                </div>
                <div class="bottomright">
                    <PostDataApi/>
                </div>
            </div>
        )
    }
}

export default ApiCalls