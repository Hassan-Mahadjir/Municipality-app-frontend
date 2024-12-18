import { View, FlatList } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/constants/Colors';

interface HeaderProps {
	selectedCategory: string;
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({
	setSelectedCategory,
	selectedCategory,
}) => {
	const { t } = useTranslation();
	const category = [t('lostFound'), t('shelter')];

	return (
		<View
			style={{
				backgroundColor: COLORS.secondary,
			}}
		>
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
	);
};

export default Header;
