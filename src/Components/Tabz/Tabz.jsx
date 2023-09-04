import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Tabz.css";
import Costing from './Subcomponent/Costing';
import Include from './Subcomponent/Include';
import House from './Subcomponent/House';
import Show from './Subcomponent/Show';
import Offers from './Subcomponent/Offers';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Tabz() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<div className=' mt-5 container jj'>
<Box  sx={{ width: '100%'  }} >
      <Box  sx= {{ borderBottom: 1, borderTop : 1,borderColor:  'divider' }}> 
        <Tabs className=' justifycentre' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='ttt' label="How Much It Costs" {...a11yProps(0)} />
          <Tab className='ttt' label="What's Include"  {...a11yProps(1)} />
          <Tab className='ttt' label="How Do I Price My House" {...a11yProps(2)} />
          <Tab className='ttt' label="Who Will Show My House" {...a11yProps(3)} />
          <Tab className='ttt' label="What About Offers And Negociationss" {...a11yProps(4)} />
        </Tabs>
      </Box> 
      <CustomTabPanel  value={value} index={0} >
      <Costing/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Include/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <House/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Show/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
  <Offers/>
      </CustomTabPanel>
    </Box>
</div>
  );
}
