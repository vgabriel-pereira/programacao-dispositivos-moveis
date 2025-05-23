import { View , ActivityIndicator} from "react-native";
import { Searchbar } from "react-native-paper";
import { useContext, useState } from "react";
import ListaVertical from "../components/ListaVertical";
import { LojaContext } from "../contexts/LojaContext";

function Lojas({ route }) {
  const { categoria } = route.params;
  const { carregando, buscarLoja } = useContext(LojaContext);
  const [filtro, setFiltro] = useState("");

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Searchbar
        value={filtro}
        onChangeText={setFiltro}
        placeholder={`Busca em ${categoria}`}
        onIconPress={() => buscarLoja(filtro)}
        onClearIconPress={() => buscarLoja("")}
        style={{ marginBottom: 8 }}
      />
   {carregando ? (
        <View
          style={{ flex: 1, justifyContent:"center", alignItems: "center" }}
        >
          {" "}
          <ActivityIndicator size="large" />{" "}
        </View>
      ) : (
        <>
          <ListaVertical />
        </>
      )}
    </View>
  );
}

export default Lojas;
