/**
 * Created by buhe on 2016/10/17.
 */
import {
    createRouter,
    NavigationProvider,
} from '@exponent/ex-navigation';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
export default Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
}));
