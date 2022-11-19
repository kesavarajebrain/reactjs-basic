import * as React from 'react';
//tooltip
import Tooltip from '@mui/material/Tooltip';
//snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//dialog
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
//button
import Button from '@mui/material/Button';
//breadcrumps & icons
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
//text field
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//for input value
import { useState } from "react";
import './css/home.css'
function Homecomponent() {
    //sanckbar
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    //dialog modal
    function SimpleDialog(props) {
        const { onClose, selectedValue, open } = props;

        const handleCloseModal = () => {
            onClose(selectedValue);
        };

        return (
            <Dialog onClose={handleCloseModal} open={open} TransitionComponent={Transition} onBackdropClick="false">
                <DialogTitle>Dialog Modal</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <h3>Modal Opened by click event</h3>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
    SimpleDialog.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        selectedValue: PropTypes.string.isRequired,
    };
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClose1 = (value) => {
        setOpenModal(false);
    };


    //our functions
    function basicAlert() {
        alert('You Clicked the button')
    }

    function snackAlert() {
        setOpen(true);
    }

    function modalAlert() {
        setOpenModal(true);
    }
    //input value
    const [name, setName] = useState("Change Value");

    function bindInputValue() {
        alert(name)
    }

    function clearInputValue() {
        setName("");
    }
    //multiple css
    const style2 = {
        padding: "1rem"
    }
    return (
        <div className='homeCommon'>
            <div class="middle">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
                        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" /> React JS - Tutorial
                    </Link>
                    <Link sx={{ display: 'flex', alignItems: 'center' }} underline="hover" color="inherit" href="/" >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home
                    </Link>
                    <Link sx={{ display: 'flex', alignItems: 'center' }} underline="hover" color="inherit" href="/">
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Basic Events
                    </Link>
                </Breadcrumbs>
                <h5>Basic Events</h5>
                <hr></hr>
            </div>
            <div class="topright">
                <h5>Inputs & Values</h5>
                <Box
                    component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                    <TextField id="outlined-basic" size="small" onChange={(e) => setName(e.target.value)}  label="Enter Some Text" value={name} variant="outlined" />
                </Box>
                <Tooltip placement="left-end" arrow title="Enter some value above field">
                    <Button size="small" color="success" onClick={bindInputValue} variant="contained">Click</Button>
                </Tooltip>
                &nbsp;&nbsp;
                <Tooltip placement="top" arrow title="Clear existing values!">
                    <Button size="small" color="primary" onClick={clearInputValue} variant="contained">Clear</Button>
                </Tooltip>
                <p>Two way binding : {name}</p>
            </div>
            <div class="bottomleft">
                <h5>Simple Click Events</h5>
                <p>
                    <Tooltip placement="right-end" arrow title="Basic Click Event">
                        <span style={{ cursor: "pointer", ...style2 }} onClick={basicAlert}>Basic alert</span>
                    </Tooltip>
                    <Tooltip placement="right-end" arrow title="SnackBar Click Event">
                        <span style={{ cursor: "pointer", ...style2 }} onClick={snackAlert}>Snack Bar alert</span>
                    </Tooltip>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            This is a snack bar click event!
                        </Alert>
                    </Snackbar>
                    <Tooltip placement="right-end" arrow title="Modal Dialog Click Event">
                        <span style={{ cursor: "pointer" }} onClick={modalAlert}>Dialog alert</span>
                    </Tooltip>
                    <SimpleDialog
                        open={openModal}
                        onClose={handleClose1}
                    />
                </p>
            </div>
        </div>
    )
}
export default Homecomponent
