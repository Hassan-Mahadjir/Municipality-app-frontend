import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/Appointment-report-Header';
import { verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import { useTranslation } from 'react-i18next';
import { useProfile } from '@/services/api/profile';

interface HeaderProps {
	selectedCategory: string;
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({
	setSelectedCategory,
	selectedCategory,
}) => {
	const router = useRouter();
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const { profileData } = useProfile();
	const firstName = profileData?.data.data.firstName;
	const category = [t('report'), t('request'), t('animal')];

	return (
		<View style={styles.headerContainer}>
			<View style={styles.subHeaderContianer}>
				<Text style={styles.greetMsg}>
					{t('hello')},<Text style={styles.userName}> {firstName}</Text>
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
				<Text style={styles.greetMsg}>{t('reportMessage')}</Text>
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
