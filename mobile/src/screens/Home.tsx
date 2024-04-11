import { View } from 'react-native';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

import { Header } from '../components/Header';
import { HabitDay, DAY_SIZE } from '../components/HabitDay';

export function Home(){
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((week, i) => (
            <Text
              key={`${weekDay}-${i}`}
              className=
            >
            </Text>  
          ))
        }
      </View>
      <HabitDay />
    </View>
  )
}