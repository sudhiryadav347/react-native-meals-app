import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

const Categoriesscreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categoriesscreen;
