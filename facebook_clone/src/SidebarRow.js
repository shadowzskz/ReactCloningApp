import { Avatar } from '@material-ui/core';
import React from 'react';

import "./SidebarRow.css";

function SIdebarRow({ src, url, title }) {
    return (
        <div className="sidebarRow">
            {
                src && <Avatar className="sidebarRow__avatar" src={src} />
            }
            {
                url && <img src = {url} alt="" className="sidebarRow__img" />
            }
                <h4>{title}</h4>
        </div>
    )
}

export default SIdebarRow
