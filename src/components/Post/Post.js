import React, { useState, useEffect } from 'react';
import './Post.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));



function Post() {

    const [expanded, setExpanded] = React.useState(false);
    const [liked, setLiked] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleLike = () => {
        setLiked(! liked);
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect( () => {
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error) {
        return <div>Error !!!</div>;
    } else if(! isLoaded) {
        return <div>Loading ...Please wait.</div>;
    } else {
        return(
            <ul>
                {postList.map(post => (
                    <li>
                        <div className='postContainer' >
                        <Card sx={{ maxWidth: 345 , marginTop:10}}>
                        <CardHeader
                            avatar={
                                <Link style={{boxShadow:"none", textDecoration:"none"}} to={{pathname : '/users/' + post.userId}}>
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                               {post.userName.charAt(0).toUpperCase()}
                            </Avatar>
                            </Link>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                           
                            title={post.title}
                            
                        />
                        
                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {post.text}
                        </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton 
                            onClick={handleLike}
                            aria-label="add to favorites">
                            <FavoriteIcon style={ liked ? { color: "red"} : null} />
                            </IconButton>
                            
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <CommentIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            
                            </CardContent>
                        </Collapse>
                        </Card>
                          </div>
                    </li>
                ))}
            </ul>
        )
    }
}


export default Post;