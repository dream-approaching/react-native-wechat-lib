import React from 'react'
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {TestScreen} from './route'

const App = () => {
  if ('test') {
    // return <Text style={{marginTop: 50}}>asda asd asd</Text>
  }
  return (
    <NavigationContainer>
      <TestScreen />
      {/* <Text style={{marginTop: 50}}>asda asd asd</Text> */}
    </NavigationContainer>
  )
}

export default App;