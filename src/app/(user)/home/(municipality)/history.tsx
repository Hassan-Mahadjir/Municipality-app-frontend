import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const History = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const [content, setContent] = useState<string[]>([]);

	const history_EN = `Famagusta is one of the most important coastal town in Turkish Republic of Northern Cyprus as well as Mediterranean Sea. Additionally, the city is a significant tourism and education center. Famagusta achieved its main development during the Lusignan period and houses many historical artifacts from the Roman and Eastern Roman Empires, the Latin Kingdoms, the Venetians, and the Turks. These include the golden beaches, Lala Mustafa Pasha Mosque (St. Nicholas Cathedral), St.Barnabas Monastery, Venetian Palace, and Othello Castle.
	Famagusta Turkish Municipality was first established in 1958. Famagusta Turkish Municipality, which gained its legal status with the 1960 Constitution thanks to provisions stipulating separate presence of Turkish and Greek municipalities served the Turkish population of 8,000 to 10,000 people and Turkish neighbourhoods until 1974.
	Following the inclusion of Tuzla Village under the municipality in 1974, the municipality was reorganized to provide services to all of Gazimağusa. As of 1990, it continued its services with a staff of 350 people.
	Starting from September 1, 2008, Mutluyaka Village also became a part of Famagusta Municipality. As of 2008, the municipality has 93 square kilometers territory. The municipality is also the second-largest urban area in Northern Cyprus. Alongside the Eastern Mediterranean University, the city is also home to Istanbul Technical University(ITU), University of City Island, Cyprus West University, and European Lidership University.
	According to the 2011 census, Famagusta had a permanent population of 40,920, while the State Planning Organization’s 2020 projection shows a population of 55,868. Additionally, a significant number of university students and staff reside in the city for most of the year, totalling over 16,000.`;

	const history_TR = `Gazimağusa, hem Kuzey Kıbrıs Türk Cumhuriyeti'nin hem de Akdeniz'in en önemli kıyı şehirlerinden biridir. Ayrıca şehir, önemli bir turizm ve eğitim merkezidir. Gazimağusa, en büyük gelişimini Lusignan döneminde yaşamış ve Roma ile Doğu Roma İmparatorlukları, Latin Krallıkları, Venedikliler ve Türklerden kalan birçok tarihi esere ev sahipliği yapmaktadır. Bu eserler arasında altın kumsallar, Lala Mustafa Paşa Camii (St. Nicholas Katedrali), St. Barnabas Manastırı, Venedik Sarayı ve Othello Kalesi bulunmaktadır.
    Gazimağusa Türk Belediyesi ilk olarak 1958 yılında kurulmuştur. 1960 Anayasası ile Türk ve Rum belediyelerinin ayrı varlıklarını öngören hükümler sayesinde yasal statü kazanan Gazimağusa Türk Belediyesi, 8.000 ila 10.000 kişilik Türk nüfusuna ve Türk mahallelerine 1974 yılına kadar hizmet etmiştir.
    1974 yılında Tuzla Köyü’nün belediyeye dahil edilmesiyle belediye, Gazimağusa’nın tamamına hizmet verecek şekilde yeniden organize edilmiştir. 1990 itibarıyla belediye, 350 kişilik bir kadro ile hizmetlerini sürdürmüştür.
    1 Eylül 2008 tarihinden itibaren Mutluyaka Köyü de Gazimağusa Belediyesi’ne dahil olmuştur. 2008 itibarıyla belediye, 93 kilometrekarelik bir alana sahiptir. Belediye, Kuzey Kıbrıs'ın ikinci büyük kentsel alanıdır. Doğu Akdeniz Üniversitesi’nin yanı sıra şehir, İstanbul Teknik Üniversitesi (İTÜ), City Island Üniversitesi, Kıbrıs Batı Üniversitesi ve European Leadership Üniversitesi’ne de ev sahipliği yapmaktadır.
    2011 nüfus sayımına göre, Gazimağusa’nın kalıcı nüfusu 40.920 iken, Devlet Planlama Örgütü’nün 2020 projeksiyonları nüfusun 55.868 olduğunu göstermektedir. Ayrıca, yılın büyük bir bölümünde şehirde ikamet eden üniversite öğrencileri ve personeli toplamda 16.000’den fazladır.`;

	// Split the text into paragraphs
	const splitTextIntoParagraphs = (text: string): string[] => {
		return text
			.split('\n') // Split by new lines
			.map((paragraph) => paragraph.trim()) // Trim any leading/trailing spaces
			.filter((paragraph) => paragraph.length > 0); // Remove empty paragraphs
	};

	useEffect(() => {
		// Split the history content into paragraphs on mount
		const history = lang === 'TR' ? history_TR : history_EN;
		const paragraphs = splitTextIntoParagraphs(history);
		setContent(paragraphs);
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Header
				title={t('history')}
				backgroundImage={{
					uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBV0NfJikz6mU0HbEFt6_aywequJEDwp49g&s',
				}}
				onBackPress={() => router.back()}
			/>

			<ScrollView style={{ flexGrow: 1, margin: scale(10) }}>
				{/* Render each paragraph */}
				{content.map((paragraph, index) => (
					<Text key={index} style={styles.paragraph}>
						{paragraph}
					</Text>
				))}
			</ScrollView>
		</View>
	);
};

export default History;

const styles = StyleSheet.create({
	paragraph: {
		marginBottom: verticalScale(10),
		fontSize: moderateScale(15),
		lineHeight: verticalScale(22),
		textAlign: 'justify',
	},
});
