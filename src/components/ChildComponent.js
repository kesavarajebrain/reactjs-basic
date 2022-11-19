import React from 'react';
import Button from '@mui/material/Button';
//dialog
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
// modal transition or silde settings
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
function ChildComponent(props) {
    //Model
    const [open, setOpenDialog] = React.useState(false);
    //model open functions
    function openDocs() {
        setOpenDialog(true);
    }
    const handleClose = () => {
        setOpenDialog(false);
    };
    console.log(props)
    return (
        <div className='homeCommon'>
            <div class="middle">
                <center>
                    <h3>Parent to Child Communication using PROPS</h3>
                    <Button variant="contained" onClick={openDocs} size="small" color="primary"> View Docs </Button>
                </center>
                <br></br>
                <h5>This is Child Component</h5>
                <h6>String : {props.message}</h6>
                <h6>Array:</h6>
                <span>{props.userData.map((x,index) => <div>{index+1}.{x.name} - {x.age} - {x.city}</div>)}</span>
                <marquee>{props.message}</marquee>
            </div>
            <div class="bottomleft">
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
                                <h5>{props.docs.Title}</h5>
                                <p>{props.docs.Content}</p>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <div class="bottomleft">
                <p>Props</p>
            </div>
        </div>
    )
}

export default ChildComponent