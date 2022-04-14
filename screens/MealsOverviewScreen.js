import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const meals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItems = ({ item }) => {
    return <MealItem title={item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
