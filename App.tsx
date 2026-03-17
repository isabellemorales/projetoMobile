//Menu
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Tela do Sobre
import Sobre from './telas/Sobre';

//Configuraçâo do Menu
const Tab = createBottomTabNavigator();

//Cria a estrutura do Menu 
function Menu() {
  return <Tab.Navigator>
            <Tab.Screen name="Sobre" component={Sobre} />
        </Tab.Navigator>
}


export default function App() {
  return <NavigationContainer>
            <Menu />
        </NavigationContainer>
}