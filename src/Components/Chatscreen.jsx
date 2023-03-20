import React, { useState } from 'react';
import "../Styles/Chatscreen.css";
import Avatar from '@mui/material/Avatar';


function Chatscreen() {
        const [input, setInput] = useState('');
        const [messages, setMessseges] = useState([
                {
                        name: "Ellen",
                        image: "",
                        message: "Whats up?"
                },
                {
                        name: "Ellen",
                        image: "",
                        message: "Whats up?"
                },
                {

                        message: "Whats up?"
                }
        ])
        const handlesend = e => {
                e.preventDefault();
                setMessseges([...messages, { messages: input }]);
                setInput("");
        }
        return (
                <div className='Chatscreen'>
                        <p>You matched with Gosia on 03/07/2018</p>
                        {messages.map((message) => (
                                message.name ? (
                                        <div className='chatScreen__message'>
                                                <Avatar
                                                        className="chatscreen_image"
                                                        alt={message.name}
                                                        src={message.image}
                                                />
                                                <p className='chatscreen_text'>{message.message}</p>
                                        </div>
                                ) :
                                        (<div className='chatScreen__message'>
                                                <p className='chatscreen_textUser'>{message.message}</p>
                                        </div>)

                        ))}

                        <div className='chatScreen_input'>
                                <form>
                                        <input type="text" className="chatscreen_inputfield" placeholder='Type Message here' value={input} onChange={e => setInput(e.target.value)} />
                                        <button className="chatscreen_inputButton" onClick={handlesend}>Send</button>
                                </form>
                        </div>
                </div>
        )
}

export default Chatscreen;