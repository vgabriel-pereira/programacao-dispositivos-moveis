import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Gaveta from "./Gaveta";

const Tab = createBottomTabNavigator();

function AbaInferior() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil"  options={{headerShown: false}}component={Gaveta} />
    </Tab.Navigator>
  );
}

export default AbaInferior;
