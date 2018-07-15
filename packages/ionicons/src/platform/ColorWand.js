import { Platform } from 'react-native';
import IosColorWand from '../ios/ColorWand';
import MdColorWand from '../md/ColorWand';

export default Platform.OS === 'ios' ? IosColorWand : MdColorWand;