import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAMJxQ3EM1PgKHJ0fZT2xSLnHetkRg3l64",
    authDomain: "ng-blog-8cac5.firebaseapp.com",
    databaseURL:"https://ng-blog-8cac5.firebaseio.com",
    projectId: "ng-blog-8cac5",
    storageBucket: "ng-blog-8cac5.appspot.com",
    messagingSenderId: "102866286464",
    appId: "1:102866286464:web:2874e32387c3965f6bf365"
  };



// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;