import { getApp, getApps, initializeApp } from 'firebase/app';
import firebaseConfig from './firebase-config';

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export default firebaseApp;
