import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/header.home';
import { useTranslation } from 'react-i18next';

const languages = [
	{
		language: 'English',
		icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPBPqWZYVq8mLRYze0GenCRF5Sgaqh_fcJg&s',
	},
	{
		language: 'Turkish',
		icon: 'https://static-00.iconduck.com/assets.00/turkey-icon-2048x1463-17xa9jlu.png',
	},
];
const ModalPopUp = ({ visible, children }) => {
	
	const [showModal, setShowModal] = useState(visible);
	useEffect(() => {
		toggleModal();
	}, [visible]);

	const toggleModal = () => {
		if (visible) {
			setShowModal(true);
		} else {
			setShowModal(false);
		}
	};
	return (
		<Modal
			transparent
			visible={showModal}
			onRequestClose={() => setShowModal(false)}
		>
			<View style={styles.modalBackground}>
				<View style={[styles.ModalContainer]}>{children}</View>
			</View>
		</Modal>
	);
};

export default function Header() {
	const router = useRouter();
	const [isModalVisible, setIsModalVisible] = useState(false);

	const { t } = useTranslation(); // Translation hook
	const hello = t("hello");




	return (
		<View style={styles.headerContainer}>
			<View style={styles.subHeaderContianer}>
				<Text style={styles.greetMsg}>
					{hello},<Text style={styles.userName}> Hassan</Text>
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
					{/* Press Change Language */}
					<TouchableOpacity onPress={() => setIsModalVisible(true)}>
						<FontAwesome name='language' size={30} color='#fff' />
					</TouchableOpacity>

					<ModalPopUp visible={isModalVisible}>
						<View style={{}}>
							<View style={styles.modalHeader}>
								<Text style={styles.modalText}>System Language</Text>
								<TouchableOpacity onPress={() => setIsModalVisible(false)}>
									<Feather name='x' size={24} color='black' />
								</TouchableOpacity>
							</View>
							<View>
								{languages.map((item, index) => (
									<View key={index} style={styles.modalItem}>
										<Image
											source={{ uri: item.icon }}
											resizeMode='contain'
											style={{ height: 40, width: 30 }}
										/>
										<TouchableOpacity>
											<Text style={{ fontSize: 18 }}>{item.language}</Text>
										</TouchableOpacity>
									</View>
								))}
							</View>
						</View>
					</ModalPopUp>
				</View>
			</View>

			<View style={styles.weatherContainer}>
				<Text style={styles.temprtureStatus}>Pretty Sunny</Text>
				<View style={styles.weatherWrapper}>
					<MaterialIcons name='sunny' size={64} color='#FCFC07' />
					<Text style={styles.temprtureText}>30 C</Text>
				</View>
			</View>
		</View>
	);
}
