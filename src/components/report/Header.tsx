import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/Appointment-report-Header';
import { verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';

interface HeaderProps {
	selectedCategory: string;
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const category = ['Report', 'Request'];

const Header: React.FC<HeaderProps> = ({
	setSelectedCategory,
	selectedCategory,
}) => {
	const router = useRouter();

	return (
		<View style={styles.headerContainer}>
			<View style={styles.subHeaderContianer}>
				<Text style={styles.greetMsg}>
					Hello,<Text style={styles.userName}> Mel</Text>
				</Text>

				<View style={[styles.subHeaderContianer, { gap: 25, marginRight: 10 }]}>
					{/* Press Notification */}
					<TouchableOpacity
						onPress={() => {
							router.push('/notification');
						}}
					>
						<Ionicons name='notifications-circle' size={30} color='#fff' />
					</TouchableOpacity>
				</View>
			</View>
			<View>
				<Text style={styles.greetMsg}>Let’s improve our city!</Text>
				<FlatList
					data={category}
					horizontal={true}
					keyExtractor={(item) => item}
					style={{ marginVertical: verticalScale(10) }}
					contentContainerStyle={{ gap: 5 }}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<NewsCategory
							item={item}
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>
					)}
				/>
			</View>
		</View>
	);
};

export default Header;
