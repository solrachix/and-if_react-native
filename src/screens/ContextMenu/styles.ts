import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { WINDOW_WIDTH } from '../../constants'

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: ${WINDOW_WIDTH}px;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;

  flex-direction: column;
  justify-content: space-between;
`

export const Item = styled.View`
  width: ${WINDOW_WIDTH / 5}px;
  height: 70px;
  padding-top: ${props => props.theme.spacing}px;

  background: ${props => props.theme.colors.primary.normal};
  border-radius: ${props => props.theme.spacing * 1.5}px;

  justify-content: center;
  align-items: center;
`

export const Row = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing * 2}px;
  padding: ${props => props.theme.spacing * 4}px;
`

const Dot = styled.View`
  width: 20px;
  height: 20px;

  background: ${props => props.theme.colors.primary.lighter};
  border-radius: 10px;
`

export const DotTopRight = styled(Dot)`
  position: absolute;
  top: -5px;
  right: -5px;
`

export const DotTopLeft = styled(Dot)`
  position: absolute;
  top: -5px;
  left: -5px;
`

export const DotTopCenter = styled(Dot)`
  position: absolute;
  top: -5px;
`

export const DotBottomRight = styled(Dot)`
  position: absolute;
  bottom: -5px;
  right: -5px;
`

export const DotBottomLeft = styled(Dot)`
  position: absolute;
  bottom: -5px;
  left: -5px;
`

export const DotBottomCenter = styled(Dot)`
  position: absolute;
  bottom: -5px;
`
