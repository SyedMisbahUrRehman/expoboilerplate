import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

export default function HomeScreen() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View className="flex-1  items-center justify-center p-6">
      {/* Counter Display */}
      <View className="bg-white w-72 p-6 rounded-xl shadow-lg items-center">
        <Text className="text-3xl font-extrabold text-gray-600 mb-2">
          Count: {count}
        </Text>

        {/* Buttons */}
        <View className="flex-row mt-4 justify-between w-full">
          <Pressable
            onPress={() => dispatch(increment())}
            className="bg-orange-700 px-4 py-2 rounded-lg"
            android_ripple={{ color: 'rgba(255, 255, 255, 0.3)' }}
          >
            <Text className="text-white text-lg font-semibold">Increment</Text>
          </Pressable>

          <Pressable
            onPress={() => dispatch(decrement())}
            className="bg-cyan-700 px-4 py-2 rounded-lg"
            android_ripple={{ color: 'rgba(255, 255, 255, 0.3)' }}
          >
            <Text className="text-white text-lg font-semibold">Decrement</Text>
          </Pressable>
        </View>

        {/* Info Text */}
        <View className="mt-6">
          <Text className="text-center text-base text-gray-900">
            This counter uses <Text className="font-semibold">Redux Toolkit (RTK)</Text> with{' '}
            <Text className="font-semibold">redux-persist</Text> to ensure that the counter value is persistent across app restarts.
          </Text>
        </View>
      </View>
    </View>
  );
}