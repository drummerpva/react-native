import { createStackNavigator, createAppContainer } from "react-navigation";

import TelaInicial from "./src/TelaInicial";
import Conversa from "./src/Conversa";

const Navegador = createStackNavigator({
  Home: {
    screen: TelaInicial
    //,navigationOptions:{title:'Texto Aqui'}
  },
  Conversa: {
    screen: Conversa
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;
