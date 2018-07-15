import { Platform } from 'react-native';
import IosDocument from '../ios/Document';
import MdDocument from '../md/Document';

export default Platform.OS === 'ios' ? IosDocument : MdDocument;