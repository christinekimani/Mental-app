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
  const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showNextSlide() {
  // Increment the current index
  currentIndex = (currentIndex + 1) % slides.length;

  // Move the carousel to show the next slide
  const offset = currentIndex * -100; // Shift slides by 100% per slide
  carousel.style.transform = `translateX(${offset}%)`;
}

// Auto-play every 3 seconds
setInterval(showNextSlide, 3000);
document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  const offset = currentIndex * -100;
  carousel.style.transform = `translateX(${offset}%)`;
});

document.getElementById('next-btn').addEventListener('click', () => {
  showNextSlide();
});

  