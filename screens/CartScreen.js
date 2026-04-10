// screens/CartScreen.js
import { useState } from "react"; // Thêm useState
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CartItem from "../components/CartItem";
import { products } from "../data/products";

export default function CartScreen() {
  // Thêm state quản lý hiển thị Modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      <TouchableOpacity
        style={styles.checkout}
        onPress={() => setModalVisible(true)} // Thêm sự kiện mở Modal
      >
        <Text style={{ color: "#fff" }}>Go to Checkout</Text>
      </TouchableOpacity>

      {/* Bắt đầu phần thêm mới: Modal Checkout */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Checkout</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeIcon}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            {/* Các hàng thông tin */}
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Delivery</Text>
              <View style={styles.rowRight}>
                <Text style={styles.rowValue}>Select Method</Text>
                <Text style={styles.chevron}>›</Text>
              </View>
            </View>
            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.rowLabel}>Payment</Text>
              <View style={styles.rowRight}>
                <Text style={styles.rowValue}>💳</Text>
                <Text style={styles.chevron}>›</Text>
              </View>
            </View>
            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.rowLabel}>Promo Code</Text>
              <View style={styles.rowRight}>
                <Text style={styles.rowValue}>Pick discount</Text>
                <Text style={styles.chevron}>›</Text>
              </View>
            </View>
            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.rowLabel}>Total Cost</Text>
              <View style={styles.rowRight}>
                <Text style={styles.rowValue}>$20.97</Text>
                <Text style={styles.chevron}>›</Text>
              </View>
            </View>
            <View style={styles.divider} />

            {}
            <Text style={styles.termsText}>
              By placing an order you agree to our{"\n"}
              <Text style={styles.boldText}>Terms</Text> And{" "}
              <Text style={styles.boldText}>Conditions</Text>
            </Text>

            {}
            <TouchableOpacity style={styles.placeOrderBtn}>
              <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {}
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

  // --- Thêm style mới cho Bottom Sheet ---
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  bottomSheet: {
    backgroundColor: "#F2F3F2", // Màu nền từ Figma
    borderTopLeftRadius: 30, // Bo góc từ Figma
    borderTopRightRadius: 30,
    padding: 25,
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
  closeIcon: {
    fontSize: 20,
    color: "#181725",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },
  rowLabel: {
    fontSize: 16,
    color: "#7C7C7C",
    fontWeight: "600",
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowValue: {
    fontSize: 16,
    color: "#181725",
    fontWeight: "600",
    marginRight: 10,
  },
  chevron: {
    fontSize: 22,
    color: "#181725",
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },
  termsText: {
    fontSize: 13,
    color: "#7C7C7C",
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 20,
  },
  boldText: {
    color: "#181725",
    fontWeight: "bold",
  },
  placeOrderBtn: {
    backgroundColor: "#53B175",
    height: 67,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  placeOrderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
