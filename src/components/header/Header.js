import React from 'react'
//icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
//components
import {
    HeaderContainer,
    HeaderLeft,
    HeaderAvatar,
    HeaderSearch,
    HeaderRight
} from './Header.styles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                    onClick={() => auth.signOut()}
                    src={user?.photoURL}
                    alt={user?.displayName}
                />
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='Search TalksUp' />
            </HeaderSearch>
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;