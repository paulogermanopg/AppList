import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import Navigator from './src/Navigator';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Navigator);
