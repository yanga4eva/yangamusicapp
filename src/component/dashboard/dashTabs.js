import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DashSearch from './dashSearch';
import {Tabs, Grid, Tab, Typography, Box} from '@material-ui/core';
import DashHome from './dashboardHome'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <>
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
    width: 'auto'
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <>
   
    <div className={classes.root}>
        <Grid container >
        <Grid xs={4}/>
        <Grid >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
          <Tab label="Home" {...a11yProps(0)} style={{outline: 'none'}} />
          <Tab label="Playlists" {...a11yProps(1)} style={{outline: 'none'}}/>
          <Tab label="Followers" {...a11yProps(2)} style={{outline: 'none'}}/>
        </Tabs>
        </Grid  >
        <Grid xs={4} />
        </Grid>
        <br /><br /><br />
      <TabPanel value={value} index={0}>
        <DashHome />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
    </>
  );
}
