import { View } from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/appointment/Header';
import MyAppointment from '@/components/appointment/MyAppointment';

import History from '@/components/appointment/History';
import Available from '@/components/appointment/Available';
import { useTranslation } from 'react-i18next';

export default function UserAppointmentIndx() {
	const { i18n, t } = useTranslation();

	const [selectedCategory, setSelectedCategory] = useState<string>(
		t('available')
	);

	const renderContent = () => {
		switch (selectedCategory) {
			case t('history'):
				return <History />;
			case t('myAppointment'):
				return <MyAppointment />;
			default:
				return <Available />;
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<Header
				setSelectedCategory={setSelectedCategory}
				selectedCategory={selectedCategory}
			/>
			{renderContent()}
		</View>
	);
}
