import { Platform } from 'react-native';
import IosPhoneLandscape from '../ios/PhoneLandscape';
import MdPhoneLandscape from '../md/PhoneLandscape';

export default Platform.OS === 'ios' ? IosPhoneLandscape : MdPhoneLandscape;