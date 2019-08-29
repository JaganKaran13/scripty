import * as React from 'react';
import NavBar from '../nav-bar/nav-bar.component';
import Grid from '@material-ui/core/Grid';
import Card from '../card/card.component';
import image from '../../assets/images/logo2.gif';
import { CardMedia } from '@material-ui/core';


const styles =
{

  media: {
    height: 0,
    paddingTop: '70.25%', // 16:9,
    marginTop: '30'
  }
};
const HomePage = () => (
  <div className="homepage">
    <Grid container>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={5}>
        <CardMedia image={image} style={styles.media}>
        </CardMedia>

      </Grid>
      <Grid item xs={5}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ut fugiat atque aliquid, autem ullam omnis et provident nihil impedit quibusdam nostrum tempora accusantium molestias laborum mollitia fugit recusandae tenetur?</p>
      </Grid>
      <Grid item xs={1}>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
      <Grid item xs={4}>
        <Card />
      </Grid>
    </Grid>
  </div>
)

export default HomePage;
