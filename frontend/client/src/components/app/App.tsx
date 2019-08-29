import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import NavBar from '../nav-bar/nav-bar.component';
import './App.css';
import HomePage from '../homepage/homepage.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }),
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomePage />
    </div>
  );
}
