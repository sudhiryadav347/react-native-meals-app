import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Categoriesscreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#403115' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
        sceneContainerStyle: { backgroundColor: '#F29849' },
      }}
    >
      <Drawer.Screen 
        name="Categories" 
        component={Categoriesscreen} 
        options={{
          title: 'Categories'
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#403115' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
            cardStyle: { backgroundColor: '#F29849' },
          }}
        >
          <Stack.Screen
            name="DrawerNav"
            component={DrawerNavigator}
            options={{
              title: 'Categories',
              headerShown: false,
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
            options={{
              title: 'About the Meal',
            }}
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
