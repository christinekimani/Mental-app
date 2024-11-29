document.getElementById('question-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get the user's question
    const questionInput = document.getElementById('question-input');
    const userQuestion = questionInput.value.trim();
  
    // Display the question in the chat
    const messagesDiv = document.getElementById('messages');
    const userMessage = document.createElement('div');
    userMessage.textContent = userQuestion;
    userMessage.style.marginBottom = '10px';
    messagesDiv.appendChild(userMessage);
  
    // Clear the input
    questionInput.value = '';
  
    // Simulate a bot response
    const botResponse = document.createElement('div');
    botResponse.textContent = 'Thank you for your question. We’ll get back to you soon.';
    botResponse.style.color = '#6c63ff';
    messagesDiv.appendChild(botResponse);
  
    // Scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  });
  