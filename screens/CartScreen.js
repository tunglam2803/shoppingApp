import { useState } from "react";
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
import CheckoutSuccess from "./CheckoutSuccess"; // 1. Thêm import

export default function CartScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false); // 2. Thêm state quản lý popup thành công

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      <TouchableOpacity
        style={styles.checkout}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: "#fff" }}>Go to Checkout</Text>
      </TouchableOpacity>

      {/* Modal Checkout */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Checkout</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeIcon}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.divider} />

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

            <Text style={styles.termsText}>
              By placing an order you agree to our{"\n"}
              <Text style={styles.boldText}>Terms</Text> And{" "}
              <Text style={styles.boldText}>Conditions</Text>
            </Text>

            {/* 3. Thêm onPress: Đóng Checkout và Mở Success */}
            <TouchableOpacity
              style={styles.placeOrderBtn}
              onPress={() => {
                setModalVisible(false);
                setSuccessVisible(true);
              }}
            >
              <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 4. Thêm Component Success vào đây */}
      <CheckoutSuccess
        visible={successVisible}
        onClose={() => setSuccessVisible(false)}
      />
    </View>
  );
}

// ... (Giữ nguyên phần styles của bạn bên dưới)
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  checkout: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  bottomSheet: {
    backgroundColor: "#F2F3F2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#181725" },
  closeIcon: { fontSize: 20, color: "#181725" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },
  rowLabel: { fontSize: 16, color: "#7C7C7C", fontWeight: "600" },
  rowRight: { flexDirection: "row", alignItems: "center" },
  rowValue: {
    fontSize: 16,
    color: "#181725",
    fontWeight: "600",
    marginRight: 10,
  },
  chevron: { fontSize: 22, color: "#181725" },
  divider: { height: 1, backgroundColor: "#E2E2E2" },
  termsText: {
    fontSize: 13,
    color: "#7C7C7C",
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 20,
  },
  boldText: { color: "#181725", fontWeight: "bold" },
  placeOrderBtn: {
    backgroundColor: "#53B175",
    height: 67,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  placeOrderText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
