import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import './MessageSender.css';

function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar 
                    src=""
                />
                <form>
                    <input 
                        value={input}
                        onChange = {e => setInput(e.target.value)}
                        className="messageSender_input"
                        placeholder="What's on your Mind, Username"
                    />
                    <input 
                        value={imageUrl}
                        onChange = {e => setImageUrl(e.target.value)}
                        placeholder="image"
                    />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="message__options">
                    <VideocamIcon style = {{ color: "red"}}/>
                    <h3>Live video</h3>
                </div>
                <div className="message__options">
                    <PhotoLibraryIcon  style = {{ color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="message__options">
                    <InsertEmoticonIcon  style = {{ color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
