import { Platform } from 'react-native';
import IosAmericanFootball from '../ios/AmericanFootball';
import MdAmericanFootball from '../md/AmericanFootball';

export default Platform.OS === 'ios' ? IosAmericanFootball : MdAmericanFootball;