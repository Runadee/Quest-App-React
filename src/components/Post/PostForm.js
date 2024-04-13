import React, { useState, useEffect } from 'react';
import './Post.css'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';





function PostForm() {

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
                           
                            title={<OutlinedInput id='outlined-adorment-amount' multiline placeholder='title' inputProps={{maxlenght : 25}} 
                                                  fullWidth  >
                                                  
                                   </OutlinedInput>}
                            
                        />
                        
                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <OutlinedInput id='outlined-adorment-amount' multiline placeholder='text' inputProps={{maxlenght : 250}} 
                                           fullWidth >

                            </OutlinedInput>
                        </Typography>
                        </CardContent>
                        <CardActions disableSpacing style={{ justifyContent: 'flex-end' }} >
                            
                            <Button variant='contained' color='primary'  >Post</Button>
                           
                        </CardActions>
                       
                            
                        
                        </Card>
                          </div>
                    </li>
                ))}
            </ul>
        )
    }
}


export default PostForm;