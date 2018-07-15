import { Platform } from 'react-native';
import IosList from '../ios/List';
import MdList from '../md/List';

export default Platform.OS === 'ios' ? IosList : MdList;