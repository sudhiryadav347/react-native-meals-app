import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Categoriesscreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="Meals Categories" component={Categoriesscreen} />
        <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootView: {
    paddingTop: 30,
  },
});
