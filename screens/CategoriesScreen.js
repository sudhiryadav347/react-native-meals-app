import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const Categoriesscreen = ({ navigation }) => {
  
  function renderCategoryItem({ item }) {
    const pressHandler = () => {
      return navigation.navigate('MealsOverview', {
        categoryId: item.id,
      });
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categoriesscreen;
