import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "doing") {
            iconName = focused ? "tasks" : "tasks";
          } else if (route.name === "done") {
            iconName = focused ? "check-square-o" : "square-o";
          }
          return (
            <Icon
              name={iconName}
              size={20}
              color={focused ? "#e91e63" : "#ccc"}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="doing" />
      <Tabs.Screen name="done" />
    </Tabs>
  );
}
