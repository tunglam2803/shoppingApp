import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({ item }) {
  return (
    <View style={styles.card}>
      {/* IMAGE */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>

      {/* TEXT */}
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.unit}>{item.unit}</Text>

      {/* PRICE + BUTTON */}
      <View style={styles.bottom}>
        <Text style={styles.price}>${item.price}</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    padding: 12,
    borderRadius: 18,

    // shadow giống app thật
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },

  unit: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
  },

  btn: {
    backgroundColor: "#53B175",
    width: 34,
    height: 34,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  plus: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
