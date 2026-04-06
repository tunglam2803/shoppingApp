import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CartItem({ item }) {
  return (
    <View style={styles.container}>
      {/* IMAGE */}
      <Image source={item.image} style={styles.image} />

      {/* INFO */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.unit}>{item.unit}</Text>

        {/* QUANTITY */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text>-</Text>
          </TouchableOpacity>

          <Text style={styles.qty}>1</Text>

          <TouchableOpacity style={styles.btn}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* PRICE */}
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 10,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
  },

  unit: {
    color: "#888",
    fontSize: 12,
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  btn: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  qty: {
    fontSize: 14,
    fontWeight: "600",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
