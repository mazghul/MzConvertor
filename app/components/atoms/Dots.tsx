import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ConversionDOT } from '../../theme/colors'

const Dot = () => <View style={styles.dot} />

const Dots = ({ numberOfDots }: { numberOfDots: number }) => {
  return (
    <View>
      {Array.from({ length: numberOfDots }, (_, index) => (
        <Dot key={index} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 3,
    height: 3,
    borderRadius: 5,
    backgroundColor: ConversionDOT,
    marginHorizontal: 5,
    marginVertical: 3,
  },
})

export default React.memo(Dots)
