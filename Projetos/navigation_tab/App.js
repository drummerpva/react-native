import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import TelaInicial from "./src/TelaInicial";
import Conversa from "./src/Conversa";
import Config from "./src/Config";

const Navegador = createBottomTabNavigator({
  Home: {
    screen: TelaInicial
    //,navigationOptions:{title:'Texto Aqui'}
  },
  Conversa: {
    screen: Conversa
  },
  Config: {
    screen: Config
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;
