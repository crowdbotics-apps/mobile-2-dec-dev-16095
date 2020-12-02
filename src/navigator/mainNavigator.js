import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuthNavigator from '../features/EmailAuth/navigator';
import CopyOfCopyOfBlankScreen015268Navigator from '../features/CopyOfCopyOfBlankScreen015268/navigator';
import CopyOfBlankScreen015260Navigator from '../features/CopyOfBlankScreen015260/navigator';
import BlankScreen015259Navigator from '../features/BlankScreen015259/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth: { screen: EmailAuthNavigator },
CopyOfCopyOfBlankScreen015268: { screen: CopyOfCopyOfBlankScreen015268Navigator },
CopyOfBlankScreen015260: { screen: CopyOfBlankScreen015260Navigator },
BlankScreen015259: { screen: BlankScreen015259Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
