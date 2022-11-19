import * as React from 'react';
import './css/about.css'
//import form component
import BasicForm from './BasicForm';
import FormValidation from './FormValidation'
//breadcrumps & icons
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
//button
import Button from '@mui/material/Button';
//modal full screen 
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
//full screen modal
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function About() {
    // full screen modal
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='mainDiv'>
            <Button variant="contained" color="success" className='fullModalBtn' onClick={handleClickOpen}>Form With Validation</Button>
            <div class="topright">
                <small>Form render from another component (class component / creating cmd - rce)</small>
                <BasicForm></BasicForm>
            </div>
            <div class="bottomleft">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
                        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" /> React JS - Tutorial
                    </Link>
                    <Link sx={{ display: 'flex', alignItems: 'center' }} underline="hover" color="inherit" href="/" >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> About
                    </Link>
                    <Link sx={{ display: 'flex', alignItems: 'center' }} underline="hover" color="inherit" href="/">
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Basic Forms
                    </Link>
                </Breadcrumbs>
                <h5>Forms</h5>
                <hr></hr>
            </div>
            {/* full screen modal */}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Form With Validation
                        </Typography>
                    </Toolbar>
                </AppBar>
                <FormValidation></FormValidation>
            </Dialog>
        </div>
    )
}

export default About
