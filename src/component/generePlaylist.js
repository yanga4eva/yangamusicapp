import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import NoSsr from '@material-ui/core/NoSsr';
import {Grid, Typography, Card, Button, CardMedia, CardContent, CardActions, CardActionArea} from '@material-ui/core'


// dotenv.config()
// require('dotenv').config()

const styles = theme => ({
  root: {
    maxWidth: 320,
    minWidth: 'auto',
    position: 'relative',

  },
  media: {
    height: 140,
    
  },
  header2: {
    maxWidth: 'auto',
    margin: 'auto',
   color: 'white',
   
  },
  typography: {
    padding: theme.spacing(2),
    display: 'block',    
},
  
});

class ImgMediaCard extends React.Component {
  constructor(props) {
  super(props);

  this.state = { 
    data: [],
    snippets: [],
    title: [],
    imgArt: []
   }
  }
   componentDidMount() {
    fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCrKZcyOJVWnJ60zM1XWllNw&maxResults=6&fields=items%2Fid%2C%20items%2Fsnippet(title%2C%20description%2C%20thumbnails%2C%20channelTitle)&key=' + process.env.REACT_APP_YOUTUBE_API_KEY)
      .then(response => response.json())
      .then(data => this.setState({ snippets: data.items }));
  }


  render() { 

    const {classes} = this.props
    const snips = this.state.snippets
    console.log(this.state.snippets[0])
    return(
      <NoSsr>
            <Grid  container className={classes.header2} spacing={3} style={{justify: 'center'}} >
      
      {
         snips.map((snip) => {
          return(
            <Grid  >
          <Typography  className={classes.typography}>
                   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={snip.snippet.thumbnails.high.url}
          title={snip.snippet.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {snip.snippet.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {snip.snippet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Play On YT Music
        </Button>
        <Button size="small" color="primary">
          View Playlist
        </Button>
      </CardActions>
    </Card>
            </Typography>
            </Grid>
          )
        })
      }
      </Grid>
      </NoSsr>
    )
    


  //   return ( 
    //   <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    //         across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //     <Button size="small" color="primary">
    //       Learn More
    //     </Button>
    //   </CardActions>
    // </Card>
  // );
}
  }
 
export default withStyles (styles, { withTheme: true }) (ImgMediaCard);