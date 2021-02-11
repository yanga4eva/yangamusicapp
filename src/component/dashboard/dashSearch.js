import React, { useState } from 'react'
import cx from 'clsx';
import {card, Button, Card, Alert} from 'react-bootstrap'
import { Divider,NoSsr, Box, Avatar, Grid, Link, Typography, Tabs } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: 10,
    },
    // paper: {
    //   padding: theme.spacing(3),
    //   border: "none",
    // //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    // },
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px'
      },
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
       paddingLeft: '5px'
       
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
  }));


export default function Dashboard() {
    const classes = useStyles();


return (
    <><Grid container spacing={3} >
                <Grid item xs={2} />
                <Grid item xs={8} className={classes.searchGrid}>
                  <div className={classes.search}>
                    <SearchIcon />
                    <InputBase
                     placeholder="Search friends, people, playlist..."
                     multiline
                     classes={{
                     root: classes.inputRoot,
                     input: classes.inputInput,
                     }}
                    inputProps={{ 'aria-label': 'search' }} />
                 </div>
                </Grid>
                <Grid item xs={2}>
                </Grid>
              </Grid>

              <br /><br /><br />


              <Grid container spacing={3} style={{}}>
                <Grid xs />
                <Grid xs={9}>
                  {/* <DTabs /> */}
                </Grid>
                <Grid xs />
              </Grid>

</>
)
}