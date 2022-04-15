import { useLayoutEffect } from 'react';
import { View, Text, Image } from 'react-native';
import MealDetails from '../components/MealDetails';

const MealScreen = ({ navigation, route }) => {
  const mealParams = route.params.mealData;
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
      <Image source={{ uri: imageUrl }} />
      <Text>{title}</Text>
      <MealDetails
        duration={duration}
        affordability={affordability}
        complexity={complexity}
      />
      <Text>Ingredients:</Text>
      {ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}
      <Text>Steps:</Text>
      {steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
      <View></View>
      <Text>{isVegetarian ? 'True' : 'False'}</Text>
      <Text></Text>
    </View>
  );
};

export default MealScreen;
