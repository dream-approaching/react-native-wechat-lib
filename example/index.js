import {AppRegistry, View, Text, LogBox} from 'react-native';
import {name as appName} from './app.json';
// import App from './src/tabView/viewPage';
// import App from './src/bottom-sheet';
// import App from './src/bottom-sheet/bad';
// import App from './src/list';
// import App from './client-origin';
import App from './src/reanimated-worklet';
// import App from './App';

LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);