import { Button, View } from 'react-native';
import Animated, { useSharedValue,withSpring } from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(20);

  const handlePress = () => {
    // width.value = width.value + 30;// muốn sử dụng thêm hiệu ứng thì dùng hàm withSpring dưới
   // hãy thử nghiệm 2 cách sử dụng này để phân biệt hiệu ứng.
    width.value = withSpring(width.value + 50);  // withSpring  là thêm vào 1 hiệu ứng chuyển động nhẹ, có rất nhiều tùy chọn cho hàm này.

  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
