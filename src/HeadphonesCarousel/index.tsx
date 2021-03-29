import React from 'react';
import {
  StyleSheet,
  Animated,
} from 'react-native';

import data from './data'

import {
  width,
  LOGO_WIDTH,
  LOGO_HEIGHT,
  DOT_SIZE,
  TICKER_HEIGHT,
  CIRCLE_SIZE,
  Container,
  Logo,
  ItemContainer,
  ItemImage,
  TextContainer,
  ItemHeading,
  ItemDescription,

  CircleContainer,
  CircleElement,

  PaginationContainer,
  PaginationIndicator,
  PaginationDotContainer,
  PaginationDot,

  TickerContainer,
  TickerText
} from './styles'

function Circle({ scrollX }) {

  return (
    <CircleContainer style={StyleSheet.absoluteFillObject}>
      {data.map(({ color }, index) => {
        const inputRange = [
          (index - 0.55) * width,
          index * width,
          (index + 0.55) * width
        ]
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: 'clamp'
        })
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0]
        })

        return (
          <CircleElement
            key={index}
            style={{
              backgroundColor: color,
              opacity,
              transform: [{ scale }]
            }}
          />
        )

      })}
    </CircleContainer>
  )
}

function Item({ imageUri, heading, description, index, scrollX }) {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.1, 0, -width * 0.1],
  });
  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.7, 0, -width * 0.7],
  });
  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });


  return (
    <ItemContainer>
      <ItemImage 
        source={imageUri}
        style={{
          transform: [{ scale }]
        }}
      />

      <TextContainer>
        <ItemHeading
          style={{
            opacity,
            transform: [{ translateX: translateXHeading }]
          }}
        >
          {heading}
        </ItemHeading>
        <ItemDescription
          style={{
            opacity,
            transform: [{ translateX: translateXDescription }]
          }}
        >
          {description}
        </ItemDescription>
      </TextContainer>
    </ItemContainer>
  )
}

function Ticker({ scrollX }) {
  const inputRange = [-width, 0, width]
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT]
  })

  return (
    <TickerContainer>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map(({ type }, index) => {
          return (
            <TickerText key={index}>
              {type}
            </TickerText>
          )
        })}
      </Animated.View>
    </TickerContainer>
  )
}

function Pagination ({ scrollX }) {
  const inputRange = [-width, 0, width]
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE]
  })

    return (
      <PaginationContainer>
        <PaginationIndicator
          style={{
            position: 'absolute',
            transform: [{ translateX }]
          }}
        />

        {data.map(item => (
          <PaginationDotContainer key={item.key}>
            <PaginationDot style={{ backgroundColor: item.color }} />
          </PaginationDotContainer>
        ))}

      </PaginationContainer>
    )
}

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <Circle scrollX={scrollX} />

      <Animated.FlatList
        keyExtractor={item => item.key}
        data={data}
        renderItem={({ item, index }) => (
          <Item {...item} index={index} scrollX={scrollX} />
        )}

        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [ { nativeEvent: { contentOffset: { x: scrollX }} } ],
          { useNativeDriver: true }
        )}
      />

      <Logo 
        source={require('./assets/ue_black_logo.png')}
        style={{ 
          transform: [
            { translateX: -LOGO_WIDTH / 2},
            { translateY: -LOGO_HEIGHT / 2},
            { rotateZ: '-90deg' }
          ]
        }}
      />

      <Pagination scrollX={scrollX} />
      <Ticker scrollX={scrollX} />
    </Container>
  );
}
