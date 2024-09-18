import { View } from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/appointment/Header';
import MyAppointment from '@/components/appointment/MyAppointment';

import History from '@/components/appointment/History';
import Available from '@/components/appointment/Available';

export default function UserAppointmentIndx() {
	const [selectedCategory, setSelectedCategory] = useState<string>('Available');

	const renderContent = () => {
		switch (selectedCategory) {
			case 'History':
				return <History />;
			case 'My Appointment':
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
