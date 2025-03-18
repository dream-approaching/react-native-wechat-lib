// page.tsx
import React, { useRef } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const Example: React.FC = () => {
  const viewRef = useRef<TouchableOpacity>(null)

  const navigation = useNavigation()

  const measure = (): Promise<void> => {
    return new Promise((resolve) => {
      viewRef.current?.measure(
        (
          fx: number,
          fy: number,
          width: number,
          height: number,
          px: number,
          py: number
        ) => {
          console.log(`px=${px};py=${py};`)
          resolve()
        }
      )
    })
  }

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flex: 1,
            width: '100%'
          }}>

          <View>
            <Text>l1eft</Text>
          </View>
          <TouchableOpacity ref={viewRef} onPress={measure}>
            <Text>mid</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('page2')
            }}>
            <Text>跳转</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Example
