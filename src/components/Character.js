import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

export const Character = (props) => {
  // setting custom theme styles
  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 300,
      maxWidth: 345,
      minHeight: 400,
      maxHeight: 500,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    avatar: {
      backgroundColor: grey[900],
    },
  }));

  const classes = useStyles();
  return (
    // Cards displaying the mapped characters
    <Card className={classes.root} raised={true}>
      <CardHeader
        avatar={
          <Avatar aria-label='starwars' className={classes.avatar}>
            SW
          </Avatar>
        }
        title={props.character.name}
        subheader={props.character.birth_year}
      />
      <CardMedia
        className={classes.media}
        image={require('../images/starwars.jpg')}
        title='starwars'
      />
      <Box>
        <CardContent>
          <Box component='div'>Height: {props.character.height}</Box>
          <Box component='div'>Hair Color: {props.character.hair_color}</Box>
          <Box component='div'>Skin Color: {props.character.skin_color}</Box>
          <Box component='div'>Eye Color: {props.character.eye_color}</Box>
          <Box component='div'>Gender: {props.character.gender}</Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Character;
