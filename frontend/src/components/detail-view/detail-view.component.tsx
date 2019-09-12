import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import './detail-view.styles.css';


const useStyles = makeStyles((theme: Theme) => createStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default function ApplicationDetailCardView() {
  const classes = useStyles({});

  return (
    <div className="detail-section">
      <Card className={classes.card}>
        <Avatar alt="Remy Sharp" src="https://1000logos.net/wp-content/uploads/2017/07/Logo-Docker-500x394.jpg" className={classes.bigAvatar} />
        <CardContent>
          <Typography variant="h5" component="h2">
            Docker
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi possimus, tempora sequi eius molestiae perferendis dolores voluptatum ratione deleniti rem. Eius a sed perferendis nemo ullam, aliquam nostrum quod hic.
          <br />
          </Typography>
        </CardContent>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Select OS</InputLabel>
          <Select
            value='12'
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Select Version</InputLabel>
          <Select
            value='12'
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <CardActions>
          <Button size="small">Download Script</Button>
        </CardActions>
      </Card>
    </div>
  );
}