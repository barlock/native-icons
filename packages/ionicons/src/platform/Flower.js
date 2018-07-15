import { Platform } from 'react-native';
import IosFlower from '../ios/Flower';
import MdFlower from '../md/Flower';

export default Platform.OS === 'ios' ? IosFlower : MdFlower;