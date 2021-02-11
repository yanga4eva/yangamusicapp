import React, { useState } from 'react'
import {  Grid,  Typography, Paper } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import FollowCard from '../navHeader/followCard'
import Trending from '../trending'
import GenrePL from '../generePlaylist'
import DashSearch from './dashSearch'




const useStyles = makeStyles((theme) => ({
header1: {
    paddingTop: '3px',
    margin: 'auto',
   backgroundColor: '#2596be',
   color: 'white',
   paddingLeft: '5px'
  },
  header2: {
    display: 'flex',
    margin: 'auto',
   color: 'white',
   
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
  gridgenre: {
    margin: 'auto',
    alignContent: 'center'
    },
  search: {
    position: 'relative',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    borderRadius: 3,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'fade(theme.palette.common.white, 0.15)',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  card: {
    // width: '100%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
  },
  logoHead: {
    margin: 'auto',

  },
  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff',
  },
  headline: {
    color: '#122740',
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  link: {
    color: '#2281bb',
    padding: '0 0.25rem',
    fontSize: '0.875rem',
  },
  actions: {
    color: '#BDC9D7'
  },
  divider: {
    backgroundColor: '#d9e2ee',
    margin: '0 20px',
  },
typography: {
    padding: theme.spacing(1),
    display: 'block',    
},
searchGrid: {
    textAlign: 'center',
    marginTop:'50px'
},
followGrid: {
  marginTop:'100px',
  marginRight: '15px',
  marginLeft: '15px'
}
}))

export default function DashboardHome() {
    const classes = useStyles();

   return (
   <>
    <DashSearch />
   
      <div className={classes.followGrid}>
      <Grid container spacing={3} >
        <Grid item xs={12} lg={2} >
          <Grid container className={classes.header1}>
          <h3>Trending</h3>
          <br />
          </Grid>
          <br/><br/>
          
          <Trending />
        </Grid>
        <Grid item xs={12} lg={7} >
          <Grid container className={classes.header1} >
        <h3>Top Genre</h3>
          <br/>
          </Grid>
          <br/><br />
          {/* <Grid  container className={classes.header2} xs={12} > */}
          {/* <Typography  className={classes.typography}>           */}
          {/* </Typography>          */}
          <GenrePL />
          {/* </Grid> */}
          
        </Grid>
        <Grid item xs={12} lg={3} >
          <Grid  container className={classes.header1}>
        <h3>Who to follow</h3>
        <br />
        </Grid>
          <br/><br />
        <FollowCard />
        </Grid>
      </Grid>
    </div>


    </>)
}