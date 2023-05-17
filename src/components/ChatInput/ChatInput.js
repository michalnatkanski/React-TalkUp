import React, { useState } from 'react'
import { ChatInputContainer } from './ChatInput.styles';
import { auth, db } from '../../firebase';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import InputEmoji from "react-input-emoji";

const ChatInput = ({ channelName, channelId, chatRef }) => {

    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);
    console.log(channelName, channelId, chatRef)
    const sendMessage = () => {

        if (!channelId) return;
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
            id: user.uid,
        })

        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        })

        setInput('')
    }

    return (
        <ChatInputContainer>
            <InputEmoji
                value={input}
                onChange={setInput}
                cleanOnEnter
                onEnter={sendMessage}
                placeholder={`Message #${channelName}`}
                theme="auto"
            />
        </ChatInputContainer>
    )
}

export default ChatInput;