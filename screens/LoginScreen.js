import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          <Text style={styles.title}>Đăng Nhập</Text>
          <Text style={styles.subtitle}>
            Nhập email hoặc số điện thoại và mật khẩu của bạn
          </Text>
        </View>

        {/* Input Fields */}
        <View style={styles.form}>
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
              placeholder="Nhập mật khẩu"
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

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.replace("Main")} // Chuyển vào màn hình chính sau khi login
        >
          <Text style={styles.loginButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>

        {/* Navigation to Sign Up */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupLink}>Đăng ký ngay</Text>
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
  forgotPassword: { alignItems: "flex-end" },
  forgotText: { color: "#181725", fontSize: 14, fontWeight: "500" },
  loginButton: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: { fontSize: 14, color: "#181725", fontWeight: "600" },
  signupLink: { fontSize: 14, color: "#53B175", fontWeight: "bold" },
});
