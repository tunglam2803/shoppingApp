// screens/FavouriteScreen.js
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { products } from "../data/products";

export default function FavouriteScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.image} />
            <Text style={{ flex: 1 }}>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#fff" }}>Add All To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: { flexDirection: "row", marginBottom: 15 },
  image: { width: 50, height: 50, backgroundColor: "#eee", marginRight: 10 },
  btn: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
});
