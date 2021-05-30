import React from 'react'
import {Avatar} from '@material-ui/core'
import '../styles/SidebarCart.css'
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
