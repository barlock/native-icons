import { Platform } from 'react-native';
import IosQuote from '../ios/Quote';
import MdQuote from '../md/Quote';

export default Platform.OS === 'ios' ? IosQuote : MdQuote;