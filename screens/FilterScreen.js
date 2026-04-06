// screens/FilterScreen.js
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FilterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Text>☑ Eggs</Text>
      <Text>☐ Noodles & Pasta</Text>

      <Text style={styles.title}>Brand</Text>
      <Text>☑ Cocola</Text>
      <Text>☐ Ifad</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#fff" }}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontWeight: "bold", marginTop: 20 },
  btn: {
    marginTop: 30,
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
});
