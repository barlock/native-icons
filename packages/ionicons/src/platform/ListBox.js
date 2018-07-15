import { Platform } from 'react-native';
import IosListBox from '../ios/ListBox';
import MdListBox from '../md/ListBox';

export default Platform.OS === 'ios' ? IosListBox : MdListBox;