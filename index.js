/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//Importing FlameLink SDK Configuration
import flameLinkConfig from "./src/config/flamelink.js"


AppRegistry.registerComponent(appName, () => App);
