const chatbox = document.getElementById('chatbox');
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');

function botReply(question) {
    // Simple hardcoded responses
    const responses = {
        "hello": "Hi! How can I help you?",
        "how are you": "I'm a bot, but I'm doing great!",
        "what is your name": "I'm your friendly chatbot.",
        "bye": "Goodbye! Have a nice day."
    };
    const q = question.trim().toLowerCase();
    return responses[q] || "Sorry, I don't understand that. Try asking something else!";
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const userText = input.value.trim();
    if (!userText) return;
    chatbox.innerHTML += `<div class="myreq myreqin" >${userText}</div>`;
    const answer = botReply(userText);
    chatbox.innerHTML += `<div class = "botans" > ${answer}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
    input.value = '';
});