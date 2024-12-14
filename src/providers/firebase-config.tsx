import { Platform } from 'react-native';

const firebaseConfigIOS = {
	apiKey: 'AIzaSyA-lhwl1Cqt-qV-YGIlSH7QH-WYac5haBw',
	authDomain: 'municipality-graduation.firebaseapp.com',
	projectId: 'municipality-graduation',
	storageBucket: 'municipality-graduation.firebasestorage.app',
	messagingSenderId: '362379594822',
	appId: '1:362379594822:android:ac7850a6fbf5678a3d8e47',
	databaseURL:
		'https://municipality-graduation-default-rtdb.europe-west1.firebasedatabase.app',
};

const firebaseConfigANDROID = {
	apiKey: 'AIzaSyA-lhwl1Cqt-qV-YGIlSH7QH-WYac5haBw',
	authDomain: 'municipality-graduation.firebaseapp.com',
	projectId: 'municipality-graduation',
	storageBucket: 'municipality-graduation.firebasestorage.app',
	messagingSenderId: '362379594822',
	appId: '1:362379594822:android:ac7850a6fbf5678a3d8e47',
	databaseURL:
		'https://municipality-graduation-default-rtdb.europe-west1.firebasedatabase.app',
};

const firebaseConfig = Platform.select({
	ios: firebaseConfigIOS,
	android: firebaseConfigANDROID,
	default: firebaseConfigIOS,
});

export default firebaseConfig;
