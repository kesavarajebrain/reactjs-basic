import React from 'react'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
//card
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//form
import TextField from '@mui/material/TextField';
// formik validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
//axios
import axios from 'axios';
// spinner
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
// Modal
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function PostDataApi() {
    const BaseUrl = 'https://jsonplaceholder.typicode.com'
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //validation
    const formik = useFormik({
        initialValues: {
            userId: '',
            title: '',
            body: ''
        },
        validationSchema: Yup.object().shape({
            userId: Yup.string()
                .required('Cannot be blank!'),
            title: Yup.string()
                .required('Cannot be blank!'),
            body: Yup.string()
                .required('Cannot be blank!')
        }),
        onSubmit: (formData) => {
            console.log(formData)
            //POST method
            axios.post(BaseUrl + '/posts', formData).then(result => {
                handleOpenSpinner();
                if (result) {
                    console.log(result)
                    handleCloseSpinner();
                    // open snackbar
                    openToast({
                        vertical: 'bottom',
                        horizontal: 'right',
                    });
                    formik.resetForm();
                }
            }).catch(error => {
                console.log(error)
            })
        }
    })

    // snackbar
    const [openSnackBar, setOpenSnackBr] = React.useState();

    const openToast = () => {
        setOpenSnackBr(true);
    };

    const closeSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBr(false);
    };

    // spinner
    const [openSpinner, setOpenSpinner] = React.useState(false);
    const handleCloseSpinner = () => {
        setOpenSpinner(false);
    };
    const handleOpenSpinner = () => {
        setOpenSpinner(!openSpinner);
    };
    return (
        // instead of div we can use fragment its a special one , its wont render extra while inspect
        <React.Fragment>
            <Button variant="contained" color="secondary" onClick={handleClickOpen} size="small">
                POST Method
            </Button>
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
                            POST Method (Axios)
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className='container'>
                    <Box sx={{ minWidth: 275 }}>
                        <Card className='mt-3'>
                            <CardContent>
                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-1'></div>
                                        <div className='col-md-5'>
                                            Docs
                                        </div>
                                        <div className='col-md-5'>
                                            <center><h6>POST FORM </h6></center>
                                            <br></br>
                                            <form autoComplete='off' onSubmit={formik.handleSubmit}>
                                                <div className='row mb-3'>
                                                    <TextField name="userId" value={formik.values.userId} onChange={formik.handleChange} className='customClass' id="outlined-basic" label="User ID" variant="outlined" />
                                                    {formik.errors.userId ? <span className='text-danger'>{formik.errors.userId}</span> : null}
                                                </div>
                                                <div className='row mb-3'>
                                                    <TextField name="title" value={formik.values.title} onChange={formik.handleChange} className='customClass' id="outlined-basic" label="Title" variant="outlined" />
                                                    {formik.errors.title ? <span className='text-danger'>{formik.errors.title}</span> : null}
                                                </div>
                                                <div className='row'>
                                                    <TextField name="body" value={formik.values.body} onChange={formik.handleChange} className='customClass' id="outlined-basic" label="Body" variant="outlined" />
                                                    {formik.errors.body ? <span className='text-danger'>{formik.errors.body}</span> : null}
                                                </div>
                                                <br></br>
                                                <center>
                                                    <Button type='submit' variant="contained">Post Form</Button>
                                                </center>
                                            </form>
                                        </div>
                                        <div className='col-md-1'></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
            </Dialog>
            {/* // Snackbar ___________________________________________________*/}
            <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={closeSnackBar}>
                <Alert onClose={closeSnackBar} severity="success" sx={{ width: '100%' }}>
                    Form submitted successfully!
                </Alert>
            </Snackbar>
            {/* spinner _________________________________________________________*/}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openSpinner}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </React.Fragment>
    )
}

export default PostDataApi