import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./routes/MainNavigator";
import { LojaProvider } from "./contexts/LojaContext";

function App() {
  return (
    <SafeAreaProvider>
      <LojaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </LojaProvider>
    </SafeAreaProvider>
  );
}

export default App;
