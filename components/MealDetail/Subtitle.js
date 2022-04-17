import { StyleSheet, Text, View } from 'react-native';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#403115',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
  },
  subtitleContainer: {
    borderBottomColor: '#403115',
    borderBottomWidth: 2,
    paddingBottom: 18,
    marginHorizontal: 16,
    marginVertical: 4,
  },
});
