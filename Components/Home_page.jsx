import React from 'react';
import {Button, Container, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Home = () =>
{
    const navigate = useNavigate();
    return
    (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Main page
            </Typography>
            <Button variant="contained" color="primary" fullWidth 
            onClick={() => navigate('/class-component')}
            style={{marginBottom: '10px'}}>
              Class component
            </Button>
            <Button variant="contained" color="secondary" fullWidth
            onClick={() => navigate('/functional-component')}>
              Functional component
            </Button>
        </Container>
    );
};

export default Home;
