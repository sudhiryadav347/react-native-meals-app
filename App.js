import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Categoriesscreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
            cardStyle: { backgroundColor: '#612401' },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={Categoriesscreen}
            options={{
              title: 'Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: 'Meals',
            }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootView: {
    paddingTop: 30,
  },
  contentBg: {
    backgroundColor: '#000',
  },
});
