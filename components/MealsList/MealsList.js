import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({ data }) => {
  const renderMealItems = ({ item }) => {
    const mealDetailsProps = {
      id: item.id,
      categoryIds: item.categoryIds,
      title: item.title,
      affordability: item.affordability,
      complexity: item.complexity,
      imageUrl: item.imageUrl,
      duration: item.duration,
      ingredients: item.ingredients,
      steps: item.steps,
      isGlutenFree: item.isGlutenFree,
      isVegan: item.isVegan,
      isVegetarian: item.isVegetarian,
      isLactoseFree: item.isLactoseFree,
    };

    // return <View><Text>{mealDetailsProps.title}</Text></View>;
    return <MealItem item={mealDetailsProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
