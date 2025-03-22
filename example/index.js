import {AppRegistry, View, Text} from 'react-native';
import {name as appName} from './app.json';
// import App from './src/pagerView';
import App from './src/tab/searchStart';

AppRegistry.registerComponent(appName, () => App);