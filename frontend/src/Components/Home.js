import { makeStyles } from '@material-ui/core/styles';
import fishPhoto from '../Images/home_image.jpg';

const useStyles = makeStyles(() => ({
    img: {
        maxWidth: '100%',
        height: 'auto'
    },

    container: {
        display:'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1
    }

  }));

const Home = () =>{
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src={fishPhoto} alt='fishing' className={classes.img}/>
        </div>
    )
}


export default Home