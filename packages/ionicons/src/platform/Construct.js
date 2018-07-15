import { Platform } from 'react-native';
import IosConstruct from '../ios/Construct';
import MdConstruct from '../md/Construct';

export default Platform.OS === 'ios' ? IosConstruct : MdConstruct;