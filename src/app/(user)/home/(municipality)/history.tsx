import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/services/Header';
import { router, useLocalSearchParams } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { COLORS } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';
import { useGetAnnouncement } from '@/services/api/announcement';
import Loading from '@/components/Loading';
import { tr, enUS } from 'date-fns/locale';
import type { Locale } from 'date-fns';

const NewsDetails = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();

	return <View>History</View>;
};

export default NewsDetails;

const styles = StyleSheet.create({});
