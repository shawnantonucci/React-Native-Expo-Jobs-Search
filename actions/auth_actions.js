import { AsyncStorage } from 'react-native';

import { FACEBOOK_LOGIN_SUCCESS } from './types';
    FACEBOOK_LOGIN_SUCCESS
}

// How to use AsyncStorage:
// AsynceStorage.setItem('fb_token', token);
// AsynceStorage.getItem('fb_token');

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem("fb_token");
    if (token) {
        // Dispatch an action saying FB login is done
    
    } else {
        // Start up FB Login process

    }
}
