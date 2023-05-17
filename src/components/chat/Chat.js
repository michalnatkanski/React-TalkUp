import React, { useEffect, useRef } from 'react'
//icons
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
//components
import {
    ChatContainer,
    Header,
    HeaderLeft,
    HeaderRight,
    ChatMesseges,
    ChatBottom
} from './Chat.styles';
import ChatInput from '../ChatInput/ChatInput';
import Message from '../message/Message';
//db
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Chat = () => {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [userId] = useAuthState(auth);

    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );

    const [roomMessages, loading] = useCollection(
        roomId &&
        db
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
    )

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [roomId, loading]);

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
                <>
                    <Header>
                        <HeaderLeft>
                            <h4><strong>#{roomDetails?.data().name}</strong></h4>
                            <StarBorderIcon />
                        </HeaderLeft>
                        <HeaderRight>
                            <p>
                                <InfoOutlinedIcon /> Details
                            </p>
                        </HeaderRight>
                    </Header>

                    <ChatMesseges>
                        {roomMessages?.docs.map(doc => {
                            const {
                                message,
                                timestamp,
                                user,
                                userImage,
                                id
                            } = doc.data();

                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                    userId={userId.uid}
                                    id={id}
                                />
                            )
                        })}
                        <ChatBottom ref={chatRef} />
                    </ChatMesseges>

                    <ChatInput
                        chatRef={chatRef}
                        channelId={roomId}
                        channelName={roomDetails?.data().name}
                    />
                </>
            )}
        </ChatContainer>
    )
}

export default Chat

