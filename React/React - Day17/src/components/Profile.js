import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
export const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '250px',
    marginRight: '200px'
  },
});

export default function Profile() {

  const classes = useStyles();
  const auth = useSelector((state) => state.auth)
  const userInfo = useSelector((state) => state.userInfo)
  return (
    <>
      {auth &&
        <Card className={classes.root}  >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={'https://i.ytimg.com/vi/u-ngXpZKHvI/mqdefault_live.jpg'}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {`${userInfo.firstName} ${userInfo.lastName}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {userInfo.emailId}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>}
      {!auth && <Navigate to="/videos" />}
    </>
  )
}
