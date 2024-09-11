import {
	View,
	Text,
	Dimensions,
	FlatList,
	Image,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import Header from '@/components/services/Header';
import ghostown from '../../../../assets/data/ghostTown.json';
import { styles } from '@/styles/ghostTown';
import { scale, verticalScale } from 'react-native-size-matters';
import ImagesContainer from '@/components/tourism/imagesContainer';
import CommentSection from '@/components/tourism/CommentSection';
import commentsData from '../../../../assets/data/comments.json';
import { useTranslation } from 'react-i18next';

const place = () => {
	// for ReadMore
	const [expanded, setExpanded] = useState(false);
	const toggleExpansion = () => {
		setExpanded(!expanded);
	};
	const screenWidth = Dimensions.get('window').width;
	const {t} = useTranslation();
	const GhostTown = t('GhostTown');
	const reviews = t('reviews');
	const open = t('open');
	const weekdays = t('weekdays');
	const weekends = t('weekends');
	const history = t('history');
	const histText = t('histText');
	const histTextContinued = t('histTextContinued');

	return (
		<SafeAreaView style={{flex: 1}}>
			{/* Header of the page */}
			<View>
				<Header
					title={GhostTown}
					backgroundImage={{
						uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/i7mhi5ix258-533%3A1980?alt=media&token=e00f3a9d-eae3-4684-a9b7-3a1e97957848',
					}}
					onBackPress={() => router.back()}
				/>
				<View style={styles.shadowContainer}>
					<FlatList
						data={ghostown}
						keyExtractor={(item, index) => index.toString()}
						contentContainerStyle={{ justifyContent: 'center' }}
						renderItem={({ item }) => (
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									width: screenWidth,
									height: 30,
								}}
							>
								{Array.from({ length: 5 }).map((_, index) => (
									<Image
										key={index}
										source={{ uri: item.stars }}
										style={styles.starImage}
									/>
								))}
							</View>
						)}
					/>
					<Text style={styles.starText}>1,987 {reviews}</Text>
				</View>
			</View>
			{/* Body of the page */}
			<ScrollView style={{flexGrow: 1}}>
				<View style={{ flexDirection: 'row' }}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/01vrktrq36oe-39%3A726?alt=media&token=5e7fbab6-2e66-4e18-ac03-cfaf7865a40b',
						}}
						style={styles.clockIcon}
					/>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.openText}>{open}</Text>
					</View>
				</View>

				<View
					style={{
						display: 'flex',
						marginHorizontal: scale(25),
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						top: verticalScale(30),
					}}
				>
					<Text style={styles.weekText}>{weekdays}</Text>
					<Text style={styles.weekText}>{weekends}</Text>
				</View>

				<View
					style={{
						display: 'flex',
						marginHorizontal: scale(25),
						flexDirection: 'row',
						justifyContent: 'space-between',
						top: verticalScale(30),
					}}
				>
					<Text style={styles.timeText}>8.00 am - 11.59 pm</Text>
					<Text style={styles.timeText}>8.00 am - 11.59 pm</Text>
				</View>

				<View style={{ paddingTop: verticalScale(30) }}>
					<Text style={styles.historyText}>{history}</Text>
					<Text style={styles.classicText}>
						{histText}
					</Text>
					{expanded && (
						<Text style={styles.classicText}>
							{histTextContinued}
						</Text>
					)}
					<TouchableOpacity onPress={toggleExpansion}>
						<Text style={styles.orangeText}>
							{expanded ? t('readLess') : t('readMore')}
						</Text>
					</TouchableOpacity>
				</View>
				<ImagesContainer images={ghostown[1].photos as { url: string }[]} />
				<CommentSection comments={commentsData} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default place;
