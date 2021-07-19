import {useContext, useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import BlogContext from "../Contexts/BlogContext";
import DropDown from "./DropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
    justifyContent: 'space-evenly',
  },
  media: {
    height: 0,
    paddingTop: '50%', // 16:9
  },
 
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    marginRight: "100px"
  }
}));

export default function BlogPost(props) {
  const classes = useStyles();
  const { setSelected, setSelectedBlog, setDeleted , deleted} = useContext(BlogContext)
  const [update, setUpdate] = useState(false)
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [url, setUrl] = useState('')
  const [content, setContent] = useState('')

  const handleClose = () => {
    setSelected(false)
    setSelectedBlog({})
  }

  const handleDelete = (id) => {
    fetch('https://sdi-mini-project-5-backend.herokuapp.com/blogs', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({blog_id: props.blog.blog_id}) // body data type must match "Content-Type" header
    })
    .then(() => {
      setDeleted(!deleted)
      setSelected(false)
      setSelectedBlog({})
    })     
    .catch(err => {
      console.error(err);
    })
  }

  const onUpdate = () => {
    const sendObj = {blog_id: props.blog.blog_id, title: title === '' ? props.blog.title : title, location: location === '' ? props.blog.location : location, image_url: url === '' ? props.blog.image_url : url, content: content === '' ? props.blog.content : content}
    fetch('https://sdi-mini-project-5-backend.herokuapp.com/blogs', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(sendObj) 
    })   
    .then(() => {
      setDeleted(!deleted)
      setSelected(false)
      setSelectedBlog({})
    })     
    .catch(err => {
      console.error(err);
    })
  }

  const change = (e) => {
    setLocation(e.target.value)
  }

  return (
    <Card className={classes.root}>
      {update === false && 
      <>
      <CardHeader
      action={
        <>
         <Button size="small" color="primary" onClick={() => setUpdate(true)} className={classes.button}>
          Update
        </Button>
         <Button size="small" color="primary" onClick={handleDelete} className={classes.button}>
          Delete
        </Button>
           <Button size="small" color="primary" onClick={handleClose} >
           Go Back
         </Button>
        </>
      }
      title={props.blog.title}
      subheader={props.blog.location}
    />
     <CardMedia
        className={classes.media}
        image={props.blog.image_url}
        title="Paella "
      />

<CardContent>
          <Typography paragraph>
          {props.blog.content}
          </Typography>
          
        </CardContent>
    
    </>}

{update === true && 
<>
<CardHeader
      action={
        <>
         <Button size="small" color="primary" onClick={() => setUpdate(false)} className={classes.button}>
          Cancel
        </Button>
         <Button size="small" color="primary" onClick={onUpdate} className={classes.button}>
          Submit
        </Button>
        </>
      }
      title={ <><label for="title">Title: </label><input id="title" type="text" placeholder={props.blog.title} onChange={(e) => setTitle(e.target.value)}></input></>}
      subheader={<DropDown change={change}/>}
    />
    <CardContent>
      <div>
      <label for="image">Image URL: </label><input id="image" type="text" placeholder={props.blog.image_url} onChange={(e) => setUrl(e.target.value)}></input>
        </div>
        <div>
        <label for="content">Content: </label><textarea rows="5" id="content" type="textbox" placeholder={props.blog.content} onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
   
    
    </CardContent>
    </>
    
    }
       
    </Card>
  );
}