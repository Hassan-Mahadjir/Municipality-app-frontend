import { View, Text, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Header from '@/components/services/Header';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/ghostTown';
import ghostown from '../../../../assets/data/ghostTown.json';
import ImagesContainer from '@/components/tourism/imagesContainer';
import { verticalScale } from 'react-native-size-matters';
import CommentSection from '@/components/tourism/CommentSection';
import commentsData from '../../../../assets/data/comments.json';
import { SafeAreaView } from 'react-native-safe-area-context';

const OPENING_TIME = 8; // 9 AM
const CLOSING_TIME = 23.59; // 5 PM

const getCurrentStatus = () => {
	const currentHour = new Date().getHours() + new Date().getMinutes() / 60; // Include minutes for more precise comparison
	console.log('Current Hour:', currentHour); // Debugging: Log current hour
	return currentHour >= OPENING_TIME && currentHour < CLOSING_TIME ? 'Open  ● Closes 11.59pm' : 'Closed';
  };

export default function ghostTown() {
	const router = useRouter();
	// for ReadMore
	const [expanded, setExpanded] = useState(false);
	const toggleExpansion = () => {
		setExpanded(!expanded);
	};

	const screenWidth = Dimensions.get('window').width;
	return (
		<View>
			<Header
				title='GHOST TOWN'
				backgroundImage= {{uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/i7mhi5ix258-533%3A1980?alt=media&token=e00f3a9d-eae3-4684-a9b7-3a1e97957848"}}
				onBackPress={() => router.back()}
			/>
			<View style={styles.shadowContainer}>
				<FlatList
					data={ghostown}
					keyExtractor={(item, index) => index.toString()}
					contentContainerStyle={{ justifyContent: 'center' }}
					renderItem={({ item }) => (
						<View style={{ flexDirection: 'row', justifyContent: 'center', width: screenWidth, height: 30 }}>
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
			<ScrollView style={{ marginTop: 5 }}>
				<View style={{ flexDirection: 'row' }}>
					<Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/01vrktrq36oe-39%3A726?alt=media&token=5e7fbab6-2e66-4e18-ac03-cfaf7865a40b'}} style={styles.clockIcon}/>
					<View style={{flexDirection: 'row'}}>
						<Text style={styles.openText}>Open</Text>
					</View>
					
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
					<Text style={styles.weekText1}>Weekdays:</Text>
					<Text style={styles.weekText2}>Weekends:</Text>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
					<Text style={styles.timeText1}>8.00 am - 11.59 pm</Text>
					<Text style={styles.timeText2}>8.00 am - 11.59 pm</Text>
				</View>
				<View style={{paddingTop: verticalScale(80)}}>
					<Text style={styles.historyText}>History</Text>
					<Text style={styles.classicText}>
						Once a thriving resort and seaside town, the ghost town of Varosha
						has sat abandoned since the 1970s. While you're not allowed to enter
						the fenced-off areas, you can still have a stroll or bike ride
						around the area to explore the deserted buildings and
					</Text>
					{expanded && (
						<Text style={styles.classicText}>
							rubble—a time capsule of what was once the most glamorous spot in
							Cyprus. A part of Varosha beach has recently been reopened, for a
							peculiar beach day against the backdrop of the abandoned resort.
							For a more typical beach holiday, you can head to the neighboring
							Palm Beach first before starting your tour of the Ghost Town.
						</Text>
					)}
					<TouchableOpacity onPress={toggleExpansion}>
						<Text style={styles.orangeText}>
							{expanded ? 'Read Less' : 'Read More'}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{marginTop: '5%'}}>
					<ImagesContainer images={ghostown[1].photos as { url: string }[]}/>
				</View>
				<SafeAreaView>
					<CommentSection comments = {commentsData} />
				</SafeAreaView>
				<View style={{ height: 250 }}></View>
			</ScrollView>
		</View>
	);
}
