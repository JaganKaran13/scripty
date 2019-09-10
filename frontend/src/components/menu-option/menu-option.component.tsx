import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './menu-option.styles.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        minWidth: 275,
        padding: 20,
    },
    fab: {
        margin: theme.spacing(1),
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 120,
    },
    alignRight: {
        alignItems: 'right',
    }
}));


export default function MenuOption() {
    const classes = useStyles({});
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={4} sm={6} md={4} lg={4}>

                    {/* Blockchain */}
                    <Link to='' style={{textDecoration: 'none'}} >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="../../menu-option/logo192.png"
                            title="Contemplative Reptile"
                        />
                        <CardActions>
                            <Button variant="outlined" size="small" color="primary">
                                Add to stack
                            </Button>
                        </CardActions>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={4} sm={6} md={4} lg={4}>
                <Link to='' style={{textDecoration: 'none'}} >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="../../menu-option/magento-logo-vector.png"
                            title="Contemplative Reptile"
                        />
                        <CardActions>
                        <Button variant="outlined" size="small" color="primary">
                            add to stack
                        </Button>
                        </CardActions>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={4} sm={6} md={4} lg={4}>
                <Link to='' style={{textDecoration: 'none'}} >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="../../menu-option/react-logo.png"
                            title="Contemplative Reptile"
                        />
                        <CardActions className={classes.alignRight}>
                            <Button variant="outlined" size="small" color="primary">
                                Add to stack
                            </Button>
                        </CardActions>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={4} sm={6} md={4} lg={4}>
                <Link to='' style={{textDecoration: 'none'}} >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="../../menu-option/logo192.png"
                            title="Contemplative Reptile"
                        />
                        <CardActions>
                            <Button variant="outlined" size="small" color="primary">
                                Add to stack
                            </Button>
                        </CardActions>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={4} sm={6} md={4} lg={4}>
                <Link to='' style={{textDecoration: 'none'}} >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="../../menu-option/logo192.png"
                            title="Contemplative Reptile"
                        />
                        <CardActions className='menu-option__button'>
                            <Button variant="outlined" size="small" color="primary">
                                Add to stack
                            </Button>
                        </CardActions>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={4} sm={6} md={4} lg={4}>
                <Link to='' style={{textDecoration: 'none'}} >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="../../menu-option/logo192.png"
                            title="Contemplative Reptile"
                        />
                        <CardActions>
                            <Button variant="outlined" size="small" color="primary">
                                Add to stack
                            </Button>
                        </CardActions>
                    </Card>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}


