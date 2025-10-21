// Example JavaScript for dynamically adding messages
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to latest message
}

sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userInput.value = ''; // Clear input
        // Simulate bot response (replace with your actual chatbot logic)
        setTimeout(() => {
            if (message.toLowerCase().includes('hello')) {
                    addMessage("Hi there! How can I assist you today?", 'bot');
            } else if (message.toLowerCase().includes('time')) {
                    addMessage(`The current time is ${new Date().toLocaleTimeString()}.`, 'bot');
            } else if (message.toLowerCase().includes('ui')) {
                    addMessage("Sure! What kind of UI are you interested in?", 'bot');
            }
            else {
                    addMessage("Sorry, I don't understand that. Try asking something else!", 'bot');
            }
        }, 1000);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

// Add initial welcome message on load if not already present in HTML
if (chatWindow.children.length === 0) {
        addMessage("Hello there! I can answer about science and more. What would you like to know?", 'bot');
}
