import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
//modal
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DeployNote from './DeployNote';

function Headercomponent() {
    //modal
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" ><b>REACT JS - Tutorial</b></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? 'active' : 'inactive')} class="nav-link active" aria-current="page" >Events</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/about" class="nav-link">Forms</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/props" class="nav-link">Props</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/state" class="nav-link">State</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/lchooks" class="nav-link">L.C Hooks</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/apicalls" class="nav-link">API Calls</NavLink>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <Button variant="outlined" onClick={handleClickOpen}>
                                Deploy Note
                            </Button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* //modal  */}
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        <DeployNote/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Headercomponent
