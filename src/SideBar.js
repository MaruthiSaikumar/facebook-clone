import React from 'react'
import "./SideBar.css"
import SideBarRow from './SideBarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function SideBar() {
    return (
        <div className="sidebar">
            <SideBarRow src="https://i4.lisimg.com/15345824/280full.jpg" title="Stephen Amell" />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messinger" />
            <SideBarRow Icon={StorefrontIcon} title="MarketPlace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={ExpandMoreIcon} title="Market Place" />
        </div>
    )
}

export default SideBar
