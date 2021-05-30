import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import React from 'react'
import '../styles/Sidebar.css'
import SidebarCart from './SidebarCart'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScciLF3bnlj-385XvtiW3sYHsH1YVq1v3rjI0znFfHb_m65fb4_nHCafCBB4w3UBG8p6g&usqp=CAU'/>
             <div className='sidebar__headerRight'>
                {/* IconButton is used here to get the hover and click effect on the icons */}
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
              </div>
            </div>
            <div className='sidebar__search'>
              <div className='sidebar__searchContainer'>
                <SearchOutlined/>
                <input placeholder='Seacrh or start new chat' type='text'/>
             </div>
            </div>
            <div className='sidebar__chats'>
               <SidebarCart/>
               <SidebarCart/>
               <SidebarCart/>
               <SidebarCart/> 
            </div>
        </div>
    )
}

export default Sidebar
