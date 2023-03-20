import React from 'react';
import Chat from "./Chat";

function Chats() {
        return (
                <div className='chats'>
                        <Chat
                                name="Mark"
                                message="Yo whats up! 🌴"
                                timestamp="40 seconds ago"
                                profilePic=""

                        />
                        <Chat
                                name="Elen"
                                message="Yo whats up! 🐕"
                                timestamp="40 seconds ago"
                                profilePic="..."

                        /> <Chat
                                name="Gosia"
                                message="Yo whats up! 💖💖💖💖💖"
                                timestamp="40 seconds ago"
                                profilePic="..."

                        /> <Chat
                                name="Wiktoria"
                                message="Yo whats up! 🐖"
                                timestamp="40 seconds ago"
                                profilePic="..."

                        /> <Chat
                                name="Ida"
                                message="Yo whats up! 🎓"
                                timestamp="40 seconds ago"
                                profilePic="..."

                        /> <Chat
                                name="Karolina"
                                message="Yo whats up! 🏢"
                                timestamp="40 seconds ago"
                                profilePic="https://s.yimg.com/sr/imgv1/1/2be5c71b-2b0b-32c2-82c2-00e84836c4a0"

                        />
                </div>
        )
}

export default Chats;