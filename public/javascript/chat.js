document.getElementById('send-button').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('user-input');
    const messageText = input.value.trim();
    if (messageText === '') return;

    appendMessage('user', messageText);
    input.value = '';

    setTimeout(() => {
        generateResponse(messageText);
    }, 1000);
}

function appendMessage(sender, text) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function generateResponse(userMessage) {
    let response = "기본 응답입니다."; // Default response

    if (userMessage.includes('도와줘')) {
        response = "야구 예매 도와줘.";
    } else if (userMessage.includes('삼성라이온즈 5월 24일 경기')) {
        response = "정확한 인원수를 말씀해주세요.";
    } else if (userMessage.match(/\d+명/)) {
        response = "확인했습니다. 유형: 야구 날짜: 2024년 05월 24일 구단: 삼성라이온즈 인원: " + userMessage + " 이 맞습니까?";
    }

    appendMessage('system', response);
}
