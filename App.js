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
import { Provider } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import { store } from './store/redux/store';
// import FavoritesContextProvider from './store/context/favorites-context';
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
        drawerContentStyle: { backgroundColor: '#F29849' },
        drawerInactiveTintColor: '#403115',
        drawerActiveTintColor: '#403115',
        drawerActiveBackgroundColor: '#ffffff',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categoriesscreen}
        options={{
          title: 'Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
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
      </Provider>
      {/* </FavoritesContextProvider> */}
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
