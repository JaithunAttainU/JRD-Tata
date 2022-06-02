import React from 'react'
import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'

export default function VideoCard(props) {
  const classes = useStyles();
  const { snippet } = props.video;
  const { default: videoUrl } = snippet.thumbnails
  return (
    <Grid item xs={12} md={4} sm={6} xl={3}>
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={videoUrl.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {snippet.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {snippet.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </Grid>
  )
}
