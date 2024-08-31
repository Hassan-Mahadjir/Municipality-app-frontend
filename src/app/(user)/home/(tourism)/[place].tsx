import {
	View,
	Text,
	ScrollView,
	Image,
	Dimensions,
	FlatList,
	ListRenderItem,
	TextInput,
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { styles } from '@/styles/ghostTown';
import { scale } from 'react-native-size-matters';
import Header from '@/components/services/Header';

export default function ghostTown() {
	const id = useLocalSearchParams();
	console.log(id);
	const [expanded, setExpanded] = useState(false);

	const toggleExpansion = () => {
		setExpanded(!expanded);
	};

	const photos: string[] = [
		'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/w7w9ak2zpdg-594%3A1974?alt=media&token=bebf3baf-4e21-4aa6-9250-7ad471d25b36',
		'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mr3fllifh78-267%3A1290?alt=media&token=b83fb12e-da66-4bd5-82a0-7c3ebc211239',
		'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/znpusw4m5cr-267%3A1291?alt=media&token=cb7828a7-7785-4269-a992-308bbb20f564',
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const screenWidth = Dimensions.get('window').width - 25;

	const handleScroll = (event: {
		nativeEvent: { contentOffset: { x: number } };
	}) => {
		const scrollPosition = event.nativeEvent.contentOffset.x;
		const index = Math.round(scrollPosition / screenWidth);
		setActiveIndex(index);
	};

	const renderItem: ListRenderItem<string> = ({ item }) => (
		<View style={{ marginTop: 10 }}>
			<Image source={{ uri: item }} style={styles.image} resizeMode='cover' />
		</View>
	);

	// Render Scroll Indicators
	const renderDotIndicators = (activeIndex: number) => {
		return photos.map((dot, index) => {
			return (
				<View
					key={index}
					style={[
						styles.dot,
						activeIndex === index ? styles.activeDot : styles.inactiveDot,
					]}
				/>
			);
		});
	};
	return (
		<View>
			<Header
				title='Ghost Town'
				onBackPress={() => router.back()}
				backgroundImage={{
					uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/i7mhi5ix258-533%3A1980?alt=media&token=e00f3a9d-eae3-4684-a9b7-3a1e97957848',
				}}
			/>
			<View style={styles.shadowContainer}>
				<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
						}}
						style={styles.starImage}
					/>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
						}}
						style={styles.starImage}
					/>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
						}}
						style={styles.starImage}
					/>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
						}}
						style={styles.starImage}
					/>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/5a14csqsccu-192%3A1099?alt=media&token=eb324012-4bf4-4665-b817-0e140eb32845',
						}}
						style={styles.starImage}
					/>
					<Text style={styles.starText}>1,987 Reviews</Text>
				</View>
			</View>
			<ScrollView style={{ marginTop: 5 }}>
				<View style={{ flexDirection: 'row' }}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/01vrktrq36oe-39%3A726?alt=media&token=5e7fbab6-2e66-4e18-ac03-cfaf7865a40b',
						}}
						style={styles.clockIcon}
					/>
					<Text style={styles.openText}>Open</Text>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={styles.weekText1}>Weekdays:</Text>
					<Text style={styles.weekText2}>Weekends:</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginBottom: 50,
					}}
				>
					<Text style={styles.timeText1}>8.00 am - 11.59 pm</Text>
					<Text style={styles.timeText2}>8.00 am - 11.59 pm</Text>
				</View>
				<View>
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

				{/* scrollable images */}
				<View>
					<View style={{ marginHorizontal: 10 }}>
						<FlatList
							data={photos}
							horizontal={true}
							bounces={false}
							pagingEnabled
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ gap: scale(5) }}
							keyExtractor={(item) => item}
							renderItem={renderItem}
							onScroll={handleScroll}
							scrollEventThrottle={16}
						/>
					</View>
					<View style={styles.dotContainer}>
						{renderDotIndicators(activeIndex)}
					</View>
				</View>

				{/*Comments section*/}

				<Text
					style={{
						marginTop: 10,
						marginLeft: 15,
						fontSize: 20,
						color: '#F1722A',
					}}
				>
					Comments
				</Text>
				<View style={styles.box}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nf8qcuembn-192%3A1140?alt=media&token=b3104fa9-8c36-46af-b1e1-7923dd84795b',
						}}
						style={styles.userPic}
					/>
					<Text style={styles.userText}>i_am_user</Text>
					<Text style={styles.userText2}>11 contributions</Text>
					<View style={{ flexDirection: 'row' }}>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={[styles.smallstarImage, { marginLeft: 75 }]}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
					</View>
					<Text style={[styles.userTime, { marginTop: 10 }]}>
						Commented: 10th May 2020
					</Text>
					<Text style={styles.comment}>
						Best place I have visited in magusa yet, bike rides are amazing.
						Definitely recommend everyone to visit.
					</Text>
				</View>
				<View style={styles.box}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qz4cwqzdta-192%3A1141?alt=media&token=5499ecd4-58bc-4fd2-93b4-21afcda2c946',
						}}
						style={styles.userPic}
					/>
					<Text style={styles.userText}>user_23</Text>
					<Text style={styles.userText2}>23 contributions</Text>
					<View style={{ flexDirection: 'row' }}>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={[styles.smallstarImage, { marginLeft: 75 }]}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
					</View>
					<Text style={[styles.userTime, { marginTop: 10 }]}>
						Commented: 9th Feb 2020
					</Text>
					<Text style={styles.comment}>
						Cannot believe a town like this was abandoned by its former
						residents. Very spooky. Must visit. Go sight-seeing on...
					</Text>
					<Text style={{ color: 'orange', marginLeft: 215 }}>Read more</Text>
				</View>
				<View style={styles.box}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dz5iovsgol9-192%3A1142?alt=media&token=d3999b58-1a44-43d8-bf66-d3e3e19d7377',
						}}
						style={styles.userPic}
					/>
					<Text style={styles.userText}>online_24/7</Text>
					<Text style={styles.userText2}>8 contributions</Text>
					<View style={{ flexDirection: 'row' }}>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={[styles.smallstarImage, { marginLeft: 75 }]}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7',
							}}
							style={styles.smallstarImage}
						/>
					</View>
					<Text style={[styles.userTime, { marginTop: 10 }]}>
						Commented: 29th Sept 2020
					</Text>
					<Text style={styles.comment}>
						Went with friends. Had a good time. They took our ids and kept it
						for the whole time we were inside. Only part I didn’t enjoy.
					</Text>
				</View>
				<Text style={styles.smallText}>See more</Text>
				<View style={styles.container2}>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder='Add a comment...'
							placeholderTextColor='grey'
							style={{ fontSize: 18, marginLeft: 5 }}
						/>
					</View>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.rating}>Recommend</Text>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
						}}
						style={styles.whitestars}
					/>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
						}}
						style={styles.whitestars}
					/>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
						}}
						style={styles.whitestars}
					/>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
						}}
						style={styles.whitestars}
					/>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7082gjtq1uv-195%3A1323?alt=media&token=b52d8bb2-91b5-4187-84c0-4e733c1fdd6c',
						}}
						style={styles.whitestars}
					/>
					<View style={styles.submitBox}>
						<Text style={styles.submitText}>Submit</Text>
					</View>
				</View>
				<View style={styles.locationBox}>
					<Text style={styles.submitText}>See Location</Text>
				</View>
				<View style={{ height: 270 }}></View>
			</ScrollView>
		</View>
	);
}
