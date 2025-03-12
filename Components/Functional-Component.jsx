import React, {useState, useEffect} from 'react';
import 
{
    Button,
    TextField,
    Container,
    Typography,
    Box,
    Select,
    MenuItem,
    Switch,
    Divider,
    CircularProgress,
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const FunctionalComponent = () =>
{
    const navigate = useNavigate();
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [applyFilters, setApplyFilters] = useState('');
    const [users, setUsers] = useState('');
    const [loading, setLoading] = useState('');

    const fetchUsers = async () =>
    {
        setLoading(true);
        try
        {
            const response = await axios.get
            (
                'https://randomuser.me/api/?results=10&inc=gender,name,picture,dob'
            );
            setUsers(response.data.results);
        }
        catch (error)
        {
            console.error('Error fetching users:', error);
        }
        finally
        {
            setLoading(false);
        }
    };

    const filterUsers = users.filter((user) =>
    {
        if (!applyFilters) return true;
        const age = user.dob.age;
        return (!minAge || age >= minAge) && (!maxAge || age <= maxAge);
    }).sort((a,b) =>
    {
        if (sortOrder === 'ascending') return a.dob.age - b.dob.age;
        if (sortOrder === 'descending') return b.dob.age - a.dob.age;
        return 0;
    });

    useEffect(() =>
    {
        fetchUsers();
    }, []);

    return
    (
        <Container>
          <Button 
          variant="contained" 
          color="primary"
          onClick={() => navigate('/')}
          style={{marginBottom: '20px'}}>
            To the main page
          </Button>
          <Typography variant="h4" gutterBottom>
            Functional Component
          </Typography>
          <Box mb={4}>
            <TextField
              label="Minimal age"
              value={minAge}
              onChange={(e) => setMinAge(e.target.value)}
              fullWidth
              margin="normal"
              type="number"
            />
            <TextField
              label="Maximum age"
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
              fullWidth
              margin="normal"
              type="number"
            />
            <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            fullWidth
            margin="dense">
                <MenuItem value="no-sort">Without filters</MenuItem>
                <MenuItem value="ascending">Ascending order</MenuItem>
                <MenuItem value="descending">Descending order</MenuItem>
            </Select>
            <Box 
            display="flex"
            alignItems="center"
            mt={2}>
            <Switch
              checked={applyFilters}
              onChange={(e) => setApplyFilters(e.target.checked)}
            />
            <Typography>Consider filters</Typography>
            </Box>
            <Button 
            variant="contained" 
            color="primary"
            onClick={fetchUsers}
            fullWidth
            disabled={loading}>
                {loading ? <CircularProgress size={24}/> : 'Request'}
            </Button>
          </Box>

          <Divider/>

          <Box mt={4}>
            {loading ? 
            (
                <Box
                display="flex"
                justifyContent="center">
                    <CircularProgress/>
                </Box>
            ) : (
                filterUsers.map((user) =>
                (
                    <Box
                    key={user.login.uuid}
                    mb={2}
                    p={2}
                    border={1}
                    borderRadius={2}
                    display="flex"
                    allignItems="center">
                        <img 
                        src={user.picture.medium} 
                        alt={`${user.name.first} ${user.name.last}`}
                        style={{borderRadius: '50%', marginRight: '16px'}} />
                        <Box>
                            <Typography variant="h6">
                                {user.name.first} {user.name.last}
                            </Typography>
                            <Typography>Age: {user.dob.age}</Typography>
                            <Typography>Sex: {user.gender}</Typography>
                        </Box>
                    </Box>
                ))
            )}
          </Box>
        </Container>
    );
};

export default FunctionalComponent;