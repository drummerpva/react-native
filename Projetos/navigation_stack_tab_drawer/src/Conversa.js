import { createStackNavigator, createAppContainer } from "react-navigation";

import ConversaList from "./ConversaList";
import ConversaChat from "./ConversaChat";

const Navegador = createStackNavigator({
  ConversaList: {
    screen: ConversaList
    //,navigationOptions:{title:'Texto Aqui'}
  },
  ConversaChat: {
    screen: ConversaChat
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;
