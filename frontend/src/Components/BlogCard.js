import {useState, useContext} from 'react';
import BlogContext from "../Contexts/BlogContext"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: "30%",
    marginTop: "10px",
  },
  media: {
    height: 140,
  },
});

export default function BlogCard(props) {
  const classes = useStyles();
  const { setSelected, setSelectedBlog } = useContext(BlogContext)

  const handleClick = () => {
    setSelected(true)
    setSelectedBlog(props.blog)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.blog.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.blog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Location: {props.blog.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Read Blog
        </Button>
      </CardActions>
    </Card>
  );
}