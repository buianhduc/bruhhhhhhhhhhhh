const firebase = require('firebase-admin');
var firebaseConfig = {
    apiKey: "AIzaSyDMa8pA5mGs42E5-YeHVnKoKXK6B07AY1I",
    authDomain: "question-app-1dd72.firebaseapp.com",
    databaseURL: "https://question-app-1dd72.firebaseio.com",
    projectId: "question-app-1dd72",
    storageBucket: "question-app-1dd72.appspot.com",
    messagingSenderId: "168720238212",
    appId: "1:168720238212:web:3b9f64c204d53b1a17a4d1",
    measurementId: "G-8GDS6RTYV3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
    const db = firebase.firestore();

    let data = [
        {
            "questionTitle": "Đây là nhạc cụ gì?",
            "image": "images/cello.jpg",
            "answers": [
                {
                    "value" : "Trung Hồ Cầm",
                    "isTrue" : true
                },
                {
                    "value" : "Vĩ Cầm",
                    "isTrue" : false
                },
                {
                    "value" : "Vĩ Cầm Trầm",
                    "isTrue" : false
                },
                {
                    "value" : "Đại Hồ Cầm",
                    "isTrue" : false
                }
            ]
        },
        {
            "questionTitle": "Đây là nhạc cụ gì?",
            "image": "images/dan_nguyet.jpg",
            "answers": [
                {
                    "value" : "Đàn nguyệt",
                    "isTrue" : true
                },
                {
                    "value" : "Đàn Tí Bà",
                    "isTrue" : false
                },
                {
                    "value" : "Đàn Nhị",
                    "isTrue" : false
                },
                {
                    "value" : "Đàn Bầu",
                    "isTrue" : false
                }
            ]
        },
        {
            "questionTitle": "Đây là nhạc cụ gì?",
            "image": "images/saxophone.jpg",
            "answers": [
                {
                    "value" : "Saxophone",
                    "isTrue" : true
                },
                {
                    "value" : "Trumpet",
                    "isTrue" : false
                },
                {
                    "value" : "Cornet",
                    "isTrue" : false
                },
                {
                    "value" : "Vibraphone",
                    "isTrue" : false
                }
            ]
        },
        {
            "questionTitle": "Đây là nhạc cụ gì?",
            "image": "images/otamatone.jpg",
            "answers": [
                {
                    "value" : "Otamatone",
                    "isTrue" : true
                },
                {
                    "value" : "Shamisen",
                    "isTrue" : false
                },
                {
                    "value" : "taiko",
                    "isTrue" : false
                },
                {
                    "value" : "Shakuhachi",
                    "isTrue" : false
                }
            ]
        },
        {
            "questionTitle": "Đây là nhạc cụ gì?",
            "image": "images/phach.jpg",
            "answers": [
                {
                    "value" : "Phách",
                    "isTrue" : true
                },
                {
                    "value" : "Gậy Tiền",
                    "isTrue" : false
                },
                {
                    "value" : "Mõ",
                    "isTrue" : false
                },
                {
                    "value" : "Trống Bẹt",
                    "isTrue" : false
                }
            ]
        },
        {
            "questionTitle": "Đây là nhạc cụ gì?",
            "image": "images/ukulele.jpg",
            "answers": [
                {
                    "value" : "Ukulele",
                    "isTrue" : true
                },
                {
                    "value" : "Guitar",
                    "isTrue" : false
                },
                {
                    "value" : "Liuqin",
                    "isTrue" : false
                },
                {
                    "value" : "Banjo",
                    "isTrue" : false
                }
            ]
        }
    ]
    data.map(item => {
        db.collection('questions').add(item)
            .then(docRef => {
                console.log(`${docRef} has been submited`)
            })
            .catch(err => {
                console.log(`Error adding document: ${err}`);
            })
    })
    
    