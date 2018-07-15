import { Platform } from 'react-native';
import IosTrain from '../ios/Train';
import MdTrain from '../md/Train';

export default Platform.OS === 'ios' ? IosTrain : MdTrain;