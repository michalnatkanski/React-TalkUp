import React, { useState } from 'react'
import {
    SidebarContainer,
    SidebarHeader,
    SidebarInfo,
    SpinnerContainer
} from './Sidebar.styles';
//icons
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from '../sidebar-option/SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Spinner from 'react-spinkit';
//firebase
import { auth, db } from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
    const [channels, loading, error] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);
    const [expandChannels, setExpandChannels] = useState(true);
    const [expandOptions, setExpandOptions] = useState(true);

    return (
        <SidebarContainer>
            {loading ? (
                <SpinnerContainer>
                    <Spinner
                        name='ball-spin-fade-loader'
                        color='white'
                        fadeIn='none'
                    />
                </SpinnerContainer>
            ) : (
                <>
                    <SidebarHeader>
                        <SidebarInfo>
                            <h2>Talk Up</h2>
                            <h3>
                                <FiberManualRecordIcon />
                                {user.displayName}
                            </h3>
                        </SidebarInfo>
                        <CreateIcon />
                    </SidebarHeader>

                    <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                    <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
                    <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
                    {expandOptions ? (
                        <>
                            <SidebarOption Icon={DraftsIcon} title="Saved items" />
                            <SidebarOption Icon={BookmarkBorderIcon} title="Channel brower" />
                            <SidebarOption Icon={AppsIcon} title="Apps" />
                            <SidebarOption Icon={FileCopyIcon} title="File brower" />
                        </>
                    ) : null}
                    <SidebarOption
                        expandOptions={() => setExpandOptions(!expandOptions)}
                        Icon={expandOptions ? ExpandLessIcon : ExpandMoreIcon}
                        title={`Show ${expandOptions ? 'less' : 'more'}`}
                    />
                    <hr />
                    <SidebarOption
                        expandOptions={() => setExpandChannels(!expandChannels)}
                        Icon={expandChannels ? ExpandLessIcon : ExpandMoreIcon}
                        title="Channels"
                    />
                    <hr />
                    {expandChannels ? (
                        <>
                            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
                            {channels?.docs.map(doc => (
                                <SidebarOption
                                    key={doc.id}
                                    id={doc.id}
                                    title={doc.data().name}
                                />
                            ))}
                        </>
                    ) : null}
                </>
            )}
        </SidebarContainer>
    )
}

export default Sidebar;