import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Doctorreg from '../doctorreg/Doctorreg';
import { Link } from 'react-router-dom';
import NearYou from './NearYou';


export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs className='px-4' value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="Search Doctors" />
        <Tab component={Link} to="/NearYou" label ="Near You" />
        <Tab label="Doctors Login" />
        <Tab label="About Us" />
        
      </Tabs>
     
    </Box>
    
    </>
   
    
  );
}