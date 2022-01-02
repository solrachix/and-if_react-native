import { HoldMenuProvider, HoldItem } from 'react-native-hold-menu'
import FeatherIcon from 'react-native-vector-icons/Feather'

import {
  Container,
  Content,
  Item,
  Row,
  DotBottomLeft,
  DotTopCenter,
  DotTopRight,
  DotTopLeft,
  DotBottomCenter,
  DotBottomRight
} from './styles'

const items = [
  {
    text: 'Actions',
    // icon: 'home',
    isTitle: true,
    onPress: () => console.log('Actions')
  },
  {
    text: 'Action 1',
    // icon: 'edit',
    onPress: () => console.log('Action 1')
  },
  {
    text: 'Action 2',
    // icon: 'map-pin',
    withSeparator: true,
    onPress: () => console.log('Action 2')
  },
  {
    text: 'Action 3',
    // icon: 'trash',
    isDestructive: true,
    onPress: () => console.log('Action 3')
  }
]

export function ContextMenu() {
  return (
    <HoldMenuProvider iconComponent={FeatherIcon} theme='dark'>
      <Container>
        <Content>
          <Row>
            <HoldItem items={items} menuAnchorPosition='bottom-left'>
              <Item>
                <DotBottomLeft />
              </Item>
            </HoldItem>
            <HoldItem items={items}>
              <Item>
                <DotTopCenter />
              </Item>
            </HoldItem>
            <HoldItem items={items}>
              <Item>
                <DotTopRight />
              </Item>
            </HoldItem>
          </Row>

          <Row>
            <HoldItem items={items}>
              <Item>
                <DotTopLeft />
              </Item>
            </HoldItem>
            <HoldItem items={items}>
              <Item>
                <DotTopCenter />
              </Item>
            </HoldItem>
            <HoldItem items={items}>
              <Item>
                <DotTopRight />
              </Item>
            </HoldItem>
          </Row>

          <Row>
            <HoldItem items={items}>
              <Item>
                <DotBottomLeft />
              </Item>
            </HoldItem>
            <HoldItem items={items}>
              <Item>
                <DotBottomCenter />
              </Item>
            </HoldItem>
            <HoldItem items={items}>
              <Item>
                <DotBottomRight />
              </Item>
            </HoldItem>
          </Row>
        </Content>
      </Container>
    </HoldMenuProvider>
  )
}
