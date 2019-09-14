/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Routes from './src/Routes';
//import App from './src/App';

AppRegistry.registerComponent(appName, () => Routes);
