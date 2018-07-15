import { Platform } from 'react-native';
import IosColorPalette from '../ios/ColorPalette';
import MdColorPalette from '../md/ColorPalette';

export default Platform.OS === 'ios' ? IosColorPalette : MdColorPalette;