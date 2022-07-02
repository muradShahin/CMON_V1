import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Alerts from '../Screens/TabBarScreen/Alerts';
import MB from '../Screens/TabBarScreen/MB';
const Tab = createMaterialTopTabNavigator();

export default function test() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Alerts" component={Alerts} />
      <Tab.Screen name="MB" component={MB} />
    </Tab.Navigator>
  );
}