import { Platform } from 'react-native';
import IosLaptop from '../ios/Laptop';
import MdLaptop from '../md/Laptop';

export default Platform.OS === 'ios' ? IosLaptop : MdLaptop;