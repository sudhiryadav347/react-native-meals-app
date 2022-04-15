import { useLayoutEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const meals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItems = ({ item }) => {
    // const mealItemProps = {
    //   title: item.title,
    //   imageUrl: item.imageUrl,
    //   duration: item.duration,
    //   complexity: item.complexity,
    //   affordability: item.affordability,
    // };

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

    return <MealItem {...mealDetailsProps} />;
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
