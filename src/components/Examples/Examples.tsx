import * as React from 'react'
import Text from '../Text'
import {
  NavigationScreenConfigProps,
  NavigationScreenProp
} from 'react-navigation'

import { Container, Button } from './styles'

export const examples = [
  {
    screen: 'HeadphonesCarousel',
    title: 'Headphones Carousel'
  },
  {
    screen: 'Swiper',
    title: 'Swiper Carousel'
  },
  ,
]

export default ({
  navigation
}: NavigationScreenConfigProps<NavigationScreenProp<{}>>) => {
  return (
    <Container>
      {examples.map(thumbnail => (
        <Button
          key={thumbnail.screen}
          onPress={() => navigation.navigate(thumbnail.screen)}
        >
          <Text size={18}>{thumbnail.title}</Text>
        </Button>
      ))}
    </Container>
  )
}
