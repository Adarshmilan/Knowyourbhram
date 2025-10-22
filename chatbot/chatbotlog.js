const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

let loadingInterval = null;

// Loading indicator functions
function showLoading() {
  if (document.getElementById('bot-loading')) return;
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'bot-loading';
  loadingDiv.classList.add('message', 'bot-message', 'loading');
  const dotSpan = document.createElement('span');
  dotSpan.className = 'loading-dots';
  dotSpan.textContent = '';
  loadingDiv.innerHTML = `<p style="opacity:0.9;margin:0">typing</p>`;
  loadingDiv.querySelector('p').appendChild(dotSpan);
  chatWindow.appendChild(loadingDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  let dots = 0;
  loadingInterval = setInterval(() => {
    dots = (dots + 1) % 4;
    dotSpan.textContent = '.'.repeat(dots);
  }, 400);
}

function hideLoading() {
  const el = document.getElementById('bot-loading');
  if (el) el.remove();
  if (loadingInterval) {
    clearInterval(loadingInterval);
    loadingInterval = null;
  }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to latest message
}

let prestr = "i am going to ask you some questions. Answer them in the most understandable way possible as i am a kid not knowing too much in around 20-30 words, and act as you are a human as teacher who promote curiosity and love childeren. make the answer sort and do not use too much heavy words try to keep it simple as it is for a kid. And if i will ask name just respond chiki. Also, be friendly and engaging. Here is my question: ";

sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userInput.value = ''; 
        showLoading();
        console.log("Fetching response from Puter AI...");
        puter.ai.chat(prestr + message, { model: "gpt-5" })
          .then(response => {
              console.log("Response received:", response);
              hideLoading();
              addMessage(response, 'bot');
          })
          .catch(err => {
              console.error('Puter error:', err);
              hideLoading();
              addMessage("Sorry, I'm having trouble answering right now.", 'bot');
          });
        console.log("Response request sent. ");

    } else {
        addMessage("bhai phele kuch likh to le", 'bot');
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

// Add initial welcome message on load if not already present in HTML
if (chatWindow.children.length === 0) {
        addMessage("Hello there! I can answer about science and more in most understandable ways . What would you like to know?", 'bot');
}



