import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Tab1Screen = () => {
  return (
    <Text>タブ1画面</Text>
  )
}

const Tab2Screen = () => {
  return (
    <Text>タブ2画面</Text>
  )
}

const Tab3Screen = () => {
  return (
    <Text>タブ3画面</Text>
  )
}

const Tab4Screen = () => {
  return (
    <Text>タブ4画面</Text>
  )
}

const Tab5Screen = () => {
  return (
    <Text>タブ5画面</Text>
  )
}

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: { margin: 0 }
      }}
    >
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Tab3" component={Tab3Screen} />
      <Tab.Screen name="Tab4" component={Tab3Screen} />
      <Tab.Screen name="Tab5" component={Tab5Screen} />
    </Tab.Navigator>
  );
}
