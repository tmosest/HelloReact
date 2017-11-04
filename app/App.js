import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens/index';

export function startApp() {
    registerScreens(); // this is where you register all of your app's screens

    // start the app
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'Introduction',
                screen: 'screens.Introduction', // this is a registered name for a screen
                title: 'Introduction',
                navigatorButtons: {
                    rightButtons: [
                        {
                            id: 'custom-button',
                            component: 'buttons.TextButton',
                            passProps: {
                                text: 'Hi!',
                            },
                        }
                    ]
                }
            },
            {
                label: 'Image Feed',
                screen: 'screens.ImageFeed', // this is a registered name for a screen
                title: 'Image Feed'
            }
        ]
    });
}
