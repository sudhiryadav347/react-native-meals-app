import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const meals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });



  const renderMealItems = ({ item }) => {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration, 
      complexity: item.complexity, 
      affordability: item.affordability
    }
    
    return <MealItem {...mealItemProps}/>;
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
