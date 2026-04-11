import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ExploreScreen({ navigation }) {
  const handleLogout = async () => {
    Alert.alert(
      "Đăng xuất",
      "Bạn có chắc chắn muốn đăng xuất khỏi tài khoản?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Đồng ý",
          style: "destructive",
          onPress: async () => {
            try {
              // 1. Xóa Token khỏi máy
              await AsyncStorage.removeItem("userToken");

              // 2. Reset Stack về Login.
              // Thao tác này xóa sạch lịch sử các tab đang mở.
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
              });
            } catch (error) {
              console.log("Lỗi khi đăng xuất:", error);
            }
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Khám phá</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#FF5A5F" />
        </TouchableOpacity>
      </View>

      <TextInput placeholder="Search..." style={styles.search} />

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#181725",
  },
  logoutButton: {
    padding: 5,
  },
  search: {
    backgroundColor: "#F2F3F2",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    fontSize: 16,
    color: "#181725",
  },
});
