import { Navigation } from 'react-native-navigation';
/**
 * Screen to import
 */
import { Introduction } from './Introduction';
import { TextButton } from './Buttons/TextButton';
import { ImageFeed } from './ImageFeed';
import { MyCanvas } from './Sketch';

/**
 * Function to register screen components
 */
export function registerScreens() {
    Navigation.registerComponent('screens.Introduction', () => Introduction);
    Navigation.registerComponent('screens.ImageFeed', () => ImageFeed);
    Navigation.registerComponent('screens.Sketch', () => MyCanvas);
    Navigation.registerComponent('buttons.TextButton', () => TextButton);
}