import * as React from 'react'
import { StyleSheet } from 'react-native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import type { Routes } from '../Routes'
import Text from '../components/Text'

import { Container, Thumbnail } from './styles'

const examples = [
  {
    screen: 'ContextMenu',
    title: '🎫 Context Menu'
  }
] as const

const styles = StyleSheet.create({
  content: {
    paddingBottom: 32
  }
})

export const Examples = () => {
  const { navigate } =
    useNavigation<StackNavigationProp<Routes, 'Playground'>>()
  return (
    <Container contentContainerStyle={styles.content}>
      {examples.map(thumbnail => (
        <RectButton
          key={thumbnail.screen}
          onPress={() => navigate(thumbnail.screen)}
        >
          <Thumbnail>
            <Text typography='headline'>{thumbnail.title}</Text>
          </Thumbnail>
        </RectButton>
      ))}
    </Container>
  )
}
