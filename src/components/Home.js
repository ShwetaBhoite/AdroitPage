import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import { Card, Button, Container, makeStyles, CardContent, CardActions,Typography, 
          CardActionArea, CardMedia, createMuiTheme} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import './_home.css'
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
   
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(1),
    
  },
 
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (

    <Fragment>
  <Helmet><title>Adroit-Page</title></Helmet>

    <Container className={classes.root} spacing={3}>
    <div className={classes.root}>
      <Grid container
       direction="row"
  justify="space-around"
  alignItems="flex-start">


        <Grid Container spacing={3} item sm={3} elevation={3}  direction="column" justify="center" >
         <Grid item >
            <Card>
            <CardContent style={{height: 400}}t></CardContent>
            </Card>
          </Grid>
               <h>.</h>
          <Grid item>
            <Card>
            <CardContent style={{height: 40}}t></CardContent>
            </Card>
          </Grid>

        </Grid>

      <Grid item sm={5}>
          <Card elevation={3}>
           <CardActionArea>
           <CardMedia image="cap1.PNG" style={{height: 454}}/>
           <CardContent >
              <Typography variant="h6">Hmm, no Classes or Series drafts here</Typography>
              <Typography variant="h">Maybe you've puvlished them all,or haven't created any yet? Either way there is no time like the present to create a new Class or Series!!!..</Typography>
           </CardContent></CardActionArea>
                          <Button id="btn" >
                              Create new Class or Series
                          </Button>
            </Card>
        </Grid>

        <Grid Container spacing={3} item sm={3} elevation={3}  direction="column" justify="center" >
        <Grid item id="grid" elevation={3}>
           
          <body> 
            <label>
              <SearchIcon id="icn" style={{ fontSize: 30} } />
            </label> 
       <span> 
              <input id="input" type="text" placeholder="search in drafts..."/>
       </span> 
           </body> 

            
        </Grid>
               <h>.</h>
          <Grid item>
            <Card>
            <CardContent style={{height: 300}}t></CardContent>
            </Card>
          </Grid>

        </Grid>



        </Grid>
        
    </div>
    </Container>
    </Fragment>
  );
}
