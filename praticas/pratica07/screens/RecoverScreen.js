import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";

function RecoverScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containervi}>
        <TextInput style={styles.input}>E-mail</TextInput>
        <Button>Recuperar Senha</Button>
        <Text style={styles.link}>Voltar Para o Login</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: { marginBottom: 16 },
  container: { flexGrow: 1, padding: 16 },
  containervi: { flexGrow: 1, padding: 16, alignItems: "center" },
  link: { color: "#6750A4", textAlign: "center" },
});

export default RecoverScreen;
