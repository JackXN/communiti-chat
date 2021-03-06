import React, {useEffect,useState} from "react";
import "../Styles/Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import db from '../firebase';
import {useStateValue} from '../StateProvider';


function Sidebar() {
const [channels, setChannels] = useState([]);
const [{ user } ] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels( snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
            })))
        )) 
    }, [])


  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h3>
            <FiberManualRecordIcon className='green-icon'/>
            
          {user?.displayName}
          </h3>
        </div>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="General"/>
      <SidebarOption title="Gaming" Icon={VideogameAssetIcon}/>
      <SidebarOption Icon={InboxIcon} title="Dev Resources"/>
      <SidebarOption Icon={DraftsIcon} title="Design Resources"/>
      <SidebarOption Icon={BookmarkBorderIcon} title="Music"/>
      <SidebarOption Icon={PeopleAltIcon} title="Gifs"/>
      <SidebarOption Icon={AppsIcon} title="Social Media"/>
      <hr/>
      <SidebarOption Icon={AddIcon} title='Add Channel' addChannelOption />
      <hr/>

    {/* Connect to db and list all the channels */}
{channels.map((channel) => (
    <SidebarOption title={channel.name} id={channel.id} key={channel.id}/>
))}
    </div>
  );
}

export default Sidebar;
