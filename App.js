import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  I18nManager,
  Platform,
  NativeModules,
} from 'react-native';
import LANGUAGES from './translations';
import * as RNLocalize from 'react-native-localize';
import I18nText from './NextText';

export default class App extends Component {
  render() {
    console.log(I18nManager);

    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Internationalization!</Text>
        <I18nText />
        <Text style={styles.instructions}>World</Text>
        <Text style={styles.instructions}>{LANGUAGES['en']['greeting']}</Text>
        <Text style={styles.instructions}>Is</Text>
        <Text style={styles.instructions}>Languages</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
