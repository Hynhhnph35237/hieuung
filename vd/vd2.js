import Animated, { useSharedValue } from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(300); // khởi tạo giá trị ban đầu

  return (
    <Animated.View
      style={{
        width, // sử dụng giá trị được share
        height: 100,
        backgroundColor: 'violet',
      }}
    />
  );
}
