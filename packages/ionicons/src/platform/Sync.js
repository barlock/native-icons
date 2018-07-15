import { Platform } from 'react-native';
import IosSync from '../ios/Sync';
import MdSync from '../md/Sync';

export default Platform.OS === 'ios' ? IosSync : MdSync;