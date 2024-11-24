document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');

    // Initial messages
    const initialMessages = [
        {
            text: "Hey! How are you doing?",
            sent: false,
            timestamp: "10:30 AM"
        },
        {
            text: "I'm doing great! Just working on some new projects.",
            sent: true,
            timestamp: "10:31 AM"
        }
    ];

    // Function to format timestamp
    const getFormattedTime = () => {
        return new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Function to create message element
    const createMessageElement = (message) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sent ? 'sent' : 'received'}`;
       
        const messageText = document.createElement('div');
        messageText.textContent = message.text;
       
        const timeSpan = document.createElement('div');
        timeSpan.className = 'message-time';
        timeSpan.textContent = message.timestamp;
       
        messageDiv.appendChild(messageText);
        messageDiv.appendChild(timeSpan);
       
        return messageDiv;
    };

    // Function to add message to chat
    const addMessage = (text, sent = true) => {
        const message = {
            text,
            sent,
            timestamp: getFormattedTime()
        };
       
        const messageElement = createMessageElement(message);
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    // Load initial messages
    initialMessages.forEach(message => {
        const messageElement = createMessageElement(message);
        messagesContainer.appendChild(messageElement);
    });

    // Handle form submission
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = messageInput.value.trim();
       
        if (text) {
            addMessage(text, true);
            messageInput.value = '';
           
            // Simulate received message after a short delay
            setTimeout(() => {
                addMessage('Thanks for your message!', false);
            }, 1000);
        }
    });

    // Handle enter key
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            messageForm.dispatchEvent(new Event('submit'));
        }
    });

    // Add click handlers for buttons
    document.querySelectorAll('.action-btn, .input-action-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Simulate button click feedback
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });
});