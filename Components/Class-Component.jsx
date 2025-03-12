import React, { Component } from "react";
import {Button, Container, Typography, TextField, Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';

class ClassComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            name: '',
            lastName: '',
            age: '',
            submitted: false,
        };
    }

    handleInputChange = (event) => 
    {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = (event) =>
    {
        event.preventDefault();
        this.setState({submitted: true});
    };

    render()
    {
        const {name, lastName, age, submitted} = this.state;
        const isFormValid = name && lastName && age;

        return
        (
            <Container>
            <Button 
            variant="contained" 
            color="primary"
            onClick={() => this.props.navigate('/')}
            style={{marginBottom: '20px'}}>
                To the main page
            </Button>
            <Typography 
            variant="h4" 
            gutterBottom>
                Class Component
            </Typography>
            <form onSubmit={this.handleSubmit}>
                <TextField
                label="Name"
                name="name"
                value={name}
                placeholder="Enter name"
                onChange={this.handleInputChange}
                fullWidth
                margin="normal"
                required
                />
                <TextField
                label="Lastname"
                name="lastname"
                value={lastName}
                placeholder="Enter lastname"
                onChange={this.handleInputChange}
                fullWidth
                margin="normal"
                required
                />
                <TextField
                label="Age"
                name="age"
                value={age}
                placeholder="Enter age"
                onChange={this.handleInputChange}
                fullWidth
                margin="normal"
                required
                type="number"
                />
                <Button 
                type="submit" 
                variant="contained" 
                color={isFormValid ? 'primary' : 'error'}
                disabled={!isFormValid}
                fullWidth
                style={{marginTop: '20px'}}>
                Send
                </Button>
            </form>

            {
                submitted &&
                (
                    <Box mt={4}>
                        <Typography variant="h5">Submitted data:</Typography>
                        <Typography>Name: {name}</Typography>
                        <Typography>Last name: {lastName}</Typography>
                        <Typography>Age: {age}</Typography>
                    </Box>
                )
            }
            </Container>
        );
    }
}

export default function ClassComponentWrapper()
{
    const navigate = useNavigate();
    return <ClassComponent navigate={navigate}/>;
}