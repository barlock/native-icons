import { Platform } from 'react-native';
import IosPlay from '../ios/Play';
import MdPlay from '../md/Play';

export default Platform.OS === 'ios' ? IosPlay : MdPlay;