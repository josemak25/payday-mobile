import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DEVICE_OS = Platform.OS;
export const DEVICE_FULL_WIDTH = Math.ceil(width);
export const DEVICE_FULL_HEIGHT = Math.ceil(height);
