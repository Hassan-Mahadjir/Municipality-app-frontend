import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '@/components/home/Header';
import TenderNews from '@/components/home/TenderNews';
import ServiceCategory from '@/components/home/ServiceCategory';

export default function userHomeIndex() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={{ flexGrow: 1 }}>
        <Text style={style.sectionTitle}>Tender News</Text>
        <TenderNews />

        <View style={style.categoryWapper}>
          <Text style={style.sectionTitle}>Service Category</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={style.seeall}>see all</Text>
          </TouchableOpacity>
        </View>
        <ServiceCategory />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  sectionTitle: {
    color: '#F64D00',
    marginTop: 3,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  categoryWapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
  },
  seeall: {
    fontSize: 16,
  },
});
