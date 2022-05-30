import React from 'react'
import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'

export default function VideoCard() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4} sm={6} xl={3}>
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://pixabay.com/get/g4faa733957558ca9dfbf246456bfb474115f85d52335a9655a43a0a5d0ec556213ed111870c19cc16dd29a0a8b5450d47bf64766954da0b5b9a772b54f2548c41417033cdde8a75365a6d5f264a886b4_1280.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </Grid>
  )
}
