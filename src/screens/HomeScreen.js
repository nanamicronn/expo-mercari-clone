import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TopTabNavigator from '../navigation/TopTabNavigator';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>ホーム画面</Text>
      <TopTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
