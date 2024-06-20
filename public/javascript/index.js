document.addEventListener('DOMContentLoaded', function() {
    let phoneNumber = '';

    function addToPhoneNumber(number) {
        phoneNumber += number;
        updatePhoneNumberDisplay();
    }

    function updatePhoneNumberDisplay() {
        const phoneNumberDisplay = document.getElementById('phone-number');
        if (phoneNumberDisplay) {
            phoneNumberDisplay.textContent = phoneNumber;
        }
    }

    // Firebase 초기화
    const firebaseConfig = {
        apiKey: "AIzaSyDlpmJt1ERJlT6jDRGX-ey0ZtGi59gVXzI",
        authDomain: "callgrandson-627be.firebaseapp.com",
        projectId: "callgrandson-627be",
        storageBucket: "callgrandson-627be.appspot.com",
        messagingSenderId: "690668716802",
        appId: "1:690668716802:web:6ca04a7fc70b7057c8b81b"
    };
    firebase.initializeApp(firebaseConfig);

    // addToPhoneNumber 함수를 글로벌 범위로 설정
    window.addToPhoneNumber = addToPhoneNumber;
});