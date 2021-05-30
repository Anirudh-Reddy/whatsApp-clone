import React from 'react'
import {Avatar} from '@material-ui/core'
function SidebarCart() {
    return (
        <div class='sidebarChat'>
          <Avatar />
          <div className='sidebarChat__info'>
            <h2>Room name</h2>
            <p>the last message</p>
          </div>
        </div>
    )
}

export default SidebarCart
