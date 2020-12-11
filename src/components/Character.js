import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const Character = (props) => {
  const {
    name,
    height,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
  } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transition', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: grey[900],
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const expandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='starwars' className={classes.avatar}>
            SW
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={birthYear}
      />
      <CardMedia
        className={classes.media}
        image='/src/images/starwars.jpg'
        title='starwars'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          <span>Height:{height}</span>
          <span>Hair Color:{hairColor}</span>
          <span>Skin Color:{skinColor}</span>
          <span>Eye Color:{eyeColor}</span>
          <span>Gender:{gender}</span>
          <span>Species:{species}</span>
          <span>HomeWorld:{homeworld}</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={expandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Extra:</Typography>
          <Typography paragraph>Vehicles: {vehicles}</Typography>
          <Typography paragraph>Starships: {starships}</Typography>
          <Typography paragraph>Films: {films}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Character;
