// Scroll to Features Section
function scrollToFeatures() {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

// Scroll to AI Tutor Section
function scrollToAITutor() {
  document.getElementById("ai-tutor").scrollIntoView({ behavior: "smooth" });
}

// Show Quiz Section
function showQuizSection() {
  document.getElementById("quiz-section").style.display = "block";
}

// Ask AI Tutor
async function askAITutor() {
  const userInput = document.getElementById("userInput").value;
  if (userInput.trim() === "") return;

  // Display user input in chat box
  const chatBox = document.getElementById("chatBox");
  const userMessage = document.createElement("div");
  userMessage.classList.add("text-right", "p-2", "bg-primary", "text-white", "rounded");
  userMessage.textContent = `You: ${userInput}`;
  chatBox.appendChild(userMessage);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear the input field
  document.getElementById("userInput").value = "";

  // Send the user input to the server (Node.js backend)
  const response = await fetch("http://localhost:5000/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userInput }),
  });

  const data = await response.json();
  const aiMessage = document.createElement("div");
  aiMessage.classList.add("text-left", "p-2", "bg-secondary", "text-white", "rounded");
  aiMessage.textContent = `AI: ${data.reply}`;
  chatBox.appendChild(aiMessage);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Calculate Quiz Score
function calculateScore() {
  let score = 0;
  const correctAnswers = {
    quiz1: "A",
    quiz2: "B",
    quiz3: "B",
    quiz4: "C"
  };

  // Check answers for each quiz
  for (let i = 1; i <= 4; i++) {
    const selectedAnswer = document.querySelector(`input[name="quiz${i}"]:checked`);
    const resultElement = document.getElementById(`quiz-result-${i}`);

    if (selectedAnswer) {
      const answerValue = selectedAnswer.value;
      if (answerValue === correctAnswers[`quiz${i}`]) {
        score++;
        resultElement.textContent = "Correct!";
        resultElement.classList.add("text-success");
      } else {
        resultElement.textContent = "Wrong!";
        resultElement.classList.add("text-danger");
      }
    }
  }

  // Display final score
  alert(`You scored ${score} out of 4.`);
}
function calculateScore() {
  let score = 0;
  const correctAnswers = {
    quiz1: "A",
    quiz2: "B",
    quiz3: "B",
    quiz4: "C"
  };

  // Check answers for each quiz
  for (let i = 1; i <= 4; i++) {
    const selectedAnswer = document.querySelector(`input[name="quiz${i}"]:checked`);
    const resultElement = document.getElementById(`quiz-result-${i}`);

    if (selectedAnswer) {
      const answerValue = selectedAnswer.value;
      if (answerValue === correctAnswers[`quiz${i}`]) {
        score++;
        resultElement.textContent = "Correct!";
        resultElement.classList.add("text-success");
      } else {
        resultElement.textContent = "Wrong!";
        resultElement.classList.add("text-danger");
      }
    }
  }

  // Display the score in the modal
  const scoreMessage = document.getElementById("scoreMessage");
  scoreMessage.textContent = `You scored ${score} out of 4`;

  // Show the modal
  const scoreModal = new bootstrap.Modal(document.getElementById("scoreModal"));
  scoreModal.show();
}

// Function to scroll to "Watch Your Progress" section
function scrollToProgress() {
  document.getElementById('progress-section').scrollIntoView({ behavior: 'smooth' });
}

// Sample data for progress chart (you can modify this based on your progress)
const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript'],
    datasets: [{
      label: 'Progress',
      data: [70, 50, 30],  // Percentage progress for each subject
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});




