import React from 'react'
import "@fontsource/roboto";
import "./PartyCard.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


export default function Party({ name, description, city }) {
  console.log(city)
  const classes = useStyles();
    return (
      <Card className="card" className={classes.root}>
        <CardActionArea>
          <Box display="flex" p={1}>
            <CardMedia
              className="image"
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/house1.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {city}
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>

        <CardActions></CardActions>
      </Card>
    );
}
