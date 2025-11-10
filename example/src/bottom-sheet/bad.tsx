import React, { FC, useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

export const Adjustorder: FC<any> = (globalProps?: any) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
      onPanResponderTerminate: () => {
        console.log('======');
      },
    }),
  ).current;

  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.mapContainer}>
        <Animated.View
          style={{
            flexDirection: 'column',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 20,
            height: 300,
            backgroundColor: 'lightblue',
          }}>
          <Animated.View
            pointerEvents="box-none"
            style={{ overflow: 'visible' }}>
            <PanGestureHandler>
              <Animated.View>
                <View style={styles.container}>
                  <Text style={styles.titleText}>Drag this box!</Text>
                  <Animated.View
                    style={{
                      transform: [{ translateX: pan.x }, { translateY: pan.y }],
                    }}
                    {...panResponder.panHandlers}>
                    <View style={styles.box} />
                  </Animated.View>
                </View>
              </Animated.View>
            </PanGestureHandler>
          </Animated.View>
        </Animated.View>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888888',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default Adjustorder;
