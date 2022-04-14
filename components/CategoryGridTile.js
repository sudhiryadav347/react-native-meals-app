import { View, Pressable, Text } from 'react-native';

export default function CategoryGridTile({title, color}) {
  return (
    <View>
      <Pressable>
        <View>
            <Text>
                {title}
            </Text>
        </View>
      </Pressable>
    </View>
  )
}