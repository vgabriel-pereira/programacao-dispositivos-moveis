import Perfil from "../screens/Perfil";
import Home from "../screens/Home";
import Appbar from "../componentes/AppBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function Pilha(){
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            header: () => <Appbar title={"Home"} />,
          }}
        />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    )
}

export default Pilha