import React from 'react';
import "../Styles/Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomePaje from './HomePage';
import Chatscreen from './Chatscreen';
import Chats from './Chats';
import TinderCards from './tinderCard';
import { Routes, Route, Link, useLocation } from "react-router-dom";



function Header() {
        const location = useLocation();
        const isChatScreen = location.pathname.startsWith("/chats/");
        
        return (
                <>
                        <section>
                                <div className='Header'>
                                        {isChatScreen ? (
                                                <Link to="/Chats">
                                                        <IconButton>
                                                                <ArrowBackIosIcon className="header_icon" fontSize='large' />
                                                        </IconButton>
                                                </Link>
                                        ) : (
                                                <Link to="/Cards">
                                                        <IconButton>
                                                                <PersonIcon className="header_icon" fontSize='large' />
                                                        </IconButton>
                                                </Link>
                                        )}


                                        <Link to="/Home">
                                                <IconButton>
                                                        <img
                                                                className='header_img'
                                                                src="https://www.emrearal.com/wp-content/uploads/2017/08/tinder-icon-new.png"
                                                                alt='tinder-log'>
                                                        </img>
                                                </IconButton>
                                        </Link>

                                         <Link to="/Chats">  <IconButton><ForumIcon className="header_icon" fontSize='large' /></IconButton></Link> 
                                </div>
                        </section>
                        <Routes>
                                <Route path="/Home" element={<HomePaje />} />
                                <Route path="/Cards" element={<TinderCards />} />
                                <Route path="/Chats" element={<Chats />} />
                                <Route path="/chats/:name" element={<Chatscreen />} />

                        </Routes>
                </>
        )
}

export default Header;