import { Platform } from 'react-native';
import IosCar from '../ios/Car';
import MdCar from '../md/Car';

export default Platform.OS === 'ios' ? IosCar : MdCar;