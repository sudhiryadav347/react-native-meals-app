import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Categoriesscreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.rootView}>
      <StatusBar style="light" />
      <Categoriesscreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootView: {
    paddingTop: 30,
  },
});
