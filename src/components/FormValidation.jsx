import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import './css/validation.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
//dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
//validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
// npm install formik yup --save

// modal transition or silde settings
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
function FormValidation() {
    //validate code another long code method 
    // const validate = values =>{
    //     var errors = {}
    //     if(!values.registerName){
    //         errors.registerName = 'Name is required!'
    //     } else if( typeof values.registerName == 'number'){
    //         errors.registerName = 'Number not allowed!'
    //     }
    //     return errors;
    // }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    //formik code
    const formik = useFormik({
        initialValues: {
            registerName: '',
            registerPhone: '',
            registerEmail: '',
            registerCategory: '',
            registerAge: '',
            regPassword: '',
            regConfPassword: '',
            registerDob: new Date(),
            regAddress: '',
            registerGendr: '',
            acceptTerms: ''

        },
        validationSchema: Yup.object().shape({
            registerName: Yup.string()
                .required('Name is required!')
                .min(2, "Atleast 2 charectors minimum!")
                .max(10, "Maximum 10 charectors only!")
                .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed!"),
            registerPhone: Yup.string()
                .required('Number is required')
                .min(10, "Minimum 10 charectors only!")
                .max(10, "Maximum 10 charectors only!")
                .matches(phoneRegExp, 'Numbers only allowed!'),
            registerEmail: Yup.string()
                .email('Enter valid email!')
                .required('Email is required!'),
            registerCategory: Yup.string()
                .required('Please select category'),
            registerAge: Yup.string()
                .required('Age is required!'),
            regPassword: Yup.string()
                .required('Password is required!')
                .min(6, 'Minimum 6 charectors required!'),
            regConfPassword: Yup.string()
                .required('Confirm password is required!')
                .min(6, 'Minimum 6 charectors required!')
                .oneOf([Yup.ref('regPassword'), null], 'Confirm password and password same!'),
            registerDob: Yup.string()
                .required('DOB is required!'),
            regAddress: Yup.string()
                .required('Address is required!'),
            registerGendr: Yup.string()
                .required('Gender is required!'),
            acceptTerms: Yup.boolean()
                .required('Accept terms and conditions!')
                .oneOf([true], 'Accept terms and conditions!')
        }),
        onSubmit: (formData) => {
            console.log(formData)
        }
    })



    const [value, setValue] = React.useState(new Date());
    const [category, setCatagory] = React.useState('');
    const [open, setOpenDialog] = React.useState(false);

    const categoryChange = (event) => {
        setCatagory(event.target.value);
    };

    const [gendrvalue, setgrValue] = React.useState('');

    const gendrvalueChange = (event) => {
        setgrValue(event.target.value);
    };

    function openDocs() {
        setOpenDialog(true);
    }
    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <div className='container mt-3'>
                <h5 className='text-center'>Form With YUP Validation</h5>
                <center>
                    <Button variant="contained" onClick={openDocs} size="small" color="primary"> View Docs </Button>
                </center>
                <br />
                <form autoComplete='off' onSubmit={formik.handleSubmit}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <TextField name="registerName" onChange={formik.handleChange} value={formik.values.registerName} className='customClass' id="outlined-basic" label="Name" variant="outlined" />
                                        {formik.errors.registerName ? <p className='text-danger'>{formik.errors.registerName}</p> : null}
                                    </div>
                                    <div className='col-md-3'>
                                        <TextField name='registerPhone' onChange={formik.handleChange} value={formik.values.registerPhone} className='customClass' id="outlined-basic" label="Contact No" variant="outlined" />
                                        {formik.errors.registerPhone ? <p className='text-danger'>{formik.errors.registerPhone}</p> : null}
                                    </div>
                                    <div className='col-md-3'>
                                        <TextField name='registerEmail' onChange={formik.handleChange} value={formik.values.registerEmail} className='customClass' id="outlined-basic" label="Email Address" variant="outlined" />
                                        {formik.errors.registerEmail ? <p className='text-danger'>{formik.errors.registerEmail}</p> : null}
                                    </div>
                                    <div className='col-md-3'>
                                        <Box sx={{ minWidth: 120 }} className='customClass'>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={category}
                                                    label="Category"
                                                    onChange={categoryChange}
                                                    name="registerCategory"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.registerCategory}
                                                >
                                                    <MenuItem value="">---select---</MenuItem>
                                                    <MenuItem value="Lower">Lower</MenuItem>
                                                    <MenuItem value="Middle">Middle</MenuItem>
                                                    <MenuItem value="Upper">Upper</MenuItem>
                                                </Select>
                                                {formik.errors.registerCategory ? <p className='text-danger'>{formik.errors.registerCategory}</p> : null}
                                            </FormControl>
                                        </Box>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-3'>
                                        <TextField name='regPassword' onChange={formik.handleChange} value={formik.values.regPassword} className='customClass' id="outlined-basic" label="Password" type="password" variant="outlined" />
                                        {formik.errors.regPassword ? <p className='text-danger'>{formik.errors.regPassword}</p> : null}
                                    </div>
                                    <div className='col-md-3'>
                                        <TextField name='regConfPassword' onChange={formik.handleChange} value={formik.values.regConfPassword} className='customClass' id="outlined-basic" label="Confirm Password" type="password" variant="outlined" />
                                        {formik.errors.regConfPassword ? <p className='text-danger'>{formik.errors.regConfPassword}</p> : null}
                                    </div>
                                    <div className='col-md-3'>

                                        <TextField name='registerAge' onChange={formik.handleChange} value={formik.values.registerAge} className='customClass' id="outlined-basic" label="Age" variant="outlined" />
                                        {formik.errors.registerAge ? <p className='text-danger'>{formik.errors.registerAge}</p> : null}
                                    </div>
                                    <div className='col-md-3'>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                name="registerDob"
                                                onChange={formik.handleChange}
                                                value={formik.values.registerDob}
                                                disableFuture
                                                label="Date of birth"
                                                openTo="year"
                                                views={['year', 'month', 'day']}
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField className='customClass' {...params} />}
                                            />
                                        </LocalizationProvider>
                                        {formik.errors.registerDob ? <p className='text-danger'>{formik.errors.registerDob}</p> : null}
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-3'>
                                        <TextField className='customClass'
                                            id="outlined-multiline-static"
                                            label="Address"
                                            multiline
                                            rows={3}
                                            defaultValue=""
                                            name='regAddress'
                                            value={formik.values.regAddress}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.regAddress ? <p className='text-danger'>{formik.errors.regAddress}</p> : null}
                                    </div>
                                    <div className='col-md-3'>
                                        <FormControl>
                                            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={gendrvalue}
                                                onChange={gendrvalueChange}
                                                name='registerGendr'
                                                value={formik.values.registerGendr}
                                                onChange={formik.handleChange}
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            </RadioGroup>
                                        </FormControl>
                                        {formik.errors.registerGendr ? <p className='text-danger'>{formik.errors.registerGendr}</p> : null}
                                    </div>
                                    <div className='col-md-4'>
                                        <FormControlLabel control={<Checkbox />} name="acceptTerms" value={formik.values.acceptTerms} onChange={formik.handleChange} label="Accept Terms and Conditions" />
                                        {formik.errors.acceptTerms ? <p className='text-danger'>{formik.errors.acceptTerms}</p> : null}
                                    </div>
                                    <div className='col-md-2 mt-5'>
                                        <Button type='submit' variant="contained">Save Form</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
            {/* /MODAL  */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div className='container'>
                            <div>
                                <h5>Form Validation Setup</h5>
                                    <p>Install package  npm install formik yup --save</p>
                                    <p>import { useFormik } from 'formik'; <br/> import * as Yup from 'yup'</p>
                                    <p>Add name for field -(e.g) name="registerName"</p>
                                    <p>Add value for field  value=[formik.values.regPassword]</p>
                                    <p>Add function for field onChange=[formik.handleChange]</p>
                                    <p>Intialize the formik const formik = useFormik, inside that we initial form values on the page loads.</p>
                                    <p>Add the validation schema with YUP </p>
                                    <p> Display error - [formik.errors.registerAge ? [formik.errors.registerAge] : null]</p>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default FormValidation