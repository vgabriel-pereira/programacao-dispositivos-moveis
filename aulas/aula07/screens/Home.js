import { StyleSheet, Text, View, Button } from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button
        title="Ir Para Perfil"
        onPress={() =>
          navigation.navigate("Perfil", { id: 1, usuario: "jose" })
        }
      />
    </View>
  );
}

const style = StyleSheet.create({});

export default Home;
