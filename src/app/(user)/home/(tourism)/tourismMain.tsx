import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	FlatList,
} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import tourismSections from '../../../../assets/data/toursimSections.json';
import { scale, verticalScale } from 'react-native-size-matters';

export default function tourismMain() {
	const router = useRouter();
	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					style={styles.headerImage}
					source={require('../../../../assets/images/tourism-header.jpg')}
				/>
				<LinearGradient
					colors={['rgba(239, 84, 13,1)', 'transparent']}
					style={styles.linearGradient}
					start={{ x: 0, y: 1 }}
					end={{ x: 0, y: 0 }}
				/>
				<LinearGradient
					colors={['rgba(78, 126, 149,1)', 'transparent']}
					style={styles.linearGradient}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
				/>
				<View style={styles.arrowContainer}>
					<TouchableOpacity onPress={() => router.back()}>
						<Image
							source={{
								uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jnfstjpj8bo-33%3A1007?alt=media&token=53672763-93e6-4184-b8dc-1bf6c9fc38e0',
							}}
							style={styles.arrowImage}
						/>
					</TouchableOpacity>
				</View>
				<Text style={styles.headerText}>TOURISM SERVICES</Text>
			</View>
			<FlatList
				numColumns={1}
				data={tourismSections}
				contentContainerStyle={{ marginTop: 0 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={{ height: verticalScale(225) }}>
						<TouchableOpacity
							onPress={() =>
								router.push(`./(user)/home/(tourism)/${item.pageName}`)
							}
						>
							<Text style={styles.imageText}>{item.sectionName}</Text>
						</TouchableOpacity>
						<View>
							<Image source={{ uri: item.image }} style={styles.pageImage} />
						</View>
					</View>
				)}
			/>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 150,
	},
	headerImage: {
		paddingTop: 30,
		width: '100%',
		height: 150,
		paddingHorizontal: 20,
	},
	headerText: {
		position: 'absolute',
		top: 90,
		left: 50,
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	linearGradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	arrowImage: {
		height: verticalScale(20),
		width: scale(25),
	},
	arrowContainer: {
		position: 'absolute',
		top: 10,
		left: 10,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	pageImage: {
		height: verticalScale(175),
		width: scale(330),
		borderRadius: 10,
		marginLeft: 10,
		marginTop: 0,
	},
	imageText: {
		fontSize: 25,
		fontWeight: '600',
		marginLeft: 10,
		color: '#4E7E95',
	},
});
