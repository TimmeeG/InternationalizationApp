import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  I18nManager,
  Platform,
  Image,
  FlatList,
  Dimensions,
  NativeModules,
} from 'react-native';
import { FormattedProvider, FormattedMessage } from 'react-native-globalize';
import LANGUAGES from './translations';
import I18nText from './NextText';

const { width } = Dimensions.get('screen');

export default class App extends Component {
  render() {
    const isRTL = I18nManager.isRTL;
    const data = [1, 2, 3];

    console.log(I18nManager);

    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier;

    console.log(deviceLanguage);

    return (
      <FormattedProvider
        locale={deviceLanguage.substring(0, 2)}
        currency="USD"
        messages={LANGUAGES}
      >
        <View style={styles.container}>
          <View style={{ position: 'absolute', top: 20, right: 20 }}>
            <Text>fun</Text>
          </View>
          <Text style={styles.welcome}>Welcome to Internationalization!</Text>
          <I18nText />
          <Text style={styles.instructions}>
            {LANGUAGES[deviceLanguage.substring(0, 2)]['greeting']}
          </Text>
          <FormattedMessage message="greetingName" name="Juan" />

          <View
            style={{ height: 100, width: width / 2, marginLeft: width / 2 }}
          >
            <FlatList
              data={data}
              keyExtractor={item => item}
              renderItem={x => (
                <Text style={{ marginRight: 30 }}>{x.item}</Text>
              )}
              horizontal
            />
          </View>
          <Image
            style={[
              { height: 50, width: 50 },
              isRTL && { transform: [{ rotate: '180deg' }] },
            ]}
            source={{
              uri:
                'https://www.islandharvest.org/wp-content/uploads/2018/08/arrow-705x407.jpg',
            }}
          />
        </View>
      </FormattedProvider>
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
