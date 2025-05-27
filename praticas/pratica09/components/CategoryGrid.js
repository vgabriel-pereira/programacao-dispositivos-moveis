import { useContext } from "react";
import { FlatList, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { StoreContext } from "../contexts/StoreContext";
import { useNavigation } from "@react-navigation/native";

function CategoryGrid() {
  const { categories } = useContext(StoreContext);
  const navigation = useNavigation();
  return (
    <View>
      <Text variant="titleMedium">Categorias</Text>
      <FlatList
        data={categories}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 4 }}>
            <Button
              mode="outlined"
              icon={item.icone}
              onPress={() =>
                navigation.navigate("Lojas", { categoria: item.nome })
              }
            >{item.nome}</Button>
          </View>
        )}
        keyExtractor={(item, index) => `categoria-${index}`}
      />
    </View>
  );
}

export default CategoryGrid;
