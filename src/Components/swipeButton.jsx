import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BoltIcon from '@mui/icons-material/Bolt';

import "../Styles/swipe.css";

function SwipeButton() {
        return (
                <div className='Container'>
                        <div class="swipe-buttons">
                                <div class="swipe-button swipe-left">
                                        <i class="material-icons"><ReplayIcon fontSize="large" /></i>
                                </div>
                                <div class="swipe-button swipe-up">
                                        <i class="material-icons"><CloseIcon fontSize="large" /></i>
                                </div>
                                <div class="swipe-button swipe-down">
                                        <i class="material-icons"><StarRateIcon fontSize="large" /></i>
                                </div>
                                <div class="swipe-button swipe-right">
                                        <i class="material-icons"><FavoriteIcon fontSize="large" /></i>
                                </div>
                                <div class="swipe-button swipe-lightening">
                                        <i class="material-icons"><BoltIcon fontSize="large" /></i>
                                </div>
                        </div>
                </div>
        )
}

export default SwipeButton;