import React from 'react'
import { StyleProp, TextStyle, TextBase } from 'react-native'

import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'

interface Props {
  align?: string;
  size?: number;
  color?: string;
  weight?: string | number;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}

export const Text = styled(Animated.Text)`${(props: Props) => css`
  width: auto;
  height: auto;
  text-align: ${props.align};
  font-size: ${props.size}px;
  font-weight: ${props.weight};
  /* font-family: "Archivo_400Regular"; */
  letter-spacing: 1px;
  color: ${props.color || "#111"};
`}`

const TextComponent: React.FC<Props> = ({ children, ...props }) => {
  return <Text {...props }>{ children }</Text>
}

TextComponent.defaultProps = {
  size: 16,
  weight: 'normal',
  align: 'left'
}

export default TextComponent