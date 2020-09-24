import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
            profilePic="https://pbs.twimg.com/profile_images/1235776474260664324/wZfXt34F_400x400.jpg"
            message="An Intersting Day"
            timestamp="This is a TimeStramp..."
            username="Ruhani Sharma"
            image="https://wikibio.in/wp-content/uploads/2019/12/Ruhani-Sharma-smiling.jpg"
            />
            <Post 
            profilePic="https://pbs.twimg.com/profile_images/1256500530244960257/Gf0oz7A7.jpg"
            message="New Movie SAHOO"
            timestamp="this is a time Stramp"
            image="https://images.news18.com/ibnlive/uploads/2020/03/Shraddha-Kapoor-prabhas.jpg"
            />

          
        
            
        </div>
    )
}

export default Feed
