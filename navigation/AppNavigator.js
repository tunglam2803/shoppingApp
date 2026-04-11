import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

// Import các màn hình
import FilterScreen from "../screens/FilterScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState("Login");

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        // Nếu có token, chúng ta sẽ bắt đầu tại Main thay vì Login
        if (token) {
          setInitialRoute("Main");
        }
      } catch (e) {
        console.log("Lỗi kiểm tra token:", e);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
        }}
      >
        <ActivityIndicator size="large" color="#53B175" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        {/* Đăng ký tất cả màn hình để các màn hình có thể "thấy" nhau khi reset */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />

        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
