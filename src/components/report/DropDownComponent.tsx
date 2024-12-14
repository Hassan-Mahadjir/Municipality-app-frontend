import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

type DropdownItem = {
	label: string;
	value: string;
};

type DropdownComponentProps = {
	data: DropdownItem[];
	value: string | null;
	onChange: (value: string) => void;
	placeholder?: string;
	searchPlaceholder?: string;
};

const DropdownComponent = ({
	data,
	value,
	onChange,
	placeholder = 'Select item',
	searchPlaceholder = 'Search...',
}: DropdownComponentProps) => {
	const renderItem = (item: DropdownItem) => (
		<View style={styles.item}>
			<Text style={styles.textItem}>{item.label}</Text>
			{item.value === value && (
				<AntDesign style={styles.icon} color='black' name='Safety' size={20} />
			)}
		</View>
	);

	return (
		<Dropdown
			style={styles.dropdown}
			placeholderStyle={styles.placeholderStyle}
			selectedTextStyle={styles.selectedTextStyle}
			inputSearchStyle={styles.inputSearchStyle}
			iconStyle={styles.iconStyle}
			data={data}
			search
			maxHeight={300}
			labelField='label'
			valueField='value'
			placeholder={placeholder}
			searchPlaceholder={searchPlaceholder}
			value={value}
			onChange={(item) => onChange(item.value)}
			renderLeftIcon={() => (
				<AntDesign style={styles.icon} color='black' name='Safety' size={20} />
			)}
			renderItem={renderItem}
		/>
	);
};

export default DropdownComponent;

const styles = StyleSheet.create({
	dropdown: {
		marginBottom: verticalScale(10),
		height: verticalScale(35),
		backgroundColor: 'white',
		borderRadius: scale(10),
		padding: scale(10),
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	icon: {
		marginRight: scale(5),
	},
	item: {
		padding: scale(12),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textItem: {
		flex: 1,
		fontSize: moderateScale(14),
	},
	placeholderStyle: {
		fontSize: moderateScale(14),
	},
	selectedTextStyle: {
		fontSize: moderateScale(14),
	},
	iconStyle: {
		width: scale(16),
		height: verticalScale(20),
	},
	inputSearchStyle: {
		height: verticalScale(32),
		fontSize: moderateScale(14),
	},
});
