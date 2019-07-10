import firebase from 'firebase';

const config={
    apiKey: "AIzaSyD6okxJ5nVDRrSn5ohdELdhgEvada0NVgg",
    authDomain: "reactauth-af384.firebaseapp.com",
    databaseURL: "https://reactauth-af384.firebaseio.com",
    projectId: "reactauth-af384",
    storageBucket: "reactauth-af384.appspot.com",
    messagingSenderId: "780158503236",
    appId: "1:780158503236:web:6f1503fe845f8877"
}
const fire = firebase.initializeApp(config)
export default fire;