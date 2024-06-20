let phoneNumber = '';

function addToPhoneNumber(number) {
    phoneNumber += number;
    updatePhoneNumberDisplay();
}

function updatePhoneNumberDisplay() {
    const phoneNumberDisplay = document.getElementById('phone-number');
    phoneNumberDisplay.textContent = phoneNumber;
}

document.getElementById('add-number').addEventListener('click', function() {
    alert('Add Number button clicked!');
});

const firebaseConfig = {
    apiKey: "AIzaSyDlpmJt1ERJlT6jDRGX-ey0ZtGi59gVXzI",
    authDomain: "callgrandson-627be.firebaseapp.com",
    projectId: "callgrandson-627be",
    storageBucket: "callgrandson-627be.appspot.com",
    messagingSenderId: "690668716802",
    appId: "1:690668716802:web:6ca04a7fc70b7057c8b81b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig) 