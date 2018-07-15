import { Platform } from 'react-native';
import IosBook from '../ios/Book';
import MdBook from '../md/Book';

export default Platform.OS === 'ios' ? IosBook : MdBook;