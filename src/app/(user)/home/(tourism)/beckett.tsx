import { View, Text, ScrollView, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import Header from '@/components/services/Header';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/ghostTown';
import ghostown from '../../../../assets/data/ghostTown.json';
import { scale, verticalScale } from 'react-native-size-matters';
import CommentSection from '@/components/tourism/CommentSection';
import commentsData from '../../../../assets/data/restaurantComments.json';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ghostTown() {
	const router = useRouter();

	const screenWidth = Dimensions.get('window').width;
	return (
		<View>
			<Header
				title='BECKETT'
				backgroundImage= {{uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/hmcwodc0uw-601%3A1977?alt=media&token=d347c041-36a2-4487-81fc-5e355777a110"}}
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
				<Text style={styles.starText}>2,598 Reviews</Text>
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
				<View style={{paddingTop: verticalScale(80), flexDirection: 'row'}}>
					<Text style={textStyles.orangeText}>Phone Number:</Text>
                    <Text style={textStyles.blueText}>+90 548 838 20 20</Text>
				</View>
				<SafeAreaView>
					<CommentSection comments = {commentsData} />
				</SafeAreaView>
				<View style={{ height: 250 }}></View>
			</ScrollView>
		</View>
	);
}

const textStyles = StyleSheet.create({
    orangeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F1722A',
        marginLeft: scale(15),
        marginTop: verticalScale(15)
    },
    blueText: {
        fontSize: 18,
        color: '#4E7E95',
        marginLeft: scale(15),
        marginTop: verticalScale(15)
    }
})
