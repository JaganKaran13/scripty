import * as React from 'react';
import NavBar from '../nav-bar/nav-bar.component';
import Card from '../card/card.component';
import Grid from '@material-ui/core/Grid';
import './card-list.styles.css';

const CardList = () => (
  <div className="homepage">
    <Grid container spacing={3}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Card />
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Card />
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
  </div>
)

export default CardList;
