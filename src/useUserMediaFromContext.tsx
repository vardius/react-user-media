import { useContext } from 'react';
import UserMediaContext from './UserMediaContext';
import { UserMedia } from './useUserMedia';

const useUserMediaFromContext = (): UserMedia | null => useContext(UserMediaContext);

export default useUserMediaFromContext;
