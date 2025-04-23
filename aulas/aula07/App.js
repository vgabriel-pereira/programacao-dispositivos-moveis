import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Pilha from "./routes/Pilha";



function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Pilha/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
