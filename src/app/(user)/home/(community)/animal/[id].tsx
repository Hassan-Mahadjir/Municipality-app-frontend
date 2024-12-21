import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '@/components/services/Header';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '@/constants/Colors';
import SubmitButtonComponent from '@/components/SubmitButton';
import { patchStatus, useGetReportedAnimal } from '@/services/api/community';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';
import { Locale } from 'date-fns';
import { enUS, tr } from 'date-fns/locale';
import { useProfile } from '@/services/api/profile';

const animalDetails = () => {
	const { id } = useLocalSearchParams();
	const { t, i18n } = useTranslation();
	const { profileData } = useProfile();

	const lang = i18n.language.toUpperCase();
	const userId = profileData?.data.data.user.id || 0;

	const { mutateStatus } = patchStatus(id ? +id : 0);

	const localeMap: Record<string, Locale> = {
		en: enUS,
		tr: tr,
	};
	const currentLocale = localeMap[i18n.language] || enUS;

	const { reportedAnimalData, isLoading } = useGetReportedAnimal(+id);
	const reportDetails = reportedAnimalData?.data.data;

	const [content, setContent] = useState<string[]>([]);

	// Function to split text into paragraphs by period ('.')
	const splitTextIntoParagraphs = (text: string): string[] => {
		return text
			.split('.')
			.map((sentence) => sentence.trim())
			.filter((sentence) => sentence.length > 0)
			.map((sentence) => sentence + '.');
	};

	useEffect(() => {
		if (!reportDetails) return;

		const fetchedDescription =
			reportDetails?.language === lang
				? reportDetails?.description
				: reportDetails?.translations?.find(
						(translation) => translation.language === lang
				  )?.description || reportDetails?.description;

		const paragraphs = splitTextIntoParagraphs(fetchedDescription);
		setContent(paragraphs);
	}, [reportDetails, lang]);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' color={COLORS.primary} />
			</View>
		);
	}

	if (!reportDetails) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{t('noResultFound')}</Text>
			</View>
		);
	}

	return (
		<View>
			<Header
				title={''}
				backgroundImage={{
					uri: reportDetails.images[0].imageUrl,
				}}
				onBackPress={() => router.back()}
			/>

			<View style={{ margin: scale(10) }}>
				<Text style={[styles.subject, { textAlign: 'center' }]}>
					{t('animalNumber')}: {id}
				</Text>

				<View
					style={{
						flexDirection: 'row',
						marginTop: verticalScale(10),
						justifyContent: 'space-between',
					}}
				>
					<View style={{ flexDirection: 'row' }}>
						<EvilIcons name='location' size={24} color={COLORS.primary} />
						<Text style={{ color: COLORS.primary }}>
							{reportDetails?.language === lang
								? reportDetails?.location
								: reportDetails?.translations?.find(
										(translation) => translation.language === lang
								  )?.location || reportDetails?.location}
						</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<AntDesign name='questioncircleo' size={20} color={COLORS.gray} />
						<Text style={{ color: COLORS.gray, marginLeft: scale(5) }}>
							{reportDetails?.language === lang
								? reportDetails?.status
								: reportDetails?.translations?.find(
										(translation) => translation.language === lang
								  )?.status || reportDetails?.status}
						</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<EvilIcons name='clock' size={24} color={COLORS.gray} />
						<Text style={{ color: COLORS.gray }}>
							{formatDistanceToNow(new Date(reportDetails?.createAt), {
								addSuffix: true,
								locale: currentLocale,
							})}
						</Text>
					</View>
				</View>
			</View>

			<View
				style={{ borderBottomWidth: 2, borderBottomColor: COLORS.gray }}
			></View>

			<View style={{ margin: scale(10) }}>
				<Text style={styles.keyDiscription}>
					{reportDetails?.language === lang
						? reportDetails?.title
						: reportDetails?.translations?.find(
								(translation) => translation.language === lang
						  )?.title || reportDetails?.title}
				</Text>

				<Text style={styles.reason}>{t('description')}</Text>

				{content.map((paragraph, index) => (
					<Text key={index} style={styles.paragraph}>
						{paragraph}
					</Text>
				))}

				<Text
					style={{ marginVertical: verticalScale(20), color: COLORS.primary }}
				>
					{t('contactInformation')}:{' '}
					<Text style={{ color: '#000' }}>{reportDetails.contactInfo}</Text>
				</Text>

				{(userId === reportDetails?.user?.id && reportDetails.status != "Found") && (
  <SubmitButtonComponent
    title={t('changeStatus')}
    fullWidth
    onPress={() => mutateStatus({ status: 'Found', userId })}
  />
)}

			</View>
		</View>
	);
};

export default animalDetails;

const styles = StyleSheet.create({
	subject: {
		fontWeight: 'bold',
		fontSize: moderateScale(16),
		textAlign: 'justify',
	},
	paragraph: {
		marginBottom: verticalScale(10),
		fontSize: moderateScale(14),
		lineHeight: verticalScale(22),
		textAlign: 'justify',
	},
	keyDiscription: {
		fontSize: moderateScale(24),
		fontWeight: '700',
		marginBottom: verticalScale(8),
	},
	reason: {
		color: COLORS.primary,
		marginBottom: verticalScale(5),
		fontSize: moderateScale(16),
	},
	getCar: {
		textAlign: 'center',
		color: COLORS.primary,
		marginTop: verticalScale(5),
	},
});
