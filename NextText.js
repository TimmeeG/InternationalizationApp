import React from 'react';
import { View, Text } from 'react-native';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const RESOURCES = {
  fr: {
    translation: {
      greeting: 'Bonjour!',
      greetingName: 'Bonjour {{name}}',
    },
  },
  en: {
    translation: {
      greeting: 'Sup',
      greetingName: 'Sup {{name}}',
    },
  },
  es: {
    translation: {
      greeting: 'Hola',
      greetingName: 'Hola {{name}}',
    },
  },
};

function TranslatableView(props) {
  const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('en'),
    init: () => {},
    cacheUserLanguage: () => {},
  };

  i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: true,
      resources: RESOURCES,
    });

  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('greeting')}</Text>
    </View>
  );
}

export default TranslatableView;
