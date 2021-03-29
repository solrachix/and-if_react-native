import { Dimensions, Animated } from 'react-native'
import styled from 'styled-components/native';

export const { width, height } = Dimensions.get('window')

export const LOGO_WIDTH = 220
export const LOGO_HEIGHT = 40
export const DOT_SIZE = 40
export const TICKER_HEIGHT = 40
export const CIRCLE_SIZE = width * 0.6

export const Container = styled.View`
  flex: 1;
  background-color: #fefefe;
`;

export const Logo = styled.Image`
  position: absolute;
  left: 30px;
  bottom: 90px;

  width: ${LOGO_WIDTH}px;
  height: ${LOGO_HEIGHT}px;
  resize-mode: contain;

  opacity: 0.9;
`;

export const ItemContainer = styled.View`
  width: ${width}px;
  height: ${height}px;

  align-items: center;
  justify-content: center;
`;

export const ItemImage = styled(Animated.Image)`
  flex: 1;
  width: ${width * 0.75}px;
  height: ${width * 0.75}px;
  
  resize-mode: contain;
`

export const TextContainer = styled(Animated.View)`
  flex: 0.5;

  align-items: flex-start;
  align-self: flex-end;
`  

export const ItemHeading = styled(Animated.Text)`
  color: #444;

  font-weight: 800;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 5px;
`  

export const ItemDescription = styled(Animated.Text)`
  width: ${width * 0.75}px;
  margin-right: 10px;

  color: #ccc;

  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  font-size: 16px;
  line-height: ${16 * 1.5}px;
`

export const CircleContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const CircleElement = styled(Animated.View)`
  position: absolute;
  top: 15%;

  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  
  border-radius: ${CIRCLE_SIZE / 2}px;

`

export const PaginationContainer = styled.View`
  position: absolute;
  right: 20px;
  bottom: 40px;

  height: ${DOT_SIZE}px;

  flex-direction: row;
`

export const PaginationIndicator = styled(Animated.View)`
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;

  border-radius: ${DOT_SIZE / 2}px;
  border-width: 2px;
  border-color: #ddd;
`

export const PaginationDotContainer = styled.View`
  width: ${DOT_SIZE}px;

  align-items: center;
  justify-content: center;
`

export const PaginationDot = styled.View`
  width: ${DOT_SIZE * 0.3}px;
  height: ${DOT_SIZE * 0.3}px;

  border-radius: ${DOT_SIZE * 0.15}px;
`

export const TickerContainer = styled(Animated.View)`
  position: absolute;
  top: 30px;
  left: 20px;
  
  height: ${TICKER_HEIGHT}px;

  overflow: hidden;
`

export const TickerText = styled.Text`
  font-size: ${TICKER_HEIGHT}px;
  line-height: ${TICKER_HEIGHT}px;
  text-transform: uppercase;
  font-weight: 800;
`