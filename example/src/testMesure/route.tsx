
import React from 'react'
// route.tsx
import Example from './page'
import {Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


// △ = 现 - 基
// 现 = 基 x (1 + r)











const TestStack = createStackNavigator()

const Tex = () => <Text style={{marginTop: 50}}>123</Text>

export const TestScreen = () => {
  return (
    <TestStack.Navigator>
      <TestStack.Screen name="page1" component={Tex} />
      <TestStack.Screen name="page2" component={Tex} />
    </TestStack.Navigator>
  )
}






















