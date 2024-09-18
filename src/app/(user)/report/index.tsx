import Header from '@/components/report/Header';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Request from '@/components/report/Request';
import Report from '@/components/report/Report';

const userReportIndex = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>('Report');
	const renderContent = () => {
		switch (selectedCategory) {
			case 'Request':
				return <Request />;
			default:
				return <Report />;
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
};

export default userReportIndex;
