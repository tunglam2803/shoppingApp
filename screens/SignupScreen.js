import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Hàm xử lý đăng ký
  const handleSignup = async () => {
    // 1. Kiểm tra nhập liệu cơ bản
    if (username.trim() && emailOrPhone.trim() && password.trim()) {
      try {
        // 2. Lưu token vào AsyncStorage để ghi nhớ trạng thái đã đăng nhập
        await AsyncStorage.setItem("userToken", "dummy-auth-token-123");

        // 3. Chuyển hướng vào màn hình chính (Main)
        // Dùng replace để không quay lại màn hình đăng ký khi bấm Back
        navigation.replace("Main");
      } catch (e) {
        Alert.alert("Lỗi", "Không thể hoàn tất đăng ký. Vui lòng thử lại.");
      }
    } else {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ tất cả thông tin.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Đăng Ký</Text>
          <Text style={styles.subtitle}>
            Nhập thông tin của bạn để tiếp tục
          </Text>
        </View>

        {/* Input Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>Tên hiển thị</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên của bạn"
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Email hoặc Số điện thoại</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập email hoặc số điện thoại"
            value={emailOrPhone}
            onChangeText={setEmailOrPhone}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Mật khẩu</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Tạo mật khẩu"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="#7C7C7C"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.termsText}>
            Bằng việc tiếp tục, bạn đồng ý với{" "}
            <Text style={styles.termsLink}>Điều khoản dịch vụ</Text> và{" "}
            <Text style={styles.termsLink}>Chính sách bảo mật</Text> của chúng
            tôi.
          </Text>
        </View>

        {/* Signup Button */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignup} // Gọi hàm handleSignup khi nhấn
        >
          <Text style={styles.signupButtonText}>Đăng Ký</Text>
        </TouchableOpacity>

        {/* Navigation to Login */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  scrollContent: { padding: 20, paddingTop: 80, paddingBottom: 40 },
  header: { marginBottom: 40 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#181725",
    marginBottom: 10,
  },
  subtitle: { fontSize: 16, color: "#7C7C7C", lineHeight: 24 },
  form: { marginBottom: 30 },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7C7C7C",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    fontSize: 18,
    color: "#181725",
    paddingVertical: 10,
    marginBottom: 25,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    fontSize: 18,
    color: "#181725",
    paddingVertical: 10,
  },
  termsText: { fontSize: 14, color: "#7C7C7C", lineHeight: 22, marginTop: 10 },
  termsLink: { color: "#53B175", fontWeight: "bold" },
  signupButton: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signupButtonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: { fontSize: 14, color: "#181725", fontWeight: "600" },
  loginLink: { fontSize: 14, color: "#53B175", fontWeight: "bold" },
});
