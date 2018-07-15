import { Platform } from 'react-native';
import IosAperture from '../ios/Aperture';
import MdAperture from '../md/Aperture';

export default Platform.OS === 'ios' ? IosAperture : MdAperture;