import React from 'react';
import { UserMedia } from './useUserMedia';

const UserMediaContext = React.createContext<UserMedia | null>(null);

export default UserMediaContext;
