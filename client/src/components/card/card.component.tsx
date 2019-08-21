import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import './card.styles.css';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
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
});

export default function SimpleCard() {
  const classes = useStyles({});

  return (
    <div className="card__outer-section">
      <Link to="/apt-detail/1" style={{ textDecoration: 'none' }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              <Avatar alt="Remy Sharp" src="https://1000logos.net/wp-content/uploads/2017/07/Logo-Docker-500x394.jpg" className={classes.bigAvatar} />
              Docker [sample]
        </Typography>
            <Typography className={classes.pos} color="textSecondary">
            </Typography>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolores, mollitia repellendus nostrum reprehenderit facere ipsa? Esse, incidunt. Quibusdam voluptas quas earum, esse praesentium ipsam aperiam iure fugit. Labore, quaerat.
          <br />
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}