import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import các màn hình
import CartScreen from "../screens/CartScreen";
import ExploreScreen from "../screens/ExploreScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import FilterScreen from "../screens/FilterScreen";
import LoginScreen from "../screens/LoginScreen"; // Mới thêm
import SignupScreen from "../screens/SignupScreen"; // Mới thêm

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Cấu hình Bottom Tabs (Chỉ hiển thị khi đã đăng nhập)
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#53B175",
        tabBarInactiveTintColor: "#181725",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Shop") iconName = "storefront-outline";
          else if (route.name === "Explore") iconName = "search-outline";
          else if (route.name === "Cart") iconName = "cart-outline";
          else if (route.name === "Favourite") iconName = "heart-outline";
          else if (route.name === "Account") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shop" component={ExploreScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Account" component={ExploreScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* Đặt initialRouteName là 'Login' để vào luồng Auth trước */}
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {/* Auth Stack */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        {/* Main App Stack */}
        <Stack.Screen name="Main" component={BottomTabs} />

        {/* Modals */}
        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
