import React, { ReactNode } from 'react';
import useUserMedia from './useUserMedia';
import UserMediaContext from './UserMediaContext';

export interface Props {
    children: ReactNode;
    constraints: MediaStreamConstraints,
}

function UserMediaProvider({ children, constraints }: Props) {
    const mediaStream = useUserMedia(constraints);

    return (
        <UserMediaContext.Provider value={mediaStream}>
            {React.Children.only(children)}
        </UserMediaContext.Provider >
    );
}

export default UserMediaProvider;
