import React, { Component } from 'react'
import { useState } from "react";
import './css/basicform.css';
//forms & input
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//text area
import TextareaAutosize from '@mui/material/TextareaAutosize';
//select field
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
//radio button
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
//checkbox
import Checkbox from '@mui/material/Checkbox';
//toggle button
import Switch from '@mui/material/Switch';
//button
import Button from '@mui/material/Button';
export class BasicForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            comments: '',
            category: '',
            gender: '',
            subscribe: '',
            parentalControl: ''
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubscribeChange = (event) => {
        this.setState({
            subscribe: event.target.checked
        })
    }

    handleparentalControlChange = (event) => {
        this.setState({
            parentalControl: event.target.checked
        })
    }


    handleSubmit = event => {
        alert(`UserName - ${this.state.userName} \n category - ${this.state.category} \n comments - ${this.state.comments} \n gender - ${this.state.gender} \n subscribe - ${this.state.subscribe} \n parentalControl - ${this.state.parentalControl} ` + `\n` + "Check console for the form values")
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <center>
                    <h5>Basic Form</h5>
                </center>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <Card sx={{ Width: '50%' }}>
                            <CardContent>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 0.5, width: '35ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="filled-basic" size="small" value={this.state.userName} onChange={this.handleUserNameChange} label="User Name" variant="filled" />
                                    <br></br>
                                    <FormControl variant="filled" sx={{ m: 1, Width: '35ch' }}>
                                        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                                        <Select value={this.state.category} onChange={this.handleCategoryChange}
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="classic">Classic</MenuItem>
                                            <MenuItem value="premium">Premium</MenuItem>
                                            <MenuItem value="previlage">Previlage</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <br></br>
                                    <TextareaAutosize className='textAreaStyle' aria-label="minimum height" value={this.state.comments} onChange={this.handleCommentsChange} minRows={2} placeholder="Enter your comments" style={{ width: '35ch' }}
                                    />
                                    <br></br>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup row aria-label="gender" value={this.state.gender} onChange={this.handleGenderChange} name="row-radio-buttons-group">
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                    <br></br>
                                    <FormControlLabel value={this.state.subscribe} onChange={this.handleSubscribeChange} control={<Checkbox />} label="Accept terms and norms" />
                                    <br></br>
                                    <FormControlLabel value={this.state.parentalControl} onChange={this.handleparentalControlChange} control={<Switch />} label="Parental Control" />
                                </Box>
                            </CardContent>
                            <center>
                                <Button type='submit' variant="contained">Save</Button>
                            </center>
                            <br></br>
                        </Card>
                    </form>
                </center>
            </div>
        )
    }
}

export default BasicForm
