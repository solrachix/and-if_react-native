import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StyleGuide from './styles/StyleGuide';

import Examples from './components/Examples';

import HeadphonesCarousel from './HeadphonesCarousel';
import Swiper, {assets as swiperAssets} from './Swiper';

const assets: number[] = [...swiperAssets];

const Stack = createStackNavigator();

export default () => (
  <>
    <StatusBar barStyle="light-content" />
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Examples"

        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: StyleGuide.palette.primary,
            borderBottomWidth: 0,
          },
        }}>
        <Stack.Screen
          name="Examples"
          options={{title: 'Examples'}}
          component={Examples}
        />

        <Stack.Screen
          name="HeadphonesCarousel"
          options={{title: 'Headphones Carousel'}}
          component={HeadphonesCarousel}
        />
        <Stack.Screen
          name="Swiper"
          options={{title: 'Swiper Carousel'}}
          component={Swiper}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
