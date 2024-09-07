import {
	View,
	Text,
	FlatList,
	Image,
	Dimensions,
	ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/services/Header';
import ghostown from '../../../../../assets/data/ghostTown.json';
import { styles } from '@/styles/ghostTown';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import CommentSection from '@/components/tourism/CommentSection';
import commentsData from '../../../../../assets/data/restaurantComments.json';

const restaurant = () => {
	const screenWidth = Dimensions.get('window').width;

	return (
		<SafeAreaView>
			{/* Header of the page */}
			<View>
				<Header
					title='GHOST TOWN'
					backgroundImage={{
						uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/hmcwodc0uw-601%3A1977?alt=media&token=d347c041-36a2-4487-81fc-5e355777a110',
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
					<Text style={styles.starText}>1,987 Reviews</Text>
				</View>
			</View>
			{/* Body of the page */}
			<ScrollView>
				<View style={{ flexDirection: 'row' }}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/01vrktrq36oe-39%3A726?alt=media&token=5e7fbab6-2e66-4e18-ac03-cfaf7865a40b',
						}}
						style={styles.clockIcon}
					/>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.openText}>Open</Text>
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
					<Text style={styles.weekText}>Weekdays</Text>
					<Text style={styles.weekText}>Weekends</Text>
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

				<View style={{ marginTop: verticalScale(50) }}>
					<CommentSection comments={commentsData} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default restaurant;
