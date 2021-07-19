import { useEffect, useState } from "react";
import BlogCard from "./BlogCard"
import DropDown from "./DropDown"
import { makeStyles } from '@material-ui/core/styles';
import BlogContext from '../Contexts/BlogContext';
import BlogPost from "./BlogPost";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flex: 1,
        flexFlow: "row wrap",
        justifyContent: "space-evenly",
        padding: "10px"
    }
  }));


const ViewBlog = () => {
    const classes = useStyles();
    const [blogs, setBlogs] = useState([])
    const [selected, setSelected] = useState(false)
    const [selectedBlog, setSelectedBlog] = useState({})
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        fetch('https://sdi-mini-project-5-backend.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(err => console.log(err))
    }, [deleted])

    return (
        <BlogContext.Provider value={{ setSelected, setSelectedBlog, setDeleted, deleted}}>

        {selected === true && selectedBlog !== {} &&
           <BlogPost blog={selectedBlog}/>
        }
        {selected === false && 
        <>
        <DropDown/>
        <div className={classes.container}>
            {blogs !== [] && blogs.map((data) => {
                return (
                        <BlogCard blog={data}/>
                )
            })}
        </div>
        </>}
        
        </BlogContext.Provider>
    )
}

export default ViewBlog