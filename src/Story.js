import React, { useState } from 'react'
import './Story.css'
import { Avatar } from "@material-ui/core"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Story({ image, profilesSrc, title,onclick }) {
    return (
        <div>
            <div onClick={onclick} style={{ backgroundImage: `url(${image})` }}
                className="story">
                <Avatar src={profilesSrc} className="story__avatar" />
                <h4> {title}</h4>

            </div>
        </div>
    )
}

export default Story





