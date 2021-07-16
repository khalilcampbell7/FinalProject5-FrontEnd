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

export default function BlogCard() {
  const classes = useStyles();

  const handleReadBlog = () => {
    
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Location: 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to='/blog'>
        <Button size="small" color="primary" onClick={() => handleReadBlog()}>
          Read Blog
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}