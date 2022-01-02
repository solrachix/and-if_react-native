import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components'

import type { Routes } from './src/Routes'
import Background from './src/components/Background'
import { DarkTheme } from './src/styles/themes'
import { LoadAssets } from './src/components/LoadAssets'
import { Examples } from './src/Examples'
import { ContextMenu } from './src/screens/ContextMenu'
import { fonts } from './src/components/Text'

// const assets = []

const Stack = createStackNavigator<Routes>()
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Playground'
      component={Examples}
      options={{
        title: 'Pode ser feito em react native!?'
      }}
    />
    <Stack.Screen
      name='ContextMenu'
      component={ContextMenu}
      options={{
        title: 'Context Menu',
        header: () => null
      }}
    />
  </Stack.Navigator>
)

const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Background />
      <LoadAssets fonts={fonts}>
        <AppNavigator />
      </LoadAssets>
    </ThemeProvider>
  )
}

export default App
