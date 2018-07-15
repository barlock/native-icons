import { Platform } from 'react-native';
import IosUmbrella from '../ios/Umbrella';
import MdUmbrella from '../md/Umbrella';

export default Platform.OS === 'ios' ? IosUmbrella : MdUmbrella;