import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed ? [styles.icon, styles.pressed] : styles.icon
      }
    >
      <Ionicons name={icon} size={20} color={color} />
    </Pressable>
  );
}
// ({pressed}) => pressed && styles.pressed
const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});
