import React from "react";
import Post from "../Post/Post";
import PostForm from "../Post/PostForm";



function Home() {
     return(
        <div>
            <PostForm></PostForm>
            <Post></Post>
        </div>
     )
}

export default Home;