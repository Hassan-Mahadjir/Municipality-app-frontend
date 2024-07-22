import { Text, View, TouchableOpacity } from 'react-native';
import i18next, { languageResources } from '@/services/i18next';
import { useTranslation } from 'react-i18next';
import languageList from '@/services/languagesList.json';
import { useState } from 'react';

function Index() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{t('welcome')}</Text>
      <TouchableOpacity style={{ padding: 10, backgroundColor: 'orange' }}>
        <Text>{t('change-language')}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Index;
