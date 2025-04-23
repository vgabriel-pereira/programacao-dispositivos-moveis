import { SafeAreaProvider } from "react-native-safe-area-context";
import { TaskContext, TaskProvider } from "./screens/contexts/TaskContext";
import TaskScreen from "./screens/TaskScreen";

function App() {
  return (
    <SafeAreaProvider>
      <TaskProvider><TaskScreen/></TaskProvider>
    </SafeAreaProvider>
  );
}

export default App;
