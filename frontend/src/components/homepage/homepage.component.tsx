import { CardMedia } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import image from '../../assets/images/logo2.gif';
import Card from '../card/card.component';
import MenuOption from '../menu-option/menu-option.component';
import Container from '@material-ui/core/Container';

import './homepage.style.css';

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
        <h3 className='home-page__heading'>Setting up you development environment just got a whole lot easier, Just add the applications to the stack, download and run the script file that gets downloaded. You're all done</h3>
      </Grid>
      <Grid item xs={1}>
      </Grid>
    </Grid>
    <Container>
    <MenuOption />
    </Container>

  </div>
)

export default HomePage;
