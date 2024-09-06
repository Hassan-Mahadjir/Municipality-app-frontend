import { ScrollView, FlatList } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import tourismSections from '../../../../assets/data/toursimSections.json';
import { scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/tourismMain';
import Header from '@/components/services/Header';
import HealthServicesComponent from '@/components/services/HealthServicesComponent';

export default function tourismMain() {
	const router = useRouter();
	const headerpic = require('../../../../assets/images/tourism-header.jpg');

	return (
		<View style={{ paddingBottom: scale(50) }}>
			<Header
				title='TOURISM SERVICES'
				backgroundImage={headerpic}
				onBackPress={() => router.back()}
			/>
			<FlatList
				data={tourismSections}
				contentContainerStyle={{ marginTop: 0 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<HealthServicesComponent
						title={item.sectionName}
						backgroundImage={{
							uri: item.image,
						}}
						onPress={() =>
							router.push('/(user)/home/(tourism)/' + item.pageName)
						}
					/>
				)}
			/>
		</View>
	);
}
