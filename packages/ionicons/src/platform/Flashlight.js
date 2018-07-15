import { Platform } from 'react-native';
import IosFlashlight from '../ios/Flashlight';
import MdFlashlight from '../md/Flashlight';

export default Platform.OS === 'ios' ? IosFlashlight : MdFlashlight;