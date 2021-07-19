import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import wetkoala from '../Images/wetkoala.jpg'
import {Redirect} from "react-router-dom";
import DropDown from "./DropDown";


const useStyles = makeStyles({
  root: {
    maxWidth: 900,
    justifyContent: "center",
  },
  media: {
    height: 140,
  },

  extendTextField: {
    maxWidth: 900,
    justifyContent: "center",

  },
});



export default function MediaCard() {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [url, setUrl] = useState('')
  const [content, setContent] = useState('')


  const postBlogClick = () => {
    const sendObj = { title: title , location: location, image_url: url , content: content}
    fetch('https://sdi-mini-project-5-backend.herokuapp.com/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(sendObj) 
    })
    .then(() => {
      alert("You successfully submitted your blog") 
    } )
    .catch(err => console.log(err))
  }

  const change = (e) => {
    setLocation(e.target.value)
  }

  return (
    <>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={wetkoala}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div><TextField label="Your Blog Post Title" id="outlined-basic" variant="outlined" onChange={(e) => setTitle(e.target.value)}/></div>
          <TextField label="Image URL"  id="outlined-basic" variant="outlined" onChange={(e) => setUrl(e.target.value)}/>
          <DropDown change={change}/>
          <TextField id="outlined-basic" className= {classes.extendTextField}label="Write Your Blog Post" variant="outlined" onChange={(e) => setContent(e.target.value)} />
        </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Button variant="outlined" onClick={() => postBlogClick()} color="secondary">
        Post Blog
      </Button>
    </>
  );
}
  
