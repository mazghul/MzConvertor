import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { PrimaryColor } from '../theme/colors'

export const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={PrimaryColor} size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.7)',
    zIndex: 1000,
  },
})
