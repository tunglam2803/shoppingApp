import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CheckoutSuccess({ visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Phần nội dung chính ở giữa */}
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <View style={styles.circle}>
              <Text style={styles.checkMark}>✓</Text>
            </View>
          </View>

          <Text style={styles.title}>Your Order has been{"\n"}accepted</Text>
          <Text style={styles.subtitle}>
            Your items has been placed and is on{"\n"}its way to being processed
          </Text>
        </View>

        {/* Phần nút bấm ở dưới cùng */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.trackOrderBtn}>
            <Text style={styles.trackOrderText}>Track Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backHomeBtn} onPress={onClose}>
            <Text style={styles.backHomeText}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

// ... (Giữ nguyên phần styles của bạn bên dưới)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 25 },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  iconContainer: { marginBottom: 40 },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: { fontSize: 80, color: "#53B175" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#181725",
    marginBottom: 20,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
    textAlign: "center",
    lineHeight: 22,
  },
  footer: { width: "100%", paddingBottom: 20 },
  trackOrderBtn: {
    backgroundColor: "#53B175",
    height: 67,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  trackOrderText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  backHomeBtn: { height: 60, justifyContent: "center", alignItems: "center" },
  backHomeText: { fontSize: 18, fontWeight: "bold", color: "#181725" },
});
