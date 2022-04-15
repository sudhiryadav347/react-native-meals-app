import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import React from 'react';

const MealScreen = ({ navigation, route }) => {
  
  const mealParams = route.params;
  const {
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = mealParams;

  useLayoutEffect(() => {
    const { title } = mealParams;
    navigation.setOptions({
      title: title,
    });
  }, [title, navigation]);

  return (
    <View>
      <Text>{title}</Text>
      <Text>{isVegetarian ? 'True' : 'False'}</Text>
    </View>
  );
};

export default MealScreen;
