import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'
import { PrimaryColor } from '../theme/colors'

export const ErrorComponent = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={{ color: PrimaryColor }}>Oops!</Title>
          <Paragraph>We are down now. Please check back later.</Paragraph>
        </Card.Content>
        <Card.Cover source={require('../../assets/network_down.png')} />
      </Card>
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
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  card: {
    maxWidth: 340,
    width: '100%',
    elevation: 4,
  },
})
