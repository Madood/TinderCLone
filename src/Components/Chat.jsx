import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Chat.css"
import Avatar from '@mui/material/Avatar';

function Chat({ name, message, profilePic, timestamp }) {
        return (

                <Link to={`/chats/${name}`}>
                        <div className='chat'>

                                <Avatar className="chat_image" fontsize='large' alt={name} src={profilePic} />
                                <div className='chat_details'>
                                        <h2>{name}</h2>
                                        <p>{message}</p>
                                </div>
                                <p className='chat_timestamp'>{timestamp}</p>

                        </div>
                </Link>
        )
}

export default Chat