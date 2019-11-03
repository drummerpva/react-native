import { createDrawerNavigator, createAppContainer } from "react-navigation";

import ConfigApp from "./ConfigApp";
import ConfigProfile from "./ConfigProfile";

const Navegador = createDrawerNavigator({
  ConfigApp: {
    screen: ConfigApp
    
  },
  ConfigProfile: {
    screen: ConfigProfile
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;
