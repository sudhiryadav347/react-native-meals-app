import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import MealDetails from '../MealDetails';

const MealItem = ({ item }) => {
  const navigation = useNavigation();
  const onPressHandler = () =>
    navigation.navigate('MealDetails', { mealData: item });

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: '#ccc' }}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetails
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.6,
  },
});
