import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '3px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
function State() {
    const msg = 'When the state changes, React re-renders the component. Historically, state could only be used in class components. Using hooks, you can apply state to functional components too.'
    const [text, setText] = useState("Click below button to change text");
    const [count, setCount] = useState(0);
    function changeText() {
        setText('Text changed using state')
    }

    function counter(){
        setCount(count+1);
    }
    return (
        <div className='homeCommon'>
            <div class="middle">
                <h3>STATE</h3>
                <Card sx={{ minWidth: 275 }}>
                    <p>{msg}</p>
                    <h3>{text}</h3>
                    <h3>{count}</h3>
                </Card>
                <br></br>
                <Button variant="contained" size="small" color="primary" onClick={changeText}> Change Text</Button> &nbsp;
                <Button variant="contained" size="small" color="primary" onClick={counter}> Count</Button>
            </div>
            <div class="bottomleft">
                <p>State</p>
            </div>
        </div>
    )
}

export default State