import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CriarConta from "../screens/CriarConta";
import Login from "../screens/Login";
import RecuperarSenha from "../screens/RecuperarSenha";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
      <Stack.Screen name="Criar Conta" component={CriarConta} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
