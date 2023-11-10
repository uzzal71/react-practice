import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../component/Menu';

const ProfilePage = () => {
    let {facebookID, youtubeID} = useParams();

    return (
        <div>
            <Menu/>
            <h1>Facebook: {facebookID}</h1>
            <h1>YouTube: {youtubeID}</h1>
            <h1>This is profile page</h1>
        </div>
    );
};

export default ProfilePage;