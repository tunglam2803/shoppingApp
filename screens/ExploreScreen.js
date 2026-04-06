// screens/ExploreScreen.js
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." style={styles.search} />

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  search: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
});
