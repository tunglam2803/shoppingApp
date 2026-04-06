// screens/CartScreen.js
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import CartItem from "../components/CartItem";
import { products } from "../data/products";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      <TouchableOpacity style={styles.checkout}>
        <Text style={{ color: "#fff" }}>Go to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  checkout: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
});
