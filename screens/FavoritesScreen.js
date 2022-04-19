import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
// import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/MealsList/MealsList';

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );
  // console.log('favoriteMeals', favoriteMealsCtx.ids);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite items.</Text>
      </View>
    );
  } else {
    return <MealsList data={favoriteMeals} />;
  }
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#8C2E26',
  },
});
