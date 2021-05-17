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


export default function Party({ name, street, images, price,date, attendees, maxAttendees, city }) {
  

    return (
      <Card className="card">
        <CardActionArea>
          <Box display="flex" p={1}>
            <CardMedia
              className="image"
              component="img"
              alt="party-image"
              height="200"
              image={images[0]}
            />
            <CardContent className="content">
              <Typography gutterBottom variant="h6" component="h2">
                {name}
              </Typography>
              <span>{date.substring(0, 15)}</span>
              <hr className="hr1" />

              <p>
                {street}, {city}
              </p>

              <p>
                {attendees.length} attendees (max: {maxAttendees})
              </p>
              <p>{price}€</p>
              <p>Average rating of reviews</p>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    );
}
