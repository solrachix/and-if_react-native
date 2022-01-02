import { createStackNavigator } from '@react-navigation/stack'

import type { Routes } from './src/Routes'
import { LoadAssets } from './src/components/LoadAssets'
import { Examples } from './src/Examples'
import { ContextMenu } from './src/screens/ContextMenu'

// const assets = []
const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SFPro/SF-Pro-Display-Bold.otf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SFPro/SF-Pro-Display-Semibold.otf'),
  'SFProDisplay-Regular': require('./assets/fonts/SFPro/SF-Pro-Display-Regular.otf'),
  'SFProDisplay-Medium': require('./assets/fonts/SFPro/SF-Pro-Display-Medium.otf')
}

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
    <LoadAssets fonts={fonts}>
      <AppNavigator />
    </LoadAssets>
  )
}

export default App
