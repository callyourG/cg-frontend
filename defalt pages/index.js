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