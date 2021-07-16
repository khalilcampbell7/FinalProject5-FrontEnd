import BlogCard from "./BlogCard"
import DropDown from "./DropDown"
import { makeStyles } from '@material-ui/core/styles';

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

    return (
        <>
        <DropDown/>
        <div className={classes.container}>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
        </>
    )
}

export default ViewBlog