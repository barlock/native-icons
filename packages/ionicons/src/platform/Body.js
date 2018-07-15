import { Platform } from 'react-native';
import IosBody from '../ios/Body';
import MdBody from '../md/Body';

export default Platform.OS === 'ios' ? IosBody : MdBody;